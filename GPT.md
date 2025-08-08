The code you've shared implements a **transformer-based decoder-only language model** using rotary positional embeddings (RoPE), attention with caching, and mixture-of-experts (MoE) MLPs. Below is a **mathematical formulation** summarizing the key components and flow:

---

## 🔸 Overall Architecture

Let:

* $x \in \mathbb{R}^{B \times T}$: input token indices
* $E \in \mathbb{R}^{V \times d_{\text{model}}}$: embedding matrix
* $h = \text{num\_heads}$, $d_h = \text{head\_dim}$, $d = h \cdot d_h$
* $L$: number of transformer layers
* $\text{MoE}$: mixture-of-experts MLP
* $y \in \mathbb{R}^{B \times T \times V}$: output logits

### 1. **Embedding**

$$
X_0 = \text{Embedding}(x) = E[x]
$$

---

## 🔸 Transformer Block (Repeated $L$ times)

Let $X_l$ be the input to layer $l$.

### 2. **RMSNorm**

$$
\hat{X}_l = \text{RMSNorm}(X_l)
$$

### 3. **QKV Projection**

$$
Q = \hat{X}_l W_q, \quad K = \hat{X}_l W_k, \quad V = \hat{X}_l W_v
$$

where $Q \in \mathbb{R}^{B \times T \times h \times d_h}$, etc.

---

## 🔸 Rotary Positional Embedding (RoPE)

For RoPE:

* Construct inverse frequency:

$$
\omega_i = \frac{1}{\theta^{2i / d_h}}, \quad \theta = \texttt{rope\_theta}
$$

* Position vector $t \in \mathbb{R}^T$
* Apply rotation:

$$
Q^{\text{rot}} = \text{RoPE}(Q, t), \quad K^{\text{rot}} = \text{RoPE}(K, t)
$$

The rotation is applied as:

$$
\text{RoPE}(q) = \begin{bmatrix} q_{\text{even}} \cos(\omega t) - q_{\text{odd}} \sin(\omega t) \\ q_{\text{odd}} \cos(\omega t) + q_{\text{even}} \sin(\omega t) \end{bmatrix}
$$

---

## 🔸 Attention

With scaling factor $\alpha = \frac{1}{\sqrt{d_h}}$:

$$
\text{Attention}(Q, K, V) = \text{Softmax}\left( \alpha \cdot \frac{Q K^\top}{\text{sliding\_window\_mask}} \right) V
$$

Let:

* $A_l$: attention output for layer $l$

Then:

$$
A_l = \text{Attention}(Q^{\text{rot}}, K^{\text{rot}}, V)
$$

---

## 🔸 Residual and Output Projection

$$
X_l' = X_l + A_l W_o
$$

---

## 🔸 MoE Feedforward Layer

The mixture-of-experts block applies expert routing via top-k gating:

$$
t = \text{RMSNorm}(X_l') \\
\text{Gate} = \text{Softmax}(t W_g + b_g) \in \mathbb{R}^{B \cdot T \times E}
$$

Where $E$ is the number of experts. Then:

$$
\text{MoE}(t) = \sum_{i=1}^{k} \text{Gate}_i \cdot \left( \text{SwigLU}(t W_{1}^{(i)} + b_{1}^{(i)}) W_{2}^{(i)} + b_{2}^{(i)} \right)
$$

Apply residual:

$$
X_{l+1} = X_l' + \text{MoE}(t)
$$

---

## 🔸 Final Output

After $L$ blocks:

$$
X_{\text{final}} = \text{RMSNorm}(X_L)
$$

$$
y = X_{\text{final}} W_{\text{out}}
$$

---

## 🔸 Token Sampling

For temperature $T$, sample:

$$
P(v) = \text{Softmax}(y / T)
$$

If $T = 0$: use $\arg\max$. Otherwise, sample from $P$.

---

## 🔸 Summary Equation (End-to-End)

$$
y = \text{Unembed} \circ \text{RMSNorm} \circ \left[ \prod_{l=1}^L \left( \text{MoE}_l \circ \text{Residual} \circ \text{Attention}_l \circ \text{RoPE} \circ \text{RMSNorm} \right) \right] \circ \text{Embedding}(x)
$$

Where $\circ$ denotes function composition.

---

Let me know if you want LaTeX-rendered version or a diagrammatic representation.
