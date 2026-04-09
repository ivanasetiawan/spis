<script>
  import { sections, meta } from "$lib/data.js";
  import { onMount } from "svelte";
  import {
    ChevronDown,
    ChevronRight,
    User,
    Trophy,
    Target,
    Map,
    Lock,
    Lightbulb,
    Zap,
    Factory,
    BarChart3,
    Search,
    Pencil,
    ShoppingCart,
    Scale,
    Baby,
    HeartPulse,
    RefreshCw,
    Star,
    Menu,
    X,
    ArrowRight,
    Mail,
  } from "lucide-svelte";

  let activeId = $state("hero");
  let navOpen = $state(false);
  let scrollY = $state(0);
  let innerH = $state(800);
  let docHeight = $state(4000);
  let revealedMap = $state({});

  // Map icon names to Lucide components
  const iconMap = {
    user: User,
    trophy: Trophy,
    target: Target,
    map: Map,
    lock: Lock,
    lightbulb: Lightbulb,
    zap: Zap,
    factory: Factory,
    barchart: BarChart3,
    search: Search,
    pencil: Pencil,
    cart: ShoppingCart,
    scale: Scale,
    baby: Baby,
    heartpulse: HeartPulse,
    refresh: RefreshCw,
    star: Star,
  };

  onMount(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            revealedMap = { ...revealedMap, [e.target.id]: true };
            activeId = e.target.id;
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    }

    const barObs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("bar-animate");
        }
      },
      { threshold: 0.3 },
    );
    document
      .querySelectorAll(".phase-bar-inner")
      .forEach((el) => barObs.observe(el));

    const updateHeight = () => {
      docHeight = document.body.scrollHeight;
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      obs.disconnect();
      barObs.disconnect();
    };
  });

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    navOpen = false;
  }
</script>

<svelte:head>
  <title>{meta.title}</title>
</svelte:head>

<svelte:window bind:scrollY bind:innerHeight={innerH} />

<!-- ═══ FIXED NAV ═══ -->
<nav
  class="fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-400 {scrollY >
  60
    ? 'bg-brand-bg/82 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.05)]'
    : ''}"
>
  <div class="max-w-[1280px] mx-auto h-16 flex items-center justify-center">
    <!-- <button
      class="flex items-center gap-2.5 bg-transparent border-none text-brand-text cursor-pointer"
      onclick={() => scrollTo("hero")}
    >
       <span class="text-brand-blue text-sm">◆</span>
      <span class="font-bold text-[0.85rem] tracking-[0.12em] uppercase"
        >{meta.subtitle}</span
      >
    </button> -->

    <!-- Desktop links -->
    <div class="hidden lg:flex gap-1">
      {#each sections as s}
        <button
          class="bg-transparent border-none font-medium text-base px-3.5 py-1.5 rounded-lg cursor-pointer tracking-wide transition-all duration-250 {activeId ===
          s.id
            ? 'text-brand-blue bg-brand-blue/10'
            : 'text-brand-dim hover:text-white hover:bg-white/[0.06]'}"
          onclick={() => scrollTo(s.id)}
        >
          {s.nav}
        </button>
      {/each}
    </div>

    <!-- Mobile hamburger -->
    <button
      class="lg:hidden flex items-center justify-center w-10 h-10 bg-transparent border-none text-brand-text cursor-pointer z-[1100]"
      onclick={() => (navOpen = !navOpen)}
      aria-label="Menu"
    >
      {#if navOpen}
        <X size={22} />
      {:else}
        <Menu size={22} />
      {/if}
    </button>
  </div>
</nav>

<!-- Mobile drawer -->
{#if navOpen}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div
    class="fixed inset-0 bg-black/60 z-[999]"
    onclick={() => (navOpen = false)}
  ></div>
  <div
    class="fixed top-0 right-0 bottom-0 w-72 bg-[rgba(12,17,30,0.97)] backdrop-blur-[30px] z-[1050] pt-20 px-6 pb-10 flex flex-col gap-1.5 animate-slide-in"
  >
    {#each sections as s, i}
      <button
        class="flex items-center gap-3 bg-transparent border-none text-lg px-4 py-3 rounded-xl cursor-pointer text-left transition-all duration-250 {activeId ===
        s.id
          ? 'text-brand-blue bg-brand-blue/10'
          : 'text-brand-dim hover:bg-white/[0.06] hover:text-white'}"
        onclick={() => scrollTo(s.id)}
        style="animation-delay: {i * 50}ms"
      >
        <span class="text-sm font-bold opacity-30 tabular-nums"
          >{String(i).padStart(2, "0")}</span
        >
        {s.nav}
      </button>
    {/each}
  </div>
{/if}

<!-- Scroll progress -->
<div class="fixed top-0 right-0 w-[3px] h-screen z-[999] bg-white/[0.04]">
  <div
    class="w-full bg-gradient-to-b from-brand-blue to-brand-purple rounded-b transition-[height] duration-150"
    style="height: {Math.min(
      100,
      (scrollY / (docHeight - innerH || 1)) * 100,
    )}%"
  ></div>
</div>

<!-- ═══ MAIN CONTENT ═══ -->
<main>
  <!-- HERO -->
  <article
    id="hero"
    class="relative min-h-screen flex items-center justify-center text-center px-6 py-24 overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <img
        src={sections[0].image}
        alt=""
        class="w-full h-full object-cover opacity-40"
      />

      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(0,122,204,0.15),transparent_60%),radial-gradient(ellipse_at_70%_60%,rgba(71,10,104,0.12),transparent_60%),linear-gradient(180deg,rgba(7,11,20,0.3)_0%,rgba(7,11,20,0.95)_100%)]"
      ></div>
    </div>
    <div
      class="absolute inset-0 z-[1] bg-[linear-gradient(rgba(0,122,204,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,122,204,0.04)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"
    ></div>

    <div
      class="relative max-w-[900px] mx-auto transition-all duration-1000 {revealedMap[
        'hero'
      ]
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'}"
    >
      <span
        class="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full mb-5"
        >{sections[0].kicker}</span
      >
      <h1
        class="text-[clamp(2.6rem,6vw,4.5rem)] font-black leading-[1.08] tracking-tight bg-gradient-to-br from-white via-sky-200 to-brand-blue bg-clip-text text-transparent mt-5 mb-4"
      >
        {sections[0].title}
      </h1>
      <p class="text-2xl font-light text-brand-dim tracking-wide">
        {sections[0].subtitle}
      </p>

      <div class="flex justify-center items-center gap-4 mt-10 mb-6">
        <div class="text-2xl font-light text-brand-dim tracking-wide">For:</div>
        <img src={meta.logo} alt="Client: Abbott" class="w-48 object-contain" />
      </div>
      <button
        class="text-lg inline-flex items-center gap-2 mt-9 px-8 py-3.5 bg-gradient-to-br from-brand-blue to-brand-navy border border-brand-blue/30 rounded-xl text-white font-semibold cursor-pointer transition-all duration-300 tracking-wide hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,122,204,0.3)]"
        onclick={() => scrollTo("executive-summary")}
      >
        Explore the Strategy
        <ChevronDown size={18} />
      </button>
    </div>

    <!-- Scroll hint -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-bounce"
    >
      <div
        class="w-6 h-[38px] border-2 border-white/25 rounded-xl flex justify-center pt-2"
      >
        <div
          class="w-[3px] h-2 bg-brand-blue rounded-sm animate-scroll-wheel"
        ></div>
      </div>
    </div>
  </article>

  <!-- EXECUTIVE SUMMARY -->
  <article
    id="executive-summary"
    class="relative min-h-screen flex items-center px-6 py-24 bg-brand-bg"
  >
    <div class="max-w-[1120px] mx-auto w-full">
      <div
        class="mb-12 transition-all duration-700 ease-out {revealedMap[
          'executive-summary'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        <span
          class="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full mb-5"
          >{sections[1].kicker}</span
        >
        <h2
          class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-tight bg-gradient-to-br from-white to-[#a8b8d8] bg-clip-text text-transparent"
        >
          {sections[1].title}
        </h2>
        <p class="mt-2.5 text-lg font-light text-brand-dim tracking-wide">
          {sections[1].subtitle}
        </p>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start transition-all duration-800 ease-out delay-200 {revealedMap[
          'executive-summary'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        <div class="relative rounded-2xl overflow-hidden">
          <img
            src={sections[1].image}
            alt="Data analytics"
            class="w-full h-[360px] object-cover rounded-2xl"
          />
          <div
            class="absolute inset-0 rounded-2xl border border-brand-blue/20 pointer-events-none"
          ></div>
        </div>
        <div class="flex flex-col gap-5">
          {#each sections[1].items as item, i}
            <div
              class="flex gap-4 p-5 bg-brand-card border border-brand-card-border rounded-2xl transition-all duration-300 hover:bg-brand-blue/[0.06] hover:border-brand-blue/20 hover:translate-x-1 group"
              style="animation-delay: {i * 120}ms"
            >
              <div
                class="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-navy/15 text-brand-blue text-base font-extrabold"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h4 class="text-2xl font-bold text-white mb-1">{item.label}</h4>
                <p class="text-lg leading-relaxed text-brand-dim">
                  {item.text}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </article>

  <!-- ── LEADERSHIP ── -->
  <article
    id="leadership"
    class="relative min-h-screen flex items-center px-6 py-24 bg-gradient-to-b from-brand-bg via-brand-blue/[0.03] to-brand-bg"
  >
    <div class="max-w-[1120px] mx-auto w-full">
      <div
        class="mb-12 transition-all duration-700 ease-out {revealedMap[
          'leadership'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        <span
          class="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full mb-5"
          >{sections[2].kicker}</span
        >
        <h2
          class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-tight bg-gradient-to-br from-white to-[#a8b8d8] bg-clip-text text-transparent"
        >
          {sections[2].title}
        </h2>
        <p class="mt-2.5 text-lg font-light text-brand-dim tracking-wide">
          {sections[2].subtitle}
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-800 ease-out delay-200 {revealedMap[
          'leadership'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        {#each sections[2].cards as card, i}
          {@const icons = [User, Trophy, Target]}
          <div
            class="p-8 bg-brand-card border border-brand-card-border rounded-2xl transition-all duration-350 hover:-translate-y-1.5 hover:bg-brand-blue/[0.06] hover:border-brand-blue/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
            style="animation-delay: {i * 140}ms"
          >
            <div
              class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-navy/15 text-brand-blue mb-4"
            >
              <svelte:component this={icons[i]} size={24} />
            </div>
            <h4 class="text-2xl font-bold text-white mb-2.5">{card.label}</h4>
            <p class="text-lg leading-[1.65] text-brand-dim">
              {card.text}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </article>

  <!-- ── CHALLENGE ── -->
  <article
    id="challenge"
    class="relative min-h-screen flex items-center px-6 py-24 overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <img
        src={sections[3].image}
        alt=""
        class="w-full h-full object-cover opacity-12 saturate-[0.4]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(71,10,104,0.2),transparent_70%),linear-gradient(180deg,var(--color-brand-bg)_0%,rgba(7,11,20,0.85)_40%,var(--color-brand-bg)_100%)]"
      ></div>
    </div>
    <div class="max-w-[1120px] mx-auto w-full relative z-[1]">
      <div
        class="mb-12 transition-all duration-700 ease-out {revealedMap[
          'challenge'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        <span
          class="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-ice bg-brand-ice/10 border border-brand-ice/20 px-3.5 py-1.5 rounded-full mb-5"
          >{sections[3].kicker}</span
        >
        <h2
          class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-tight bg-gradient-to-br from-white to-brand-ice bg-clip-text text-transparent"
        >
          {sections[3].title}
        </h2>
        <p class="mt-2.5 text-lg font-light text-brand-dim tracking-wide">
          {sections[3].subtitle}
        </p>
      </div>

      <div
        class="flex flex-col gap-5 max-w-[700px] transition-all duration-800 ease-out delay-250 {revealedMap[
          'challenge'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        {#each sections[3].points as pt, i}
          {@const icons = [Map, Lock, Lightbulb]}
          <div
            class="flex gap-5 p-6 bg-white/[0.04] border border-white/[0.06] rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-brand-purple/10 hover:border-brand-purple/30 hover:translate-x-1.5"
            style="animation-delay: {i * 150}ms"
          >
            <div
              class="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-brand-purple/15 text-brand-purple mt-0.5"
            >
              <svelte:component this={icons[i]} size={22} />
            </div>
            <div>
              <h4 class="text-2xl font-bold text-white mb-1">
                {pt.label}
              </h4>
              <p class="text-lg leading-relaxed text-brand-dim">
                {pt.text}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </article>

  <!-- ── GOVERNANCE / PILLARS ── -->
  <article
    id="governance"
    class="relative min-h-screen flex items-center px-6 py-24 bg-brand-bg"
  >
    <div class="max-w-[1120px] mx-auto w-full">
      <div
        class="mb-12 transition-all duration-700 ease-out {revealedMap[
          'governance'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        <span
          class="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full mb-5"
          >{sections[4].kicker}</span
        >
        <h2
          class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-tight bg-gradient-to-br from-white to-[#a8b8d8] bg-clip-text text-transparent"
        >
          {sections[4].title}
        </h2>
        <p class="mt-2.5 text-lg font-light text-brand-dim tracking-wide">
          {sections[4].subtitle}
        </p>
        <p class="mt-3.5 text-lg leading-relaxed text-brand-dim max-w-[680px]">
          {sections[4].intro}
        </p>
      </div>

      <div
        class="flex flex-col lg:flex-row items-stretch justify-center gap-0 transition-all duration-800 ease-out delay-300 {revealedMap[
          'governance'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        {#each sections[4].pillars as p, i}
          {@const icons = [Zap, Factory, BarChart3]}
          <div
            class="flex-1 max-w-[300px] lg:max-w-1/3 max-w-full p-8 bg-brand-card border border-brand-card-border rounded-2xl text-center transition-all duration-350 hover:-translate-y-1.5 hover:bg-brand-blue/[0.06] hover:border-brand-blue/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
          >
            <div
              class="w-9 h-9 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-navy text-white text-sm font-extrabold"
            >
              {p.number}
            </div>
            <div
              class="w-10 h-10 mx-auto mb-3 flex items-center justify-center text-brand-blue"
            >
              <svelte:component this={icons[i]} size={28} />
            </div>
            <h4 class="text-2xl font-bold text-white mb-2.5">
              {p.label}
            </h4>
            <p class="text-lg leading-relaxed text-brand-dim">
              {p.text}
            </p>
          </div>
          {#if i < sections[4].pillars.length - 1}
            <div
              class="flex items-center justify-center w-10 lg:w-10 h-8 lg:h-auto shrink-0 text-brand-blue/30 rotate-90 lg:rotate-0 mx-auto lg:mx-0 my-1 lg:my-0"
            >
              <ArrowRight size={24} />
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </article>

  <!-- ── ORG CHART ── -->
  <article
    id="org-chart"
    class="relative min-h-screen flex items-center px-6 py-24 bg-gradient-to-b from-brand-bg via-brand-blue/[0.03] to-brand-bg"
  >
    <div class="max-w-[1120px] mx-auto w-full">
      <div
        class="mb-12 transition-all duration-700 ease-out {revealedMap[
          'org-chart'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        <span
          class="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full mb-5"
          >{sections[5].kicker}</span
        >
        <h2
          class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-tight bg-gradient-to-br from-white to-[#a8b8d8] bg-clip-text text-transparent"
        >
          {sections[5].title}
        </h2>
        <p class="mt-2.5 text-lg font-light text-brand-dim tracking-wide">
          {sections[5].subtitle}
        </p>
      </div>

      <div
        class="flex flex-col items-center transition-all duration-800 ease-out delay-200 {revealedMap[
          'org-chart'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        <!-- Lead -->
        <div
          class="relative text-center px-10 py-7 bg-gradient-to-br from-brand-blue/12 to-brand-navy/12 border border-brand-blue/25 rounded-2xl"
        >
          <div
            class="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-navy text-white"
          >
            <Star size={14} />
          </div>
          <h4 class="text-2xl font-extrabold text-white">
            {sections[5].lead.label}
          </h4>
          <p class="text-lg text-brand-dim mt-0.5">
            {sections[5].lead.desc}
          </p>
        </div>

        <!-- Connector -->
        <div
          class="w-0.5 h-10 bg-gradient-to-b from-brand-blue to-brand-blue/20"
        ></div>

        <p
          class="text-lg font-bold tracking-[0.1em] uppercase text-brand-blue mb-5 text-center"
        >
          The Regional Agency Hub — "The Engine"
        </p>

        <!-- Units -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full"
        >
          {#each sections[5].units as u, i}
            {@const icons = [Search, Pencil, ShoppingCart, Scale]}
            <div
              class="p-6 bg-brand-card border border-brand-card-border rounded-2xl text-center transition-all duration-350 hover:-translate-y-1 hover:bg-brand-blue/[0.06] hover:border-brand-blue/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            >
              <div
                class="w-10 h-10 mx-auto mb-2.5 flex items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue"
              >
                <svelte:component this={icons[i]} size={24} />
              </div>
              <h4 class="text-2xl font-bold text-white mb-2 leading-snug">
                {u.label}
              </h4>
              <p class="text-lg leading-relaxed text-brand-dim">
                {u.text}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </article>

  <!-- ── LIFECYCLE ── -->
  <article
    id="lifecycle"
    class="relative min-h-screen flex items-center px-6 py-24 bg-brand-bg"
  >
    <div class="max-w-[1120px] mx-auto w-full">
      <div
        class="mb-12 transition-all duration-700 ease-out {revealedMap[
          'lifecycle'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        <span
          class="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full mb-5"
          >{sections[6].kicker}</span
        >
        <h2
          class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-tight bg-gradient-to-br from-white to-[#a8b8d8] bg-clip-text text-transparent"
        >
          {sections[6].title}
        </h2>
        <p class="mt-2.5 text-lg font-light text-brand-dim tracking-wide">
          {sections[6].subtitle}
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12 transition-all duration-800 ease-out delay-200 {revealedMap[
          'lifecycle'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        {#each sections[6].segments as seg, i}
          {@const icons = [Baby, HeartPulse]}
          <div
            class="p-9 bg-brand-card border border-brand-card-border rounded-2xl border-t-[3px] transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            style="border-top-color: {seg.color}"
          >
            <div
              class="w-12 h-12 flex items-center justify-center rounded-xl mb-3.5"
              style="background: {seg.color}15; color: {seg.color}"
            >
              <svelte:component this={icons[i]} size={26} />
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-1">{seg.label}</h3>
            <span
              class="inline-block text-lg font-semibold tracking-wide px-2.5 py-0.5 rounded-md mb-3.5"
              style="color: {seg.color}; background: {seg.color}15"
              >{seg.brands}</span
            >
            <p class="text-lg leading-[1.65] text-brand-dim">
              {seg.text}
            </p>
          </div>
        {/each}
      </div>

      <!-- Flywheel -->
      <div
        class="flex flex-col md:flex-row items-center gap-7 max-w-[700px] mx-auto p-7 bg-brand-blue/[0.04] border border-brand-blue/12 rounded-2xl transition-all duration-700 delay-500 {revealedMap[
          'lifecycle'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5'}"
      >
        <div
          class="shrink-0 w-[90px] h-[90px] relative flex items-center justify-center"
        >
          <svg
            viewBox="0 0 120 120"
            class="absolute inset-0 w-full h-full animate-spin-slow"
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="url(#flyGrad)"
              stroke-width="3"
              stroke-dasharray="8 6"
            />
            <defs
              ><linearGradient id="flyGrad" x1="0" y1="0" x2="1" y2="1"
                ><stop offset="0%" stop-color="#007acc" /><stop
                  offset="100%"
                  stop-color="#470a68"
                /></linearGradient
              ></defs
            >
          </svg>
          <RefreshCw size={24} class="text-brand-blue" />
        </div>
        <p
          class="text-lg leading-relaxed text-brand-dim text-center md:text-left"
        >
          <strong class="text-white">The Flywheel:</strong>
          {sections[6].flywheel}
        </p>
      </div>
    </div>
  </article>

  <!-- ── ROADMAP ── -->
  <article
    id="roadmap"
    class="relative min-h-screen flex items-center px-6 py-24 bg-gradient-to-b from-brand-bg via-brand-purple/[0.04] to-brand-bg"
  >
    <div class="max-w-[1120px] mx-auto w-full">
      <div
        class="mb-12 transition-all duration-700 ease-out {revealedMap[
          'roadmap'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        <span
          class="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full mb-5"
          >{sections[7].kicker}</span
        >
        <h2
          class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-tight bg-gradient-to-br from-white to-[#a8b8d8] bg-clip-text text-transparent"
        >
          {sections[7].title}
        </h2>
        <p class="mt-2.5 text-lg font-light text-brand-dim tracking-wide">
          {sections[7].subtitle}
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-800 ease-out delay-200 {revealedMap[
          'roadmap'
        ]
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'}"
      >
        {#each sections[7].phases as phase, i}
          <div
            class="p-7 bg-brand-card border border-brand-card-border rounded-2xl transition-all duration-350 hover:-translate-y-1 hover:bg-brand-purple/[0.06] hover:border-brand-purple/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
          >
            <div class="flex items-center justify-between mb-3.5">
              <span
                class="text-sm font-bold tracking-[0.1em] uppercase text-brand-purple bg-brand-purple/12 px-3 py-1 rounded-lg"
                >Phase {i + 1}</span
              >
              <span class="text-base font-semibold text-brand-dim tabular-nums"
                >Days {phase.days}</span
              >
            </div>
            <h4 class="text-2xl font-bold text-white mb-2">{phase.label}</h4>
            <p class="text-lg leading-relaxed text-brand-dim mb-5">
              {phase.text}
            </p>
            <div
              class="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden"
            >
              <div
                class="phase-bar-inner h-full w-0 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full transition-[width] duration-[1.2s] ease-out"
                style="--target: {phase.pct}%"
              ></div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </article>

  <!-- CLOSING / CTA -->
  <article
    id="partnering"
    class="relative min-h-screen flex items-center px-6 py-24 bg-gradient-to-b from-brand-bg via-brand-blue/[0.06] to-brand-bg text-center"
  >
    <div class="absolute inset-0 z-0">
      <img
        src={sections[8].background}
        alt=""
        class="w-full h-full object-cover opacity-30"
      />

      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(0,122,204,0.15),transparent_60%),radial-gradient(ellipse_at_70%_60%,rgba(71,10,104,0.12),transparent_60%),linear-gradient(180deg,rgba(7,11,20,0.3)_0%,rgba(7,11,20,0.95)_100%)]"
      ></div>
    </div>
    <div
      class="max-w-[760px] mx-auto transition-all duration-800 ease-out {revealedMap[
        'partnering'
      ]
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}"
    >
      <span
        class="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-ice bg-brand-ice/10 border border-brand-ice/20 px-3.5 py-1.5 rounded-full mb-5"
        >{sections[8].kicker}</span
      >
      <h2
        class="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-tight bg-gradient-to-br from-white to-brand-ice bg-clip-text text-transparent"
      >
        {sections[8].title}
      </h2>

      <blockquote
        class="italic text-[clamp(1.2rem,2.5vw,1.6rem)] leading-relaxed text-white/80 my-8 py-6 border-y border-brand-blue/15"
      >
        {sections[8].quote}
      </blockquote>

      <p class="text-lg leading-relaxed mb-12">
        {sections[8].objective}
      </p>

      <div
        class="flex flex-col sm:flex-row items-center gap-6 p-7 bg-brand-bg/[0.5] border border-brand-blue/15 rounded-2xl max-w-[440px] mx-auto transition-all duration-350 hover:border-brand-blue/35 hover:shadow-[0_12px_40px_rgba(0,122,204,0.12)] hover:-translate-y-0.5"
      >
        <img
          src={sections[8].contact.avatar}
          alt={sections[8].contact.name}
          class="w-[72px] h-[72px] rounded-full object-cover border-2 border-brand-blue/30 shrink-0"
        />
        <div class="text-center sm:text-left">
          <span
            class="text-sm font-bold tracking-[0.15em] uppercase text-brand-blue"
            >{sections[8].contact.cta}</span
          >
          <h3 class="text-2xl font-extrabold text-white my-1">
            {sections[8].contact.name}
          </h3>
          <a
            href="mailto:{sections[8].contact.email}"
            class="inline-flex items-center gap-1.5 text-lg text-brand-blue no-underline hover:text-brand-ice transition-colors"
          >
            <Mail size={20} />
            {sections[8].contact.email}
          </a>
        </div>
      </div>
    </div>
  </article>
  <footer
    class="flex justify-center py-4 bg-white text-gray-500 items-center gap-3"
  >
    <a href="https://www.wpp.com" target="_blank" rel="noopener noreferrer">
      <img
        src={sections[8].contact.company}
        alt="WPP"
        class="w-20 h-auto object-contain"
      />
    </a>
    Copyright &copy; {new Date().getFullYear()} WPP. All rights reserved.
  </footer>
</main>

<style>
  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  .animate-slide-in {
    animation: slide-in 0.3s ease;
  }

  @keyframes scroll-wheel {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(10px);
    }
  }
  .animate-scroll-wheel {
    animation: scroll-wheel 2s infinite;
  }

  @keyframes spin-slow {
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 12s linear infinite;
  }

  .phase-bar-inner.bar-animate {
    width: var(--target);
  }
</style>
