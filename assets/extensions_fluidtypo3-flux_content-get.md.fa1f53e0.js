import{_ as t,c as s,o as e,a as n}from"./app.18d791a0.js";const g=JSON.parse('{"title":"<flux:content.get /> | flux | fluidtypo3","description":"","frontmatter":{"title":"<flux:content.get /> | flux | fluidtypo3"},"headers":[{"level":3,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}],"relativePath":"extensions/fluidtypo3-flux/content-get.md","lastUpdated":1675356565000}'),l={name:"extensions/fluidtypo3-flux/content-get.md"},a=n(`<h1 id="flux-content-get" tabindex="-1">&lt;flux:content.get /&gt; <a class="header-anchor" href="#flux-content-get" aria-hidden="true">#</a></h1><p>Gets all child content of a record based on area.</p><p>The elements are already rendered, they just need to be output.</p><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Required</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">area</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">Yes</td><td style="text-align:left;">Name or &quot;colPos&quot; value of the content area to render</td></tr><tr><td style="text-align:left;">limit</td><td style="text-align:center;">integer</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">No</td><td style="text-align:left;">Optional limit to the number of content elements to render</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:center;">integer</td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">No</td><td style="text-align:left;">Optional offset to the limit</td></tr><tr><td style="text-align:left;">order</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>&#39;sorting&#39;</code></td><td style="text-align:center;">No</td><td style="text-align:left;">Optional sort order of content elements - RAND() supported</td></tr><tr><td style="text-align:left;">sortDirection</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>&#39;ASC&#39;</code></td><td style="text-align:center;">No</td><td style="text-align:left;">Optional sort direction of content elements</td></tr><tr><td style="text-align:left;">as</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">No</td><td style="text-align:left;">Variable name to register, then render child content and insert all results as an array of records</td></tr><tr><td style="text-align:left;">loadRegister</td><td style="text-align:center;">array</td><td style="text-align:center;"><code>[]</code></td><td style="text-align:center;">No</td><td style="text-align:left;">List of LOAD_REGISTER variable</td></tr><tr><td style="text-align:left;">render</td><td style="text-align:center;">boolean</td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">No</td><td style="text-align:left;">Optional returning variable as original table rows</td></tr><tr><td style="text-align:left;">hideUntranslated</td><td style="text-align:center;">boolean</td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">No</td><td style="text-align:left;">Exclude untranslated records</td></tr></tbody></table><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">flux</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">content.get</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">area</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">teaser</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Configuration</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">flux</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">grid</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">flux</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">grid.row</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">flux</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">grid.column</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">teaser</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">colPos</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">flux</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">grid.row</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">flux</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">grid</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">for</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">each</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{flux:content.get(area: &#39;teaser&#39;)}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">as</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">element</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">border: 1px solid red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">format.raw</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{element}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">format.raw</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">for</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,8),o=[a];function p(r,c,i,d,y,F){return e(),s("div",null,o)}const u=t(l,[["render",p]]);export{g as __pageData,u as default};