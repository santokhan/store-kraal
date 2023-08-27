<template>
  <div
    class="chat-screen w-full fixed top-0 left-0 border-4 border-yellow-400 bg-gray-800 text-white"
  >
    <div class="h-28 py-2">
      <code class="text-sm leading-relaxed">
        <pre class="absolute -left-14 py-4">
        <span class="text-yellow-400">.chat-screen</span> {
           <span class="text-sky-300">height</span>: <span class="text-yellow-400">calc</span>(<span class="text-green-200">100vh</span> - <span class="text-yellow-400">calc</span>(<span class="text-green-200">100vh</span> - <span class="text-green-200">100%</span>)); 
        }
      </pre>
      </code>
    </div>
    <div class="px-4 text-center">or</div>
    <div class="h-28 py-2">
      <code class="text-sm leading-relaxed">
        <pre class="absolute -left-14 py-4">
        <span class="text-yellow-400">.chat-screen</span> {
           <span class="text-sky-300">height</span>: <span class="text-green-200">100vh</span>;
           <span class="text-sky-300">height</span>: -webkit-fill-available <span class="text-sky-300">!important</span>;
        }
      </pre>
      </code>
    </div>

    <div class="relative px-4 py-16 space-y-2">
      <h5 class="font-semibold text-xl text-yellow-400 text-center">
        ⚠️ The mobile browser bottom bar auto hides my content
      </h5>
      <div class="py-2">
        <p>
          Use one of these CSS style to stop hidding content on bottom to get exact screen
          height in Mobile browser
        </p>
      </div>
    </div>
  </div>
</template>
