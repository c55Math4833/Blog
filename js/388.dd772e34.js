"use strict";(globalThis["webpackChunkblog"]=globalThis["webpackChunkblog"]||[]).push([[388],{13388:(t,n,a)=>{a.r(n),a.d(n,{default:()=>h});var $=a(59835);function e(t,n,a,e,_,r){const o=(0,$.up)("q-markdown"),i=(0,$.up)("q-page");return(0,$.wg)(),(0,$.j4)(i,{padding:""},{default:(0,$.w5)((()=>[(0,$.Wm)(o,{plugins:t.plugins,class:"Note"},{default:(0,$.w5)((()=>[(0,$.Uk)("# 生物處理\n---\n## 1. 基礎微生物學\n### 1.1 細胞之特徵\n- 特徵：\n\t- 能生長與繁殖\n\t- 高度組織並嚴格選擇與限制部分物質通過細胞膜\n\t- 主要由 C、N、O、S 組成\n\t- 可自行攝取環境外部有用物質以維持生理運作與繁殖\n\n- 原核細胞(Prokayote)之組成\n\t- Chromosome(染色體)\n\t- Ribosomes(核醣體)\n\t- Cytoplasm(細胞質)\n\t- Cytoplasmic membrane(細胞膜)\n\t- Cell wall(細胞壁)\n---\n### 1.2 微生物之分類\n- 分類\n\t- **Prokayote(原核生物)**\n\t\t- **Bacteria(細菌)**\n\t\t- **Achaea(古細菌)**\n\t- **Eukarya(真核生物)**\n\t\t- Fungi(真菌)\n\t\t- Algae(藻類)\n\t\t- Protozoa(原生動物)\n\t\t- Other\n\n- 五界學說\n\t- Monera(原核生物)\n\t- Portista(原生生物)\n\t- Myceteae(菌物)\n    - Plantae(植物)\n    - Animalia(動物)\n\n- **命名(名詞解釋)**：\n  - ![](Img/Notes/Biological_Process/99bfc347a8d63a412eb8375249bb73bc.png)\n  - 舉例：<font color=lime>Photo</font><font color=lightblue>organo</font><font color=gold>heterotroph</font> = <font color=lime>光學</font><font color=lightblue>有機</font><font color=gold>異營</font>菌\n---\n## 1.3 微生物之特徵\n- 選擇：決定許多微生物中，何種最適合於他們所處的環境並繁殖壯大族群的過程。而經過選擇後的族群往往能在環境中穩定生長，並維持穩定的生化反應。\n\t- 好氧廢水程序污染物通常是微生物的基質來源（電子供給者），而電子接受者為氧氣。\n\t\t- 電子接受者種類比較競爭性之順序：$\\rm O_2>NO_3^->SO_4^{2-}>CO_2$\n- Quorun sensing(群聚感應)：菌體持續放出自誘導物，隨族群增長濃度上升，當超過特定閾值會產生不同的反應（如生物膜中），細胞的表徵會改變。\n- Metabolism(新陳代謝)：細胞內化學過程的總稱，可分為分解代謝及合成代謝。\n\t- Catabolism(分解代謝)：指通過基質氧化或利用太陽光獲得能量的所有過程。\n\t- Anabolism(合成代謝)：由碳源合成細胞組成的所有過程。\n- Anaptation(適應)一族群對壓力的回應方式：\n\t- Oligotrophs：比生長速率很低的微生物，但微生物對基質的親和性很大\n\t- Copiotrophy：比生長速率較大的微生物，當近劉基質高負荷時，該類族群異狀大。\n---\n---\n# 2. 微生物化學計量\n\n## 2.1 微生物之化學反應式\n廢水中之酪蛋白，當被微生物氧化可獲得以下方程式：\n$$\\ce{C8H12O3N2 + 3O2 -> C5H7O2N + NH3 + 3CO2 + H2O}$$\n\n- 微生物之化學式 $\\rm C_5H_7O_2N$ 如何得知?\n\t- $\\rm C_5H_7O_2N$ 依營養源濃度及微生物種類有關。\n\t- 每克微生物完全氧化所需的需氧量（$g\\ COD\\mskip{-2mu}/\\mskip{-2mu}g_{cell}$）（計算題）\n\n- 電子供給者用於使細胞獲得能量與合成細胞主體的比例?\n\t- 部分電子流向電子接受者（$fe^0$），於傳遞過程產能。剩餘電子進入細胞，參與細胞合成與生理代謝（$fs^0$），故在質量平衡下 $fs^0+fe^0=1$（兩者分率相加等於 100%）。\n\t![](Img/Notes/Biological_Process/1647417632850.jpg)\n\n---\n## 2.2 收量（Yield）\n- **<font color=red>定義</font>**：提供單位質量的基質，可轉換為質量 Y 之生物質。故收量（Y）為，微生物之式量（$M_{cells}$）除以合成每 mole 細胞的基質質量，其中合成每 mole 細胞的質量可由合成每 mole 細胞之電子當量（$n_e$）除以單位電子提供於細胞合成的量（$f_s^0$），再乘以單位電子可產生 8 g 之 COD。\n- 收量：\n\t$$Y=\\frac{fs^0(M_c\\frac{g_{cells}}{mol_{cells}}) }{(n_e\\frac{e^-\\ eq}{mol_{cells}})(8\\frac{g_{COD}}{e^-_{eq \\ donor}})}$$\n\t- 其中：\n\t\t- $M_{cells}$：合成細胞之分子量。\n\t\t- $n_e$：每 mole 細胞之電子當量。\n\n---\n## 2.3 微生物生長速率\n- **<font color=red>定義</font>**：微生物生長速率（$\\frac{dX_a}{dt}$），為消耗基質產生的生物質量（Y），減去微生物內消耗導致的生物量衰減，其中生物量衰減，為微生物活體細胞量（$X_a$）乘以其單位衰減速率($b$)再除以其單位基質之利用率($\\frac{-dS}{dt}$）。\n- 微生物生長速率：\n\t$$\\frac{dX_a}{dt}=Y(\\frac{-dS}{dt})-bX_a$$\n    - 其中：\n\t\t- $\\frac{dX_a}{dt}$：活體細胞($X_a, ^M\\mskip{-8mu}/\\mskip{-5mu}_{L^3}$)之淨生長率。\n\t\t- $\\frac{-dS}{dt}$：基質($S, ^M\\mskip{-8mu}/\\mskip{-5mu}_{L^3}$)之利用率。\n\t\t- $b$：細胞衰變率($^1\\mskip{-3mu}/\\mskip{-2mu}_{T}$)。\n\t\t- $Y$：細胞收量($^M\\mskip{-5mu}/\\mskip{-5mu}_M$)。\n\n---\n## 2.4 最低維持能量(Maintenance energy)\n\n- **<font color=red>定義</font>**：當基質量無法使細胞增加但剛好足以維持細胞生理代謝時（$Y=0$)，單位生物質量（$X_a$）的基質利用率（$-dS\\mskip{-3mu}/\\mskip{-3mu}dt$）。\n- 最低維持能量（m）：\n\t$$m=\\frac{b}{Y}=\\frac{-dS\\mskip{-3mu}/\\mskip{-3mu}dt}{X_a}$$\n\n---\n---\n# 3. 微生物動力學\n\n## 3.1 微生物比生長速率\n- **<font color=red>定義</font>**：根據下述 Monod equations 之微生物生長速率（$\\mu_{syn}$）與微生物內消耗之生長速率（$\\mu_{dec}$）之加總，可得整體系統之靜微生物生長速率（$\\mu$）。\n- 微生物生長速率（$\\mu$）：\n$$\\mu=\\frac{1}{X_a}\\frac{dX_a}{dt}=\\mu_{syn}+\\mu_{dec}=\\hat{\\mu}\\frac{S}{K+S}-b$$\n- 引入收量概念得：\n\t$$r_{net}=Y\\frac{\\hat{q}S}{K+S}X_a-bX_a$$\n\t$$\\mu=Y\\frac{\\hat{q}S}{K+S}-b=Y\\left ( \\frac{\\hat{q}S}{K+S}-m \\right )$$\n\t- 其中：\n\t\t- $r_{net}$：淨活體細胞生長率（$^{M_X}\\mskip{-3mu}/\\mskip{-3mu}_{L^3T}$）。\n\t\t- $m$：基質用於維持生理代謝的利用率（$^{M_S}\\mskip{-3mu}/\\mskip{-3mu}_{M_XT}$）。\n\nK值變異性最大也最難預測，因數值受**基值**與**代謝酵素親和性**影響\n\n### 3.1.1 Monod equations (Saturation function)\n\n- **<font color=red>定義</font>**：細胞合成的比生長速率($\\mu$)，指單位細胞的生長速率，故為細胞生長量（$\\frac{dX_a}{dt}$）除以活體細胞濃度（$X_a$）。而特定基質濃度（$S$）下，比生長速率（$\\mu$）為基質濃度與其半飽和狀態濃度（$K$）之比值（$\\frac{S}{K+S}$）與最大比生長速率（$\\hat{\\mu}$）之乘積。\n- Monod equations：\n\t$$\\mu_{syn}=\\left (\\frac{1}{X_a}\\frac{dX_a}{dt}\\right )_{syn}=\\hat{\\mu}\\frac{S}{K+S}$$\n\t- 其中：\n\t\t- $\\mu_{syn}$：細胞合成的比生長速率（$^1\\mskip{-3mu}/\\mskip{-3mu}_{T}$）。\n\t\t- $X_a$：具活性的細胞濃度（$^{M_X}\\mskip{-3mu}/\\mskip{-3mu}_{L^{3}}$）。\n\t\t- $S$：造成速率限制的基質濃度（$^{M_S}\\mskip{-3mu}/\\mskip{-3mu}_{L^3}$）。\n\t\t- $\\hat{\\mu}$：最大比生長速率（$^1\\mskip{-3mu}/\\mskip{-3mu}_{T}$）。\n\t\t- $K$：半飽和常數（$^{M_S}\\mskip{-3mu}/\\mskip{-3mu}_{L^{3}}$）（最大比生長速率的 1/2 時的基質濃度）。\n- 反應級數：\n\t- 零級反應：當 S 很大時，Monod equations 為零級反應。\n\t- 一級反應：當 S 很低時，Monod equations 為零級反應。\n- 變形：由於常以基質利用率 $r_{ut}$ 做為參考數據，故轉換 Monod equations 為基質利用率，可得：\n\t- **<font color=red>定義</font>**：基質利用率（$r_{ut}$）表單位時間之基質消耗量，故等於細胞比生長速率（$\\mu$）與基質濃度（$S$）之乘積（$r_{ut}=\\mu_{syn}S$），而最大比生長速率（$\\hat{\\mu}$）與基質濃度（$S$）之乘積可分解為最大比基質利用率（$\\hat{q}$）與微生物濃度（$X_a$）之乘積。\n    $$\\begin{aligned}r_{ut}=\\mu_{syn}S&=\\hat{\\mu}\\frac{S}{K+S}S\\\\&=-\\hat{q}X_a\\frac{S}{K+S}\\end{aligned}$$\n\t- 其中：\n\t\t- $r_{ut}$：基質利用率（$^{M_S}\\mskip{-3mu}/\\mskip{-3mu}_{L^3T}$）。\n\t\t- $\\hat{q}$：最大比基質利用率（$^{M_S}\\mskip{-3mu}/\\mskip{-3mu}_{M_XT}$）。\n\n\n### 3.1.2 內消耗（Endogenous decay）\n\n- **<font color=red>定義</font>**：微生物需要能量以維持其生存，故存在一內耗能之生微生物比生長速率（$\\mu$），而內耗能為一級反應（反應速率僅與反應物濃度有關），故其內耗能之比生長速率（$\\mu$）等於內耗能之速率係數（$-b$）。\n- Endogenous decay：\n\t$$\\mu_{dec}=\\left (\\frac{1}{X_a}\\frac{dX_a}{dt}\\right )_{decay}=-b$$\n\t- 其中：\n\t\t- $\\mu_{dec}$：Decay 的比生長速率（$^1\\mskip{-3mu}/\\mskip{-3mu}_{T}$）。\n\t\t- $b$：Endogenous decay 係數（$^1\\mskip{-3mu}/\\mskip{-3mu}_{T}$）。\n- 反應級數：\n\t- 一級反應：Endogenous decay 為一級反應。\n\n####  3.1.2.1 氧化（Respiration）降解\n\n- **<font color=red>定義</font>**：微生物內消耗可分為氧化降解與失活兩種，其中大部分內消耗為氧化降解。故氧化降解之比生長速率為，一特定比例（$f_d$）之內消耗的比生長速率(與內消耗為一級反應)。\n- 氧化降解比生長速率：\n\t$$\\mu_{resp}=\\left (\\frac{1}{X_a}\\frac{dX_a}{dt}\\right )_{resp}=-f_db$$\n\t- 其中：\n\t\t- $f_d$：活體細胞中可氧化降解的比例。\n\n\n#### 3.1.2.2 成為失活微生物（惰性生物質 Inert biomass）\n\n- **<font color=red>定義</font>**：微生物內消耗可分為氧化降解與失活兩種，其中大部分內消耗為氧化降解，少量成為失活微生物（Cell block）。而成為失活微生物之比生長速率為非可氧化降解的比例（$1-f_d$）之內消耗的比生長速率（與內消耗為一級反應）。\n- 失活微生物比生長速率：\n\t$$\\mu_{inert}=\\left (\\frac{1}{X_a}\\frac{dX_a}{dt}\\right )_{inert}=-(1-f_d)b$$\n\t- 其中：\n\t\t- $X_i$：作為 Inert biomass 的濃度（$^M\\mskip{-3mu}/\\mskip{-3mu}_{L^3}$）。\n\t\t- $f_d$：活體細胞中可氧化降解的比例。\n\n---\n## 3.2 質量平衡\n- 基本結構：\n  ![](Img/Notes/Biological_Process/f0eee7e95999bd51ed1534d2fab6b5f0.png)\n\t- 其中：\n\t\t- $S^0$：初始基質濃度。\n\t\t- $Q$：供料流速。\n\t\t- $V$：槽體體積。\n\t\t- $S$：出流水基質濃度。\n\t\t- $X_a$：出流水活性菌體濃度。\n\t\t- $X_i$：出流水惰性菌體濃度。\n- 穩態時，可得：\n\t- $S$：出流水基質濃度：\n\t\t- $S=K\\left (\\frac{1+b\\theta x}{\\hat{q}Y\\theta x-(1+b\\theta x)}\\right )$\n\t- $X_a$：出流水活性菌體濃度：\n\t\t- $X_a=Y\\left (\\frac{S^0-S}{1+b\\theta x}\\right)$\n\t- $\\theta$：水力停留時間 (hydraulic detention time, HRT)：\n\t\t- $\\theta=\\frac{V}{Q}$\n\t- $\\theta_x$：污泥停留時間：\n\t\t- $\\theta_x=\\frac{系統中的活性生物量}{活性生物量的產率}=\\mu^{-1}$\n\t- $\\theta_x^{min}$：最小污泥停留時間，指開始 Washout 的污泥停留時間：\n\t\t- $\\theta_x^{min}=\\frac{K+S^0}{S^0(Y\\hat{q}-b)-bK}$\n\t- $\\left [\\theta_x^{min}\\right ]_{lim}$：絕對最小污泥停留時間：\n\t\t- $\\left [\\theta_x^{min}\\right ]_{lim}=\\frac{1}{Y\\hat{q}-b}$\n\t- $S_{min}$：能使生物質穩定之最低基質濃度：\n\t\t- $S_{min}=K\\frac{b}{\\hat{q}Y-b}$\n\n- 而除了活性菌體，亦有死亡之惰性菌體及溶解性微生物產物：\n\t- $X_i$：出流水惰性菌體濃度：\n\t\t- $X_i=X_i^0+X_a\\left ( 1-f_d \\right )b\\theta_x$\n\t\t\t- $X_v$：揮發性懸浮固體物濃度：\n\t\t\t\t- $X_v=X_a+X_i$\n  - $r_{ut}$：基質利用率：\n\t- $r_{ut}=\\frac{-(S^0-S)}{\\theta}$\n\t- $\\rm SMP$ (Soluble microbial products)：微生物產生的溶解性物質濃度，由細胞裂解釋放，在合成時損失或因其他目的分離出來。包含基質代謝產生之 $\\rm UAP$ (Utilization-associated products) 及細胞合成衰敗產生之 $\\rm BAP$ (Biomass-associated products)。\n\t\t- $\\rm SMP=UAP+BAP$\n\t\t- ${\\rm UAP}=\\frac{-\\left (\\hat{q}_{UAP}X_a\\theta+K_{UAP}+k_1r_{ut}\\theta\\right )+\\sqrt{\\left (\\hat{q}_{UAP}X_a\\theta+K_{UAP}+k_1r_{ut}\\theta\\right )^2-4k_{UAP}k_1r_{ut}\\theta}}{2}$\n\t\t- ${\\rm BAP}=\\frac{-\\left (K_{BAP}+(\\hat{q}_{BAP}-k_2)X_a\\theta\\right )+\\sqrt{\\left (K_{BAP}+(\\hat{q}_{BAP}-k_2)X_a\\theta\\right )^2+4k_{BAP}k_2X_{a}\\theta}}{2}$\n- 以及營養源之供應(下述之$n$依目標營養源作代換)：\n\t- $r_n$：營養源 $n$ 之消耗速率：\n\t\t- $r_n=\\gamma_nYr_{ut}\\frac{1+(1-f_d)b\\theta_x}{1+b\\theta_x}$\n\t\t\t- 其中：$\\gamma_n$ 為營養源與 Biomass VSS 之比值（$\\frac{M_n}{M_x}$），如：$\\ce{C5H7O2N}$ 之 $\\gamma_N$ 為 $\\frac{14g_N}{113g_{VSS}}=0.124\\frac{g_N}{g_{VSS}}$；另外，**磷需量通常為氮的 20%**，故 $\\gamma_P=.124*.2=.025\\frac{g_P}{g_{VSS}}$。\n\t- $C_n$：出流水營養源之濃度（為負值時表需要添加營養源）：\n\t\t- $C_n=C_n^0+r_n\\theta$\n\t- $\\frac{\\Delta S_a}{\\Delta t}$：電子接受者之氧氣消耗當量：\n\t\t- $\\frac{\\Delta S_a}{\\Delta t}=\\gamma_aQ\\left (S^0-S-SMP+1.42(X_v^0-X_v)\\right)$\n\t\t\t- 其中：$\\gamma_a$為電子接受者質量與氧氣需求之比值，常用參數為==$1\\ g_{O_2}\\mskip{-3mu}/\\mskip{-3mu}g_{COD}$==、$0.35\\ g_{NO_3^--N}\\mskip{-3mu}/\\mskip{-3mu}g_{COD}$\n\t- $R_{O_2}$：電子接受者之氧氣使用率：\n\t\t- $R_{O_2}=\\frac{\\Delta S_a}{\\Delta t}-Q(S_a^0-S_a)$\n\n---\n#### 3.2.1 **污泥齡**（Sludge age）、**固體物停留時間**（Solid retention time, SRT）、**平均細胞停留時間**（Mean cell residence time, MCRT）\n- **<font color=red>定義</font>**：在反應系統中，微生物從其生成到排出系統的平均停留時間。\n- 一般情形下，水力停留時間與污泥齡相等，即 $HRT(\\theta)=SRT(\\theta_x)$，此時：\n\t- $\\theta_x=\\mu^{-1}=\\frac{系統內活體細胞}{活體細胞生成率}=\\frac{VX_a}{QX_a}=\\theta$\n- 當進流有額外活性生物體添加時，水力停留時間與污泥齡不相等，即 $HRT(\\theta)\\neq SRT(\\theta_x)$，此時：\n\t- $\\theta_x=\\mu^{-1}=\\frac{系統內活體細胞}{活體細胞生成率}=\\frac{VX_a}{QX_a-QX_a^0}$\n\t- 且 $X_a$ 由 $X_a=Y\\left (\\frac{S^0-S}{1+b\\theta x}\\right )$ 修正為：$X_a=\\frac{\\theta_x}{\\theta}Y\\left (\\frac{S^0-S}{1+b\\theta x}\\right )$\n\t- 故水力停留時間 $\\theta$ 與污泥齡 $\\theta_x$ 之關係(比值)為：$\\frac{\\theta_x}{\\theta}=\\frac{1}{1-\\frac{X_a^0}{X_a}}$\n\n#### 3.2.2 抑制（Inhibition）\n\n- 產生抑制作用的機制：\n\t- 透過競爭或非競爭抑制來**阻止或減慢電子提供者氧化**。\n\t- **阻止或減少從電子轉移獲得的能量**。\n\t- 透過競爭抑制來**阻止或減慢電子接受者還原**。\n\n---\n---\n# 5.　微生物反應器\n\n## 5.1 反應器種類\n\n- 種類：\n  - **Batch reactors**批次反應器\n  - **Sequencing Batch Reactor** (SBR) 序列批次反應器\n\t  - ![](Img/Notes/Biological_Process/acbebd3f8457392598a67963b7c4f4a7.png)\n  - **Continuous-flow stirred-tank reactor** (CSTR)連續攪拌槽反應器\n  - **Plug-flow reactor** (PFR) 柱塞流反應器\n  \t- 用途：城市及工業廢水之硝化。\n  - **Biofilm Reactors** 生物膜反應器\n    - Packed-bed reactors 填充床反應器\n      - 用途：城市及工業廢水之好氧及厭氧處理、有機物去除、硝化、脫硝。\n    - Fluidized bed reactor 流體化床反應器\n      - 用途：低 BOD 廢水、毒性有機物、好氧處理、脫硝。\n    - Rotating biological contactor (RBC) 旋轉生物圓盤\n      - 用途：城市及工業廢水之好氧處理、有機物去除、硝化。\n- CSTR 與 PFR 之比較\n  - PFR 反應器入口處基質濃度最高，基質利用率高。\n    - 基質轉化率 PFR 通常優於 CSTR。\n    - PFR 入口氧氣需量高，曝氣應集中供給於反應器入口。\n    - PFR 容易產生過量有機酸。\n  - CSTR 中，反應器中基質濃度與出流水基質濃度相同，故進流基質立即分散到低基質濃度環境中。\n    - 若沒生物質進入 PFR，則不會生成微生物，造成 Washout。\n    - CSTR 進流與含有生物質之反應器混和，使 CSTR 進流不一定需要生物質進流。\n  - CSTR 在應對毒性及衝擊負荷較 PFR 穩定。\n    - 若毒物進入 PFR，毒物脈衝隨PFR移動時，濃度仍然高，會破壞系統中之微生物。\n    - 若毒物進入 CSTR，毒物脈衝將迅速分散降低濃度，微生物可能僅受輕微影響。\n  - CSTR 及 PFR 為**大型**生物反應器中難以實現之**理想**模型。\n    - PFR 在實際情形下，**曝氣**導致縱向混合及 Distribution of residence times，故帶有曝氣得 PFR 可以透過**軸向擴散模型**或 **CSTR 串聯模型**達到更佳的模擬。\n    - CSTR 在實際情形下，反應器支流體混合不完全可能導致流體停滯或短流。\n- 配置：\n  - 迴流（Recycle）：一般好氧與厭氧處理。\n  - 串聯（Series）：用於連接不同處理方法。\n  - 並聯（Parallel）：\n    - 提供冗餘以避免某些反應器停止工作或因應處理流量遠超過實際裝置容量。\n    - PFR 之並聯可以維持更佳的混合。\n  - 混和配置（Hybird）：用於組合式的處理。\n  - 序列批次（Sequencing Batch）：用於高校去除單一成分。\n\n---\n## 5.2 質量平衡\n- 系統邊界：控制體積。\n- 相關組成：COD、TOC、biomass、oxygen ($\\rm O_2$)、nitrate ($\\ce{NO3-}$)、ammonium ($\\ce{NH4+}$)。\n\n---\n## 5.3 批次反應\n- 質量平衡：\n  - 微生物濃度平衡：$X_a=X_a^0+Y\\Delta S$\n  - $$t=\\frac{1}{\\hat{q}}\\left[\\left(\\frac{K}{X_a^0+YS^0}+\\frac{1}{Y}\\right)\\ln(X_a^0+YS^0-YS)-\\left(\\frac{K}{X_a^0+YS^0}\\right)\\ln\\frac{SX_a^0}{S^0}-\\frac{1}{Y}\\ln X_a^0\\right ]$$\n\n- ![](Img/Notes/Biological_Process/be5de8b5fc3f0de25309b0f4e0e9f167.png)\n  - 當參數除 $S$ 及 $X_a^0$ 外其他皆知時，由圖左至右之解釋：當基質濃度 (S) 固定時：\n\n    1. 微生物濃度 ($X_a^0$) 與基質濃度相當時，基質逐漸下降，**微生物量逐漸上升**。\n    2. 微生物濃度 ($X_a^0$) 較少，基質濃度多時，由於微生物量過少，開始時微生物生長量將會**遲滯**，基質量下降較慢，隨著微生物增長量上升基質濃度亦下降，而基質濃度較低時微生物增長量將趨緩。\n    3. 微生物濃度 ($X_a^0$) 更少，將遲滯**更多時間**，才會達平衡。\n\n    - 由圖可知，在相同的初始基質濃度時，儘管基質處理量與微生物生長量三者皆相同，但處理時間方面明顯為為生物濃度高者最快，與初始無微生物者之所需處理時間相差約 5 倍以上，**顯示污泥回流之重要性**。\n\n---\n## 5.4連續流反應器（CSTR）\n- 質量平衡：\n  - ![](Img/Notes/Biological_Process/df50eb502fc83eacbff8d205d47ee642.png)\n  - 進流與迴流之**基質**濃度平衡： $QS^0+Q^rS=Q^iS^i$\n  - 進流與迴流之**微生物**濃度平衡： $QX_a^0+Q^rX_a^r=Q^iX^i_a$\n  - 反應槽**基質**濃度平衡： $S^i=\\frac{QS^0+Q^rS}{Q^i}$\n  - 反應槽**微生物**濃度平衡： $X_a^i=\\frac{QX_a^0+Q^rX^r_a}{Q_i}$\n  - 系統基質濃度平衡： $0=Q^iS^i-Q^iS+r_{ut}V$\n  - 系統基質濃度平衡： $0=Q(S^0-S)+r_{ut}V$\n\n---\n## 5.5 柱塞流反應器（PFR）\n- 質量平衡：\n  - ![](Img/Notes/Biological_Process/a348aa4e28f9d5b6fbc34c0880f6804b.png)\n  - 基質濃度平衡： $\\Delta V\\frac{\\Delta S}{\\Delta t}=QS-Q(S+\\Delta S)+r_{ut}\\Delta V$\n  - 活性微生物平衡： $\\Delta V\\frac{\\Delta X_a}{\\Delta t}=QX_a-Q(X_a+\\Delta X_a)+r_{net}\\Delta V$\n  - Steady state：$\\theta=\\frac{1}{\\hat{q}}\\left(\\left(\\frac{K}{X_a^0+YS^0}+\\frac{1}{Y}\\right)\\ln(X_a^0+YS^0-YS)-\\left(\\frac{K}{X_a^0+YS^0}\\right)\\ln \\frac{S^0X_a^0}{S^0}-\\frac{1}{Y}\\ln X_a^0\\right)$\n\n---\n## 5.6 具迴流之柱塞流反應器\n![](Img/Notes/Biological_Process/42ad8041bff501b34e791b5b54608a76.png)\n- 質量平衡\n  - 反應槽**基質**濃度平衡： $S^i=\\frac{QS^0+Q^rS}{Q^i}$\n  - 反應槽**微生物**濃度平衡： $X_a^i=\\frac{QX_a^0+Q^rX^r_a}{Q_i}$\n  - $X_a=X_a^0+Y(S^0-S)$\n  - $X_a^e=X_a^0+Y(S^0-S^e)$\n  - $\\frac{V}{Q^i}=\\frac{1}{\\hat{q}}\\left[\\left(\\frac{K}{X_a^i+YS^i}\\right)\\ln(X_a^i+YS^i-YS^e)-\\left(\\frac{K}{X_a^i+YS^i}\\right)\\ln\\frac{S^eX_a^i}{S^i}-\\frac{1}{Y}\\ln X_a^i\\right]$\n- ![](Img/Notes/Biological_Process/336cb6329a066935f4b059d9ffd64b6c.png)\n  - 該圖為 PFR 系統之橫軸為停留時間，縱軸為出流基質濃度，由上圖可以觀察到相同停留時間下，迴流比越高出流基質濃度越低，表處理效率越高；相同基質濃度下，迴流比越大，所需之停留時間越小，當迴流比越接近無窮大時，PFR 系統將越趨近 CSTR 系統之狀態。而下方圖為上方圖之對數作圖，用以觀察較低出流基質濃度之分布情形，由下圖可以觀察到當基質濃度極小時，停留時間較為隨機，並未按照上述規則進行。\n- CSTR 與帶迴流之 PFR 之比較：\n  - 若需要 80%~90% 之去除率，CSTR 可靠性較高。\n  - 若需要較高之去除率（99.9%），需要迴流比低之 PFR。\n  - 迴流比適當時，可提供較低之停留時間及高去除率。\n  - CSTR 之迴流不會影響性能，PFR 之迴流會影響系統性能。\n\n---\n## 5.7自沉澱池迴流之反應器\n- 自沉澱池迴流污泥：\n  - 優點：反應器體積可以更小。\n  - 缺點：沉澱池及迴流系統成本較高。\n  ")])),_:1},8,["plugins"])])),_:1})}var _=a(51994),r=a.n(_),o=a(64879),i=a.n(o),c=a(11026),m=a.n(c);const f=(0,$.aZ)({setup(){const t=[r(),i(),m(),m()];return{plugins:t}}});var l=a(11639),s=a(69885),S=a(69984),u=a.n(S);const d=(0,l.Z)(f,[["render",e]]),h=d;u()(f,"components",{QPage:s.Z})}}]);