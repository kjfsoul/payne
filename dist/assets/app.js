/* === SCENE DATA — SINGLE SOURCE OF TRUTH === */
var scene16Active = false;
var scene16Timer = null;
var scene16CurrentTile = 0;
var scene16Tiles = [];
var SCENE16_SPIRAL = [0, 1, 2, 5, 8, 7, 6, 3, 4];
var SCENE16_FOCUS_MS = 5000;

var SCENES = [
  {
    image: "assets/images/01.webp",
    video: null,
    text: "You said you still love me. I believe you. That is what is breaking me\u2014not the leaving, but the believing.",
    overlay: "overlay-center",
    textPos: "text-bottom-center",
    emphasis: "not the leaving, but the believing.",
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/02.webp",
    video: null,
    text: "I think about the times... at the pool when football became choreography, our bodies moving to the rhythm, our eyes catching each other\u2019s reactions, everything scintillating, everything ours.",
    overlay: "overlay-right",
    textPos: "text-bottom-left",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/03.webp",
    video: null,
    text: "Now I look into that water and nothing reflects back. The fun fell. The grace went with it. There\u2019s no music anymore. The DJ doesn\u2019t put a record on. No more dancing in the dark\u2014only silence, washed away by tears, and the sadness of not recognizing myself anymore.",
    overlay: "overlay-bottom",
    textPos: "text-top-left",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/04.webp",
    video: null,
    text: "You have been in Wisconsin for two weeks reclaiming another version of your life while I am now buried underneath it, boxed up like the belongings you\u2019ve asked me to pack.",
    overlay: "overlay-bottom",
    textPos: "text-bottom-left",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/05.webp",
    video: null,
    text: "You asked what you could do for me. Here is my answer: do not leave me to dismantle our life alone. It wasn\u2019t my choice, and yet I am the only one paying for it. The pain, failure, and loss overtake me every single day and I can\u2019t escape it or run to the one I love to get me through it because you are long gone.",
    overlay: "overlay-bottom",
    textPos: "text-bottom-right",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/06.webp",
    video: null,
    text: "Your mom reached out on July 18 and told me, \"You are always welcome in our family.\" Those words carried the weight of everything our families survived\u2014your grandmother\u2019s death, my mother\u2019s, the night our fates intertwined on that Uber Eats late-night delivery run.",
    overlay: "overlay-bottom",
    textPos: "text-top-center",
    emphasis: "\"You are always welcome in our family.\"",
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/07.webp",
    video: null,
    text: "I watched and admired your mom keep choosing family through grief, bankruptcy, separation, and rebuilding. She\u2019s a pillar of strength in the face of adversity and under the weight of sorrow, and that is to be honored.",
    overlay: "overlay-right",
    textPos: "text-top-center",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/08.webp",
    video: null,
    text: "Please have her contact me and come inside to help carry what you left behind and to take from me the scene I can\u2019t bear to keep living inside. And if you can come too\u2014help her, face me, look at what remains and decide what it means\u2014then come.",
    overlay: "overlay-center",
    textPos: "text-top-center",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: null,
    video: null,
    text: "Stop making the people who still love you pack away every piece of our shared joy alone while you are having the time... of your life.",
    overlay: "overlay-bottom",
    textPos: "text-bottom-left",
    emphasis: null,
    bgClass: "scene-bg-smoky",
    zoomOut: false
  },
  {
    image: "assets/images/10.webp",
    video: "assets/chicken.mov",
    text: "The time... it\u2019s been eighteen days. I have only left my house twice. Another chicken was run over. Maurice is gone. There is a new rooster in town. Life keeps changing out there while I remain here, not knowing whether the person I was before you is still reachable.",
    overlay: "overlay-bottom",
    textPos: "text-bottom-left",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/11.webp",
    video: null,
    text: "I still have more to say, but once your belongings cross this threshold, I am gone\u2014not in anger, but in permanence. I will not wait somewhere behind the life you chose. I forgot how to smile. Nothing makes me feel like I matter. That\u2019s the story you left me with. No questions. No concern. No asking if I was okay. Out of sight. Out of mind.",
    overlay: "overlay-center",
    textPos: "text-top-center",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/12.webp",
    video: null,
    text: "Tell me if any part of you denies what I\u2019m saying. If any part of you wants to absorb these feelings for me so I don\u2019t have to carry them alone.",
    overlay: "overlay-center",
    textPos: "text-top-left",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: "assets/images/13.webp",
    video: null,
    text: "Tell me you love me for all that you remember of me. The one who still wants me, still recognizes the world we were building, still wants to do something about it\u2014before there\u2019s nowhere left for either of us to return to.",
    overlay: "overlay-center",
    textPos: "text-bottom-left",
    emphasis: null,
    bgClass: null,
    zoomOut: true
  },
  {
    image: "assets/images/14.webp",
    video: null,
    text: "This time... there\u2019s no escape. Not without you. I have always chosen you. It\u2019s your choice that strangles me now\u2014and only your choice that can loosen the grip. I don\u2019t want to tell you this. It gives you a power over me I don\u2019t want you to have. But you are still the reason I am fighting to get through today.",
    overlay: "overlay-center",
    textPos: "text-top-center",
    emphasis: "I have always chosen you.",
    bgClass: null,
    zoomOut: true
  },
  {
    image: "assets/images/15.webp",
    video: "assets/nevergiveup.mov",
    text: "The fact that I can still speak to you, that this thread still exists, that I still want a life with you\u2014that is what is keeping me upright. I hate that it\u2019s true. But I will not lie to you. Not now. Not at the end. It\u2019s your time... My time...",
    overlay: "overlay-bottom",
    textPos: "text-top-center",
    emphasis: null,
    bgClass: null,
    zoomOut: false
  },
  {
    image: null,
    video: null,
    text: null,
    overlay: null,
    textPos: null,
    emphasis: null,
    bgClass: null,
    zoomOut: false
  }
];

/* === STATE === */
var currentIdx = 0;
var transitioning = false;
var preloaded = {};
var instructionDismissed = false;

/* === DOM REFS === */
var viewer = document.getElementById("viewer");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var currentNum = document.getElementById("current-num");
var instruction = document.getElementById("instruction");

/* === BUILD SCENES === */
function buildSceneEl(idx) {
  var s = SCENES[idx];
  var el = document.createElement("div");
  el.className = "scene";
  el.setAttribute("data-scene", idx);
  el.setAttribute("aria-hidden", "true");
  el.setAttribute("role", "tabpanel");
  el.setAttribute("aria-label", "Scene " + (idx + 1));

  // Background: image, video, black, or smoky
  if (s.image) {
    var img = document.createElement("img");
    img.className = "scene-bg";
    img.alt = "";
    img.src = s.image + "?v=26";
    if (s.zoomOut) {
      img.style.objectFit = "contain";
      img.style.animation = "none";
    }
    el.appendChild(img);
  } else if (s.bgClass) {
    var bg = document.createElement("div");
    bg.className = s.bgClass;
    el.appendChild(bg);
  }

  // Video background (autoplay, loop)
  if (s.video) {
    var vid = document.createElement("video");
    vid.className = "scene-bg-video";
    vid.src = s.video + "?v=26";
    vid.playsInline = true;
    vid.setAttribute("playsinline", "");
    vid.setAttribute("preload", "auto");
    // Do NOT autoplay — only play when scene becomes active
    if (idx !== 14) {
      vid.muted = true;
      vid.loop = true;
    } else {
      vid.muted = false;
      vid.setAttribute("data-plays", "0");
    }
    // Page 10 chicken video: zoom out, start lower
    if (idx === 9) {
      vid.muted = false;
      vid.style.objectFit = "contain";
      vid.style.objectPosition = "center 20%";
    }
    if (idx === 14) {
      vid.style.objectFit = "contain";
    }
    el.appendChild(vid);
  }

  var ov = document.createElement("div");
  ov.className = "scene-overlay " + s.overlay;
  el.appendChild(ov);

  var wrap = document.createElement("div");
  wrap.className = "scene-text-wrap " + s.textPos;
  // Black text box for readability on scenes 6 and 7
  if (idx === 5 || idx === 6) {
    wrap.classList.add("text-box-black");
  }

  var p = document.createElement("p");
  p.className = "scene-text";

  if (s.emphasis) {
    var parts = s.text.split(s.emphasis);
    if (parts.length === 2) {
      p.appendChild(document.createTextNode(parts[0]));
      var em = document.createElement("em");
      em.textContent = s.emphasis;
      p.appendChild(em);
      p.appendChild(document.createTextNode(parts[1]));
    } else {
      p.textContent = s.text;
    }
  } else {
    p.textContent = s.text;
  }

  wrap.appendChild(p);
  el.appendChild(wrap);
  return el;
}

/* Build all scene DOM and store refs */
var sceneEls = [];
for (var i = 0; i < SCENES.length; i++) {
  var el = buildSceneEl(i);
  viewer.appendChild(el);
  sceneEls.push(el);
}
// Scene 16: build video grid after DOM insertion
if (sceneEls[15]) {
  var s16el = sceneEls[15];
  while (s16el.firstChild) s16el.removeChild(s16el.firstChild);
  buildScene16(s16el);
}

/* === SHOW SCENE === */
function showScene(idx, direction) {
  if (idx === currentIdx) return;
  if (transitioning) {
    // Safety: force-reset if stuck
    transitioning = false;
  }
  if (idx < 0 || idx >= SCENES.length) return;

  transitioning = true;
  var oldEl = sceneEls[currentIdx];
  var newEl = sceneEls[idx];

  var textDelta = direction === "next" ? 8 : -8;

  var newWrapEl = newEl.querySelector(".scene-text-wrap");
  var newPosClass = newWrapEl ? newWrapEl.className : "";
  var isCentered = newPosClass.indexOf("text-center") !== -1 || newPosClass.indexOf("text-bottom-center") !== -1 || newPosClass.indexOf("text-top-center") !== -1;

  var newWrap = newWrapEl;
  if (newWrap) {
    newWrap.style.opacity = "0";
    newWrap.style.transform = isCentered
      ? "translate(-50%, -50%) translateY(" + textDelta + "px)"
      : "translateY(" + textDelta + "px)";
  }

  newEl.style.display = "block";
  newEl.setAttribute("aria-hidden", "false");
  newEl.offsetHeight;

  requestAnimationFrame(function() {
    newEl.classList.add("active");
    if (oldEl) {
      oldEl.classList.add("transitioning-out");
      oldEl.classList.remove("active");
    }

    setTimeout(function() {
      if (newWrap) {
        newWrap.style.opacity = "1";
        if (isCentered) {
          newWrap.style.transform = "translate(-50%, -50%) translateY(0)";
        } else {
          newWrap.style.transform = "translateY(0)";
        }
      }
    }, 150);

    setTimeout(function() {
      if (oldEl) {
        oldEl.style.display = "none";
        oldEl.classList.remove("transitioning-out");
        oldEl.setAttribute("aria-hidden", "true");
        // Pause any video in old scene
        if (oldIdx !== 15) {
          var oldVids = oldEl.querySelectorAll("video");
          for (var v = 0; v < oldVids.length; v++) {
            oldVids[v].pause();
            oldVids[v].currentTime = 0;
          }
        }
      }
      transitioning = false;
    }, 800);
  });

  var oldIdx = currentIdx;
  currentIdx = idx;
  updateProgress();
  preloadAhead(idx);
  hideInstruction();

  // Scene-aware audio: pause Time on video scenes (10, 15), resume when leaving them
  var bgAudio = document.getElementById("bg-audio");
  if (bgAudio && bgAudio.readyState > 0) {
    var isVideoScene = (idx === 9 || idx === 14);
    if (isVideoScene && !bgAudio.paused) {
      bgAudio.pause();
    }
    // Resume audio if we just left a video scene
    var wasVideoScene = (oldIdx === 9 || oldIdx === 14);
    if (!isVideoScene && wasVideoScene) {
      bgAudio.play().catch(function() {});
    }
  }

  // Scene 15: manage video playback (2 loops max) and caption
  if (oldIdx === 14) {
    // Leaving scene 15 — restore image, remove black bg
    var img15old = oldEl.querySelector("img.scene-bg");
    if (img15old) { img15old.style.display = ""; }
    var bg15old = oldEl.querySelector("#scene15-black-bg");
    if (bg15old) { bg15old.remove(); }
    // Leaving scene 15 — stop video, remove caption
    var oldVid = oldEl && oldEl.querySelector("video");
    if (oldVid) { oldVid.pause(); oldVid.currentTime = 0; oldVid.setAttribute("data-plays", "0"); }
    var oldCap = document.getElementById("scene15-caption");
    if (oldCap) oldCap.remove();
  }
  // Scene 10: play chicken video when scene activates
  if (idx === 9) {
    setTimeout(function() {
      var v10 = newEl.querySelector("video");
      if (v10) { v10.play().catch(function(){}); }
    }, 100);
  }
  // Scene 10: pause chicken video when leaving
  if (oldIdx === 9 && oldEl) {
    var oldV10 = oldEl.querySelector("video");
    if (oldV10) { oldV10.pause(); oldV10.currentTime = 0; }
  }

  if (idx === 14) {
    // Arriving at scene 15 — use black background for text readability
    var img15 = newEl.querySelector("img.scene-bg");
    if (img15) { img15.style.display = "none"; }
    var bg15 = document.createElement("div");
    bg15.className = "scene-bg-black";
    bg15.id = "scene15-black-bg";
    newEl.insertBefore(bg15, newEl.firstChild);
    // Arriving at scene 15 — play video, track loops, add elevated caption, resume Time after 2 loops
    var newVid = newEl.querySelector("video");
    if (newVid) {
      var plays = parseInt(newVid.getAttribute("data-plays")) || 0;
      newVid.onended = function() {
        plays++;
        newVid.setAttribute("data-plays", String(plays));
        if (plays < 2) {
          newVid.play().catch(function(){});
        } else {
          // After 2 loops, stop video and resume Time audio
          var bgA = document.getElementById("bg-audio");
          if (bgA) { bgA.play().catch(function(){}); }
        }
      };
      // Muted for autoplay; user click unmutes
      newVid.muted = true;
      newVid.play().then(function() {
        newVid.muted = false;
      }).catch(function(){});
      // Move text down 1 line
      var textWrap = newEl.querySelector(".scene-text-wrap");
      if (textWrap) { textWrap.style.paddingTop = "2.5rem"; }
      // Add elevated closed caption
      var cap = document.createElement("div");
      cap.id = "scene15-caption";
      cap.style.cssText = "position:absolute;bottom:max(6rem,calc(env(safe-area-inset-bottom,0px) + 4rem));left:50%;transform:translateX(-50%);z-index:5;color:#e4e2e4;font-family:'EB Garamond',serif;font-size:clamp(14px,2vw,18px);letter-spacing:0.15em;text-align:center;text-shadow:0 0 12px rgba(0,0,0,0.85),0 0 24px rgba(0,0,0,0.65);padding:0.5rem 1rem;background:rgba(0,0,0,0.4);border-radius:2px;";
      cap.textContent = "I'LL NEVER GIVE UP ON YOU.";
      newEl.appendChild(cap);
    }
  }
}

/* === PROGRESS === */
function updateProgress() {
  currentNum.textContent = String(currentIdx + 1).padStart(2, "0");
  prevBtn.style.visibility = currentIdx === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = currentIdx === SCENES.length - 1 ? "hidden" : "visible";
}

/* === PRELOAD === */
function preloadImage(idx) {
  if (idx < 0 || idx >= SCENES.length || preloaded[idx]) return;
  if (!SCENES[idx].image) return;
  preloaded[idx] = true;
  var link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = SCENES[idx].image + "?v=26";
  document.head.appendChild(link);
}

function preloadAhead(idx) {
  preloadImage(idx + 1);
  preloadImage(idx + 2);
}

/* === INSTRUCTION HINT === */
function hideInstruction() {
  if (!instructionDismissed) {
    instructionDismissed = true;
    instruction.classList.add("fading");
    setTimeout(function() { instruction.classList.remove("visible", "fading"); }, 600);
  }
}

/* === NAVIGATION === */
function goNext() { showScene(currentIdx + 1, "next"); }
function goPrev() { showScene(currentIdx - 1, "prev"); }

nextBtn.addEventListener("click", function(e) { e.stopPropagation(); goNext(); });
prevBtn.addEventListener("click", function(e) { e.stopPropagation(); goPrev(); });

var zoneLeft = document.createElement("div");
zoneLeft.className = "click-zone-left";
zoneLeft.addEventListener("click", goPrev);
document.body.appendChild(zoneLeft);

var zoneRight = document.createElement("div");
zoneRight.className = "click-zone-right";
zoneRight.addEventListener("click", goNext);
document.body.appendChild(zoneRight);

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); goNext(); }
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); goPrev(); }
});

var touchStartX = 0;
var touchStartY = 0;
document.addEventListener("touchstart", function(e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", function(e) {
  var dx = (e.changedTouches[0].clientX - touchStartX);
  var dy = (e.changedTouches[0].clientY - touchStartY);
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
    if (dx < 0) goNext();
    else goPrev();
  }
});


/* ============ SCENE 16: VIDEO GRID ============ */
function buildScene16(el) {
  var grid = document.createElement("div");
  grid.className = "scene16-grid";
  for (var i = 0; i < 9; i++) {
    var tile = document.createElement("div");
    tile.className = "scene16-tile";
    var vid = document.createElement("video");
    vid.src = "assets/scene16/scene16-0" + (i + 1) + ".mp4?v=26";
    vid.muted = true; vid.playsInline = true; vid.loop = true; vid.autoplay = true;
    vid.setAttribute("playsinline", "");
    vid.style.opacity = "1";
    tile.appendChild(vid);
    grid.appendChild(tile);
    scene16Tiles[i] = tile;
  }
  var rain = document.createElement("div");
  rain.className = "scene16-rain";
  rain.id = "scene16-rain";
  var ovl = document.createElement("div");
  ovl.className = "scene16-overlay";
  el.appendChild(rain);
  el.appendChild(ovl);
  el.appendChild(grid);
}

function startScene16() {
  if (scene16Active) return;
  scene16Active = true; scene16CurrentTile = 0;
  
  // Refresh scene16Tiles from the DOM (robust against stopScene16 clearing them)
  scene16Tiles = [];
  var tiles = document.querySelectorAll(".scene16-tile");
  for (var i = 0; i < tiles.length; i++) {
    scene16Tiles[i] = tiles[i];
  }
  
  // Play all videos
  for (var i = 0; i < scene16Tiles.length; i++) {
    var v = scene16Tiles[i] && scene16Tiles[i].querySelector("video");
    if (v) { v.play().catch(function(){}); }
  }
  
  createScene16Rain();
  if (SCENE16_SPIRAL.length > 0) runSpiralStep();
  document.addEventListener("visibilitychange", onScene16Visibility);
}

function stopScene16() {
  scene16Active = false;
  if (scene16Timer) { clearTimeout(scene16Timer); scene16Timer = null; }
  for (var i = 0; i < 9; i++) {
    if (scene16Tiles[i]) {
      var v = scene16Tiles[i].querySelector("video");
      if (v) v.pause();
      scene16Tiles[i].classList.remove("focused", "washed", "color-bleed");
    }
  }
  var r = document.getElementById("scene16-rain");
  if (r) r.innerHTML = "";
  document.removeEventListener("visibilitychange", onScene16Visibility);
}

function runSpiralStep() {
  if (!scene16Active || scene16CurrentTile >= SCENE16_SPIRAL.length) return;
  var ti = SCENE16_SPIRAL[scene16CurrentTile];
  // Requery tile from DOM for robustness
  var allTiles = document.querySelectorAll(".scene16-tile");
  var tile = allTiles[ti];
  if (!tile) return;
  
  if (scene16CurrentTile > 0) {
    var prevTi = SCENE16_SPIRAL[scene16CurrentTile - 1];
    var pt = allTiles[prevTi];
    if (pt) {
      pt.classList.remove("focused");
      pt.classList.add("color-bleed");
      setTimeout(function(t) {
        if (t) { t.classList.remove("color-bleed"); t.classList.add("washed"); }
      }, 4500, pt);
    }
  }
  tile.classList.add("focused");
  var v = tile.querySelector("video");
  if (v) v.play().catch(function(){});
  scene16CurrentTile++;
  scene16Timer = setTimeout(runSpiralStep, SCENE16_FOCUS_MS);
}

function createScene16Rain() {
  var c = document.getElementById("scene16-rain");
  if (!c) return;
  for (var i = 0; i < 80; i++) {
    var d = document.createElement("div");
    d.className = "scene16-rain-drop";
    d.style.left = Math.random() * 100 + "%";
    d.style.width = (Math.random() * 2 + 1) + "px";
    d.style.height = (Math.random() * 30 + 20) + "px";
    d.style.animationDuration = (Math.random() * 0.6 + 0.5) + "s";
    d.style.animationDelay = Math.random() * 1.5 + "s";
    d.style.opacity = Math.random() * 0.4 + 0.3;
    c.appendChild(d);
  }
}

function onScene16Visibility() {
  if (document.hidden) {
    for (var i = 0; i < scene16Tiles.length; i++) {
      var v = scene16Tiles[i] && scene16Tiles[i].querySelector("video");
      if (v) v.pause();
    }
  }
}

/* === INITIAL SCENE (no transition) === */
function initFirstScene() {
  var el = sceneEls[0];
  el.style.display = "block";
  el.classList.add("active");
  el.setAttribute("aria-hidden", "false");
  el.querySelector(".scene-text-wrap").style.opacity = "1";
  updateProgress();
  preloadImage(1);
  preloadImage(2);
  setTimeout(function() {
    if (!instructionDismissed) instruction.classList.add("visible");
  }, 1200);
}

/* === BACKGROUND AUDIO: CLICK-TO-PLAY === */
/* Triggers on first user interaction to comply with browser autoplay blocks */
(function() {
  var audio = document.getElementById("bg-audio");
  if (!audio) return;
  audio.volume = 0.35;
  var played = false;

  function tryPlay() {
    if (played) return;
    audio.load();
    var promise = audio.play();
    if (promise && promise.then) {
      promise.then(function() {
        played = true;
        document.removeEventListener("click", tryPlay);
        document.removeEventListener("touchend", tryPlay);
        document.removeEventListener("keydown", tryPlay);
      }).catch(function(e) {
        // Keep listeners — will retry on next interaction
      });
    } else {
      played = true;
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("touchend", tryPlay);
      document.removeEventListener("keydown", tryPlay);
    }
  }

  document.addEventListener("click", tryPlay);
  document.addEventListener("touchend", tryPlay);
  document.addEventListener("keydown", tryPlay);
})();

initFirstScene();
