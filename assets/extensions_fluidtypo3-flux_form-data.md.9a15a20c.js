import{_ as t,c as e,o as s,a}from"./app.18d791a0.js";const u=JSON.parse('{"title":"<flux:form.data /> | flux | fluidtypo3","description":"","frontmatter":{"title":"<flux:form.data /> | flux | fluidtypo3"},"headers":[{"level":3,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}],"relativePath":"extensions/fluidtypo3-flux/form-data.md","lastUpdated":1675356565000}'),l={name:"extensions/fluidtypo3-flux/form-data.md"},n=a(`<h1 id="flux-form-data" tabindex="-1">&lt;flux:form.data /&gt; <a class="header-anchor" href="#flux-form-data" aria-hidden="true">#</a></h1><p>Converts raw flexform xml into an associative array, and applies any transformation that may be configured for fields/objects.</p><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Required</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">table</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">Yes</td><td style="text-align:left;">Name of table that contains record with Flux field</td></tr><tr><td style="text-align:left;">field</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">Yes</td><td style="text-align:left;">Name of Flux field in table</td></tr><tr><td style="text-align:left;">uid</td><td style="text-align:center;">integer</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">No</td><td style="text-align:left;">UID of record to load (used if &quot;record&quot; attribute not used)</td></tr><tr><td style="text-align:left;">record</td><td style="text-align:center;">array</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">No</td><td style="text-align:left;">Record containing Flux field (used if &quot;uid&quot; attribute not used)</td></tr><tr><td style="text-align:left;">as</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">No</td><td style="text-align:left;">Optional name of variable to assign in tag content rendering</td></tr></tbody></table><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><p>Since the page variable is available in fluidcontent elements, we can use it to access page configuration data.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">flux</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">form.data</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">table</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">field</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tx_fed_page_flexform</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">record</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{page}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Data of disabled and deleted pages cannot be loaded with flux:form.data and lead to an TYPO3FluidFluidCoreViewHelperException. To prevent this exception, check if the page is accessible by generating a link to it.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">condition</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{f:uri.page(pageUid: myUid)}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">flux</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">form.data</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">table</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">field</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tx_fed_page_flexform</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">uid</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{myUid}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">as</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pageSettings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">&lt;!-- your code --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">flux</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">form.data</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9),o=[n];function p(r,c,i,d,y,D){return s(),e("div",null,o)}const f=t(l,[["render",p]]);export{u as __pageData,f as default};
