/*=============================================
=            Jquery Plugin List            =
=============================================

    01. Modernizr JS
    02. jQuery
    03. Bootstrap
    04. Mean Menu 
    05. Count Down
    06. Magnific popup
    07. Nice Select
    08. Slick slider
    09. ResizeSensor
    10. Theia sticky sidebar
    11. Instafeed
    12. jQuery UI 
    13. Light Gallery
    14. Zoom
    15. AjaxChimp
    16. Parallax
    17. ImagesLoaded

/*=====  End of Jquery Plugin List  ======*/

/*=============================================
=            01. Modernizr JS         =
=============================================*/

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
(window.Modernizr = (function (a, b, c) {
  function D(a) {
    j.cssText = a;
  }
  function E(a, b) {
    return D(n.join(a + ";") + (b || ""));
  }
  function F(a, b) {
    return typeof a === b;
  }
  function G(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function H(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }
    return !1;
  }
  function I(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function J(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + p.join(d + " ") + d).split(" ");
    return F(b, "string") || F(b, "undefined")
      ? H(e, b)
      : ((e = (a + " " + q.join(d + " ") + d).split(" ")), I(e, b, c));
  }
  function K() {
    (e.input = (function (c) {
      for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
      return (
        u.list &&
          (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
        u
      );
    })(
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      )
    )),
      (e.inputtypes = (function (a) {
        for (var d = 0, e, f, h, i = a.length; d < i; d++)
          k.setAttribute("type", (f = a[d])),
            (e = k.type !== "text"),
            e &&
              ((k.value = l),
              (k.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(f) && k.style.WebkitAppearance !== c
                ? (g.appendChild(k),
                  (h = b.defaultView),
                  (e =
                    h.getComputedStyle &&
                    h.getComputedStyle(k, null).WebkitAppearance !==
                      "textfield" &&
                    k.offsetHeight !== 0),
                  g.removeChild(k))
                : /^(search|tel)$/.test(f) ||
                  (/^(url|email)$/.test(f)
                    ? (e = k.checkValidity && k.checkValidity() === !1)
                    : (e = k.value != l))),
            (t[a[d]] = !!e);
        return t;
      })(
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        )
      ));
  }
  var d = "2.8.3",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k = b.createElement("input"),
    l = ":)",
    m = {}.toString,
    n = " -webkit- -moz- -o- -ms- ".split(" "),
    o = "Webkit Moz O ms",
    p = o.split(" "),
    q = o.toLowerCase().split(" "),
    r = { svg: "http://www.w3.org/2000/svg" },
    s = {},
    t = {},
    u = {},
    v = [],
    w = v.slice,
    x,
    y = function (a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement("div")),
            (j.id = e ? e[d] : h + (d + 1)),
            l.appendChild(j);
      return (
        (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
        (l.id = h),
        ((m ? l : n).innerHTML += f),
        n.appendChild(l),
        m ||
          ((n.style.background = ""),
          (n.style.overflow = "hidden"),
          (k = g.style.overflow),
          (g.style.overflow = "hidden"),
          g.appendChild(n)),
        (i = c(l, a)),
        m
          ? l.parentNode.removeChild(l)
          : (n.parentNode.removeChild(n), (g.style.overflow = k)),
        !!i
      );
    },
    z = function (b) {
      var c = a.matchMedia || a.msMatchMedia;
      if (c) return (c(b) && c(b).matches) || !1;
      var d;
      return (
        y(
          "@media " + b + " { #" + h + " { position: absolute; } }",
          function (b) {
            d =
              (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)[
                "position"
              ] == "absolute";
          }
        ),
        d
      );
    },
    A = (function () {
      function d(d, e) {
        (e = e || b.createElement(a[d] || "div")), (d = "on" + d);
        var f = d in e;
        return (
          f ||
            (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute &&
              e.removeAttribute &&
              (e.setAttribute(d, ""),
              (f = F(e[d], "function")),
              F(e[d], "undefined") || (e[d] = c),
              e.removeAttribute(d))),
          (e = null),
          f
        );
      }
      var a = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img",
      };
      return d;
    })(),
    B = {}.hasOwnProperty,
    C;
  !F(B, "undefined") && !F(B.call, "undefined")
    ? (C = function (a, b) {
        return B.call(a, b);
      })
    : (C = function (a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = w.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(w.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(w.call(arguments)));
          };
        return e;
      }),
    (s.flexbox = function () {
      return J("flexWrap");
    }),
    (s.canvas = function () {
      var a = b.createElement("canvas");
      return !!a.getContext && !!a.getContext("2d");
    }),
    (s.canvastext = function () {
      return (
        !!e.canvas &&
        !!F(b.createElement("canvas").getContext("2d").fillText, "function")
      );
    }),
    (s.webgl = function () {
      return !!a.WebGLRenderingContext;
    }),
    (s.touch = function () {
      var c;
      return (
        "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
          ? (c = !0)
          : y(
              [
                "@media (",
                n.join("touch-enabled),("),
                h,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (a) {
                c = a.offsetTop === 9;
              }
            ),
        c
      );
    }),
    (s.geolocation = function () {
      return "geolocation" in navigator;
    }),
    (s.postmessage = function () {
      return !!a.postMessage;
    }),
    (s.websqldatabase = function () {
      return !!a.openDatabase;
    }),
    (s.indexedDB = function () {
      return !!J("indexedDB", a);
    }),
    (s.hashchange = function () {
      return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
    }),
    (s.history = function () {
      return !!a.history && !!history.pushState;
    }),
    (s.draganddrop = function () {
      var a = b.createElement("div");
      return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
    }),
    (s.websockets = function () {
      return "WebSocket" in a || "MozWebSocket" in a;
    }),
    (s.rgba = function () {
      return (
        D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
      );
    }),
    (s.hsla = function () {
      return (
        D("background-color:hsla(120,40%,100%,.5)"),
        G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
      );
    }),
    (s.multiplebgs = function () {
      return (
        D("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(j.background)
      );
    }),
    (s.backgroundsize = function () {
      return J("backgroundSize");
    }),
    (s.borderimage = function () {
      return J("borderImage");
    }),
    (s.borderradius = function () {
      return J("borderRadius");
    }),
    (s.boxshadow = function () {
      return J("boxShadow");
    }),
    (s.textshadow = function () {
      return b.createElement("div").style.textShadow === "";
    }),
    (s.opacity = function () {
      return E("opacity:.55"), /^0.55$/.test(j.opacity);
    }),
    (s.cssanimations = function () {
      return J("animationName");
    }),
    (s.csscolumns = function () {
      return J("columnCount");
    }),
    (s.cssgradients = function () {
      var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
      return (
        D(
          (a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(
            0,
            -a.length
          )
        ),
        G(j.backgroundImage, "gradient")
      );
    }),
    (s.cssreflections = function () {
      return J("boxReflect");
    }),
    (s.csstransforms = function () {
      return !!J("transform");
    }),
    (s.csstransforms3d = function () {
      var a = !!J("perspective");
      return (
        a &&
          "webkitPerspective" in g.style &&
          y(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (b, c) {
              a = b.offsetLeft === 9 && b.offsetHeight === 3;
            }
          ),
        a
      );
    }),
    (s.csstransitions = function () {
      return J("transition");
    }),
    (s.fontface = function () {
      var a;
      return (
        y(
          '@font-face {font-family:"font";src:url("https://")}',
          function (c, d) {
            var e = b.getElementById("smodernizr"),
              f = e.sheet || e.styleSheet,
              g = f
                ? f.cssRules && f.cssRules[0]
                  ? f.cssRules[0].cssText
                  : f.cssText || ""
                : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
          }
        ),
        a
      );
    }),
    (s.generatedcontent = function () {
      var a;
      return (
        y(
          [
            "#",
            h,
            "{font:0/0 a}#",
            h,
            ':after{content:"',
            l,
            '";visibility:hidden;font:3px/1 a}',
          ].join(""),
          function (b) {
            a = b.offsetHeight >= 3;
          }
        ),
        a
      );
    }),
    (s.video = function () {
      var a = b.createElement("video"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (c.h264 = a
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (c.webm = a
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (s.audio = function () {
      var a = b.createElement("audio"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, "")),
            (c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, "")),
            (c.wav = a
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, "")),
            (c.m4a = (
              a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
            ).replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (s.localstorage = function () {
      try {
        return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
      } catch (a) {
        return !1;
      }
    }),
    (s.sessionstorage = function () {
      try {
        return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
      } catch (a) {
        return !1;
      }
    }),
    (s.webworkers = function () {
      return !!a.Worker;
    }),
    (s.applicationcache = function () {
      return !!a.applicationCache;
    }),
    (s.svg = function () {
      return (
        !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
      );
    }),
    (s.inlinesvg = function () {
      var a = b.createElement("div");
      return (
        (a.innerHTML = "<svg/>"),
        (a.firstChild && a.firstChild.namespaceURI) == r.svg
      );
    }),
    (s.smil = function () {
      return (
        !!b.createElementNS &&
        /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
      );
    }),
    (s.svgclippaths = function () {
      return (
        !!b.createElementNS &&
        /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
      );
    });
  for (var L in s)
    C(s, L) &&
      ((x = L.toLowerCase()), (e[x] = s[L]()), v.push((e[x] ? "" : "no-") + x));
  return (
    e.input || K(),
    (e.addTest = function (a, b) {
      if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b == "function" ? b() : b),
          typeof f != "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    D(""),
    (i = k = null),
    (function (a, b) {
      function l(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function m() {
        var a = s.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function n(a) {
        var b = j[a[h]];
        return b || ((b = {}), i++, (a[h] = i), (j[i] = b)), b;
      }
      function o(a, c, d) {
        c || (c = b);
        if (k) return c.createElement(a);
        d || (d = n(c));
        var g;
        return (
          d.cache[a]
            ? (g = d.cache[a].cloneNode())
            : f.test(a)
            ? (g = (d.cache[a] = d.createElem(a)).cloneNode())
            : (g = d.createElem(a)),
          g.canHaveChildren && !e.test(a) && !g.tagUrn
            ? d.frag.appendChild(g)
            : g
        );
      }
      function p(a, c) {
        a || (a = b);
        if (k) return a.createDocumentFragment();
        c = c || n(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = m(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d;
      }
      function q(a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return s.shivMethods ? o(c, a, b) : b.createElem(c);
          }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              m()
                .join()
                .replace(/[\w\-]+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  );
                }) +
              ");return n}"
          )(s, b.frag));
      }
      function r(a) {
        a || (a = b);
        var c = n(a);
        return (
          s.shivCSS &&
            !g &&
            !c.hasCSS &&
            (c.hasCSS = !!l(
              a,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          k || q(a, c),
          a
        );
      }
      var c = "3.7.0",
        d = a.html5 || {},
        e =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        f =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g,
        h = "_html5shiv",
        i = 0,
        j = {},
        k;
      (function () {
        try {
          var a = b.createElement("a");
          (a.innerHTML = "<xyz></xyz>"),
            (g = "hidden" in a),
            (k =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return (
                  typeof a.cloneNode == "undefined" ||
                  typeof a.createDocumentFragment == "undefined" ||
                  typeof a.createElement == "undefined"
                );
              })());
        } catch (c) {
          (g = !0), (k = !0);
        }
      })();
      var s = {
        elements:
          d.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: c,
        shivCSS: d.shivCSS !== !1,
        supportsUnknownElements: k,
        shivMethods: d.shivMethods !== !1,
        type: "default",
        shivDocument: r,
        createElement: o,
        createDocumentFragment: p,
      };
      (a.html5 = s), r(b);
    })(this, b),
    (e._version = d),
    (e._prefixes = n),
    (e._domPrefixes = q),
    (e._cssomPrefixes = p),
    (e.mq = z),
    (e.hasEvent = A),
    (e.testProp = function (a) {
      return H([a]);
    }),
    (e.testAllProps = J),
    (e.testStyles = y),
    (e.prefixed = function (a, b, c) {
      return b ? J(a, b, c) : J(a, "pfx");
    }),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + v.join(" ") : "")),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }
    function e(a) {
      return "string" == typeof a;
    }
    function f() {}
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                ("c" == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          "img" != a &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      1 === y[c] && ((r = 1), (y[c] = [])),
        "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror =
          l.onload =
          l.onreadystatechange =
            function () {
              k.call(this, r);
            }),
        p.splice(e, 0, u),
        "img" != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return "[object Array]" == o.call(a);
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      "css" == i.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2);
                  })));
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var i,
        j,
        l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload =
            function () {
              !l &&
                g(k.readyState) &&
                ((l = 1), c(), (k.onload = k.onreadystatechange = null));
            }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });

/*=============================================
=            02. jQuery        		 =
=============================================*/

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    y = function e(t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var b = "3.3.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.fn = w.prototype =
    {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || g(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                        : (o = n && w.isPlainObject(n) ? n : {}),
                      (a[t] = w.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = i(e)) ||
            ("function" ==
              typeof (n = f.call(t, "constructor") && t.constructor) &&
              p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (C(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(T, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (C(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
          (r = !t(e[o], o)) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (C(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !g(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  var E = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      y,
      v,
      m,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = ae(),
      k = ae(),
      S = ae(),
      D = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      A = [],
      j = A.pop,
      q = A.push,
      L = A.push,
      H = A.slice,
      O = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I =
        "\\[" +
        M +
        "*(" +
        R +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        M +
        "*\\]",
      W =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      F = new RegExp("^" + M + "*," + M + "*"),
      _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      X = new RegExp(W),
      U = new RegExp("^" + R + "$"),
      V = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      L.apply((A = H.call(w.childNodes)), w.childNodes),
        A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length
          ? function (e, t) {
              q.apply(e, H.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== T && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) (m = t), (v = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id"))
              ? (c = c.replace(te, ne))
              : t.setAttribute("id", (c = b)),
              (s = (h = a(e)).length);
            while (s--) h[s] = "#" + c + " " + ve(h[s]);
            (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
          }
          if (v)
            try {
              return L.apply(r, m.querySelectorAll(v)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return u(e.replace(B, "$1"), t, r, i);
    }
    function ae() {
      var e = [];
      function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      return t;
    }
    function se(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      var n = e.split("|"),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      return se(function (t) {
        return (
          (t = +t),
          se(function (n, r) {
            var i,
              o = e([], n.length, t),
              a = o.length;
            while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    (n = oe.support = {}),
      (o = oe.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (p = oe.setDocument =
        function (e) {
          var t,
            i,
            a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement
            ? ((d = a),
              (h = d.documentElement),
              (g = !o(d)),
              w !== d &&
                (i = d.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", re, !1)
                  : i.attachEvent && i.attachEvent("onunload", re)),
              (n.attributes = ue(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = ue(function (e) {
                return (
                  e.appendChild(d.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
              (n.getById = ue(function (e) {
                return (
                  (h.appendChild(e).id = b),
                  !d.getElementsByName || !d.getElementsByName(b).length
                );
              })),
              n.getById
                ? ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (y = []),
              (n.qsa = Q.test(d.querySelectorAll)) &&
                (ue(function (e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    b +
                    "'></a><select id='" +
                    b +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      y.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      y.push("\\[" + M + "*(?:value|" + P + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length ||
                      y.push("~="),
                    e.querySelectorAll(":checked").length || y.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length ||
                      y.push(".#.+[+~]");
                }),
                ue(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = d.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      y.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      y.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:");
                })),
              (n.matchesSelector = Q.test(
                (m =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                ue(function (e) {
                  (n.disconnectedMatch = m.call(e, "*")),
                    m.call(e, "[s!='']:x"),
                    v.push("!=", W);
                }),
              (y = y.length && new RegExp(y.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (x =
                t || Q.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (D = t
                ? function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === d || (e.ownerDocument === w && x(w, e))
                          ? -1
                          : t === d || (t.ownerDocument === w && x(w, t))
                          ? 1
                          : c
                          ? O(c, e) - O(c, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e === d
                        ? -1
                        : t === d
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : c
                        ? O(c, e) - O(c, t)
                        : 0;
                    if (i === o) return ce(e, t);
                    n = e;
                    while ((n = n.parentNode)) a.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r
                      ? ce(a[r], s[r])
                      : a[r] === w
                      ? -1
                      : s[r] === w
                      ? 1
                      : 0;
                  }),
              d)
            : d;
        }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== d && p(e),
          (t = t.replace(z, "='$1']")),
          n.matchesSelector &&
            g &&
            !S[t + " "] &&
            (!v || !v.test(t)) &&
            (!y || !y.test(t)))
        )
          try {
            var r = m.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return oe(t, d, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (
          ((f = !n.detectDuplicates),
          (c = !n.sortStable && e.slice(0)),
          e.sort(D),
          f)
        ) {
          while ((t = e[o++])) t === e[o] && (i = r.push(o));
          while (i--) e.splice(r[i], 1);
        }
        return (c = null), e;
      }),
      (i = oe.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else while ((t = e[r++])) n += i(t);
          return n;
        }),
      ((r = oe.selectors =
        {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(Z, ee)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return V.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = a(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(Z, ee).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = E[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  E(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = oe.attr(r, e);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && i.indexOf(n) > -1
                        : "$=" === t
                        ? n && i.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p,
                      d,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      y = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      m = !u && !s,
                      x = !1;
                    if (y) {
                      if (o) {
                        while (g) {
                          p = t;
                          while ((p = p[g]))
                            if (
                              s
                                ? p.nodeName.toLowerCase() === v
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                        (x =
                          (d =
                            (l =
                              (c =
                                (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]) && l[2]),
                          (p = d && y.childNodes[d]);
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (1 === p.nodeType && ++x && p === t) {
                            c[e] = [T, d, x];
                            break;
                          }
                      } else if (
                        (m &&
                          (x = d =
                            (l =
                              (c =
                                (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]),
                        !1 === x)
                      )
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (
                            (s
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType) &&
                            ++x &&
                            (m &&
                              ((c =
                                (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] = [T, x]),
                            p === t)
                          )
                            break;
                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  oe.error("unsupported pseudo: " + e);
              return i[b]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? se(function (e, n) {
                        var r,
                          o = i(e, t),
                          a = o.length;
                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: se(function (e) {
              var t = [],
                n = [],
                r = s(e.replace(B, "$1"));
              return r[b]
                ? se(function (e, t, n, i) {
                    var o,
                      a = r(e, null, i, []),
                      s = e.length;
                    while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: se(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: se(function (e) {
              return (
                (e = e.replace(Z, ee)),
                function (t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: se(function (e) {
              return (
                U.test(e || "") || oe.error("unsupported lang: " + e),
                (e = e.replace(Z, ee).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === d.activeElement &&
                (!d.hasFocus || d.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: de(!1),
            disabled: de(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !r.pseudos.empty(e);
            },
            header: function (e) {
              return Y.test(e.nodeName);
            },
            input: function (e) {
              return G.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: he(function () {
              return [0];
            }),
            last: he(function (e, t) {
              return [t - 1];
            }),
            eq: he(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: he(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: he(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ye() {}
    (ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (a = oe.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          (s = e), (u = []), (l = r.preFilter);
          while (s) {
            (n && !(i = F.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (n = !1),
              (i = _.exec(s)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(B, " ") }),
                (s = s.slice(n.length)));
            for (a in r.filter)
              !(i = V[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        });
    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
            while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [T, s];
            if (u) {
              while ((t = t[r]))
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[b] || (t[b] = {})),
                    (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s)
                      return (p[2] = l[2]);
                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return e.length > 1
        ? function (t, n, r) {
            var i = e.length;
            while (i--) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
      return n;
    }
    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = Te(r)),
        i && !i[b] && (i = Te(i, o)),
        se(function (o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!o && t) ? g : we(g, p, e, s, u),
            v = n ? (i || (o ? e : h || r) ? [] : a) : y;
          if ((n && n(y, v, s, u), r)) {
            (l = we(v, d)), r(l, [], s, u), (c = l.length);
            while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
          if (o) {
            if (i || e) {
              if (i) {
                (l = []), (c = v.length);
                while (c--) (f = v[c]) && l.push((y[c] = f));
                i(null, (v = []), l, u);
              }
              c = v.length;
              while (c--)
                (f = v[c]) &&
                  (l = i ? O(o, f) : p[c]) > -1 &&
                  (o[l] = !(a[l] = f));
            }
          } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          u = a ? 1 : 0,
          c = me(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = me(
            function (e) {
              return O(t, e) > -1;
            },
            s,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
            return Te(
              u > 1 && xe(p),
              u > 1 &&
                ve(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              u < i && Ce(e.slice(u, i)),
              i < o && Ce((e = e.slice(i))),
              i < o && ve(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    function Ee(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function (o, a, s, u, c) {
          var f,
            h,
            y,
            v = 0,
            m = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG("*", c)),
            E = (T += null == w ? 1 : Math.random() || 0.1),
            k = C.length;
          for (
            c && (l = a === d || a || c);
            m !== k && null != (f = C[m]);
            m++
          ) {
            if (i && f) {
              (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
              while ((y = e[h++]))
                if (y(f, a || d, s)) {
                  u.push(f);
                  break;
                }
              c && (T = E);
            }
            n && ((f = !y && f) && v--, o && x.push(f));
          }
          if (((v += m), n && m !== v)) {
            h = 0;
            while ((y = t[h++])) y(x, b, a, s);
            if (o) {
              if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
              b = we(b);
            }
            L.apply(u, b),
              c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
          }
          return c && ((T = E), (l = w)), x;
        };
      return n ? se(o) : o;
    }
    return (
      (s = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = S[e + " "];
          if (!o) {
            t || (t = a(e)), (n = t.length);
            while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
            (o = S(e, Ee(i, r))).selector = e;
          }
          return o;
        }),
      (u = oe.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && a((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (u = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            o = V.needsContext.test(e) ? 0 : u.length;
            while (o--) {
              if (((l = u[o]), r.relative[(c = l.type)])) break;
              if (
                (f = r.find[c]) &&
                (i = f(
                  l.matches[0].replace(Z, ee),
                  (K.test(u[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((u.splice(o, 1), !(e = i.length && ve(u))))
                  return L.apply(n, i), n;
                break;
              }
            }
          }
          return (
            (p || s(e, d))(
              i,
              t,
              !g,
              n,
              !t || (K.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(D).join("") === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        le(P, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      oe
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var k = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return g(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return u.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return r > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : L.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
          ),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (q = w(r));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? u.call(w(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  });
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  w.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return k(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return k(e, "parentNode", n);
      },
      next: function (e) {
        return P(e, "nextSibling");
      },
      prev: function (e) {
        return P(e, "previousSibling");
      },
      nextAll: function (e) {
        return k(e, "nextSibling");
      },
      prevAll: function (e) {
        return k(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return k(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return k(e, "previousSibling", n);
      },
      siblings: function (e) {
        return S((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return S(e.firstChild);
      },
      contents: function (e) {
        return N(e, "iframe")
          ? e.contentDocument
          : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes));
      },
    },
    function (e, t) {
      w.fn[e] = function (n, r) {
        var i = w.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = w.filter(r, i)),
          this.length > 1 &&
            (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
          this.pushStack(i)
        );
      };
    }
  );
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    var t = {};
    return (
      w.each(e.match(M) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function () {
        for (i = i || e.once, r = t = !0; a.length; s = -1) {
          n = a.shift();
          while (++s < o.length)
            !1 === o[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (n = !1));
        }
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                w.each(n, function (n, r) {
                  g(r)
                    ? (e.unique && l.has(r)) || o.push(r)
                    : r && r.length && "string" !== x(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              var n;
              while ((n = w.inArray(t, o, n)) > -1)
                o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = a = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = a = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  };
  function I(e) {
    return e;
  }
  function W(e) {
    throw e;
  }
  function $(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  w.extend({
    Deferred: function (t) {
      var n = [
          [
            "notify",
            "progress",
            w.Callbacks("memory"),
            w.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        r = "pending",
        i = {
          state: function () {
            return r;
          },
          always: function () {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return w
              .Deferred(function (t) {
                w.each(n, function (n, r) {
                  var i = g(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && g(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          then: function (t, r, i) {
            var o = 0;
            function a(t, n, r, i) {
              return function () {
                var s = this,
                  u = arguments,
                  l = function () {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = r.apply(s, u)) === n.promise())
                        throw new TypeError("Thenable self-resolution");
                      (l =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        g(l)
                          ? i
                            ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                            : (o++,
                              l.call(
                                e,
                                a(o, n, I, i),
                                a(o, n, W, i),
                                a(o, n, I, n.notifyWith)
                              ))
                          : (r !== I && ((s = void 0), (u = [e])),
                            (i || n.resolveWith)(s, u));
                    }
                  },
                  c = i
                    ? l
                    : function () {
                        try {
                          l();
                        } catch (e) {
                          w.Deferred.exceptionHook &&
                            w.Deferred.exceptionHook(e, c.stackTrace),
                            t + 1 >= o &&
                              (r !== W && ((s = void 0), (u = [e])),
                              n.rejectWith(s, u));
                        }
                      };
                t
                  ? c()
                  : (w.Deferred.getStackHook &&
                      (c.stackTrace = w.Deferred.getStackHook()),
                    e.setTimeout(c));
              };
            }
            return w
              .Deferred(function (e) {
                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                  n[1][3].add(a(0, e, g(t) ? t : I)),
                  n[2][3].add(a(0, e, g(r) ? r : W));
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? w.extend(e, i) : i;
          },
        },
        o = {};
      return (
        w.each(n, function (e, t) {
          var a = t[2],
            s = t[5];
          (i[t[1]] = a.add),
            s &&
              a.add(
                function () {
                  r = s;
                },
                n[3 - e][2].disable,
                n[3 - e][3].disable,
                n[0][2].lock,
                n[0][3].lock
              ),
            a.add(t[3].fire),
            (o[t[0]] = function () {
              return (
                o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              );
            }),
            (o[t[0] + "With"] = a.fireWith);
        }),
        i.promise(o),
        t && t.call(o, o),
        o
      );
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = o.call(arguments),
        a = w.Deferred(),
        s = function (e) {
          return function (n) {
            (r[e] = this),
              (i[e] = arguments.length > 1 ? o.call(arguments) : n),
              --t || a.resolveWith(r, i);
          };
        };
      if (
        t <= 1 &&
        ($(e, a.done(s(n)).resolve, a.reject, !t),
        "pending" === a.state() || g(i[n] && i[n].then))
      )
        return a.then();
      while (n--) $(i[n], s(n), a.reject);
      return a.promise();
    },
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      B.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = w.Deferred();
  (w.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
          (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
      },
    }),
    (w.ready.then = F.then);
  function _() {
    r.removeEventListener("DOMContentLoaded", _),
      e.removeEventListener("load", _),
      w.ready();
  }
  "complete" === r.readyState ||
  ("loading" !== r.readyState && !r.documentElement.doScroll)
    ? e.setTimeout(w.ready)
    : (r.addEventListener("DOMContentLoaded", _),
      e.addEventListener("load", _));
  var z = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) {
        i = !0;
        for (s in n) z(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        g(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(w(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    X = /^-ms-/,
    U = /-([a-z])/g;
  function V(e, t) {
    return t.toUpperCase();
  }
  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[G(t)] = n;
        else for (r in t) i[G(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][G(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(G)
              : (t = G(t)) in r
              ? [t]
              : t.match(M) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var J = new Q(),
    K = new Q(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;
  function te(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Z.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = te(n);
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function (e, t) {
      J.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
          ) {
            n = a.length;
            while (n--)
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                ((r = G(r.slice(5))), ne(o, r, i[r]));
            J.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              K.set(this, e);
            })
          : z(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = K.get(o, e))) return n;
                  if (void 0 !== (n = ne(o, e))) return n;
                } else
                  this.each(function () {
                    K.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = J.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = J.access(e, t, w.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function () {
            w.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          J.get(e, n) ||
          J.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              J.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = J.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          w.contains(e.ownerDocument, e) &&
          "none" === w.css(e, "display"))
      );
    },
    se = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    };
  function ue(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        w.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), w.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var le = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = w.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (le[r] = i),
      i)
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = J.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r)))
          : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && w.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = w.contains(o.ownerDocument, o)),
        (a = ye(f.appendChild(o), "script")),
        l && ve(a),
        n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  !(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
      t = r.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var be = r.documentElement,
    we = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) De(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  (w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.get(e);
      if (y) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && w.find.matchesSelector(be, i),
          n.guid || (n.guid = w.guid++),
          (u = y.events) || (u = y.events = {}),
          (a = y.handle) ||
            (a = y.handle =
              function (t) {
                return "undefined" != typeof w && w.event.triggered !== t.type
                  ? w.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
          (l = (t = (t || "").match(M) || [""]).length);
        while (l--)
          (d = g = (s = Ce.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.hasData(e) && J.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;
        while (l--)
          if (
            ((s = Ce.exec(t[l]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = w.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                w.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t = w.event.fix(e),
        n,
        r,
        i,
        o,
        a,
        s,
        u = new Array(arguments.length),
        l = (J.get(this, "events") || {})[t.type] || [],
        c = w.event.special[t.type] || {};
      for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
      if (
        ((t.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, t))
      ) {
        (s = w.event.handlers.call(this, t, l)), (n = 0);
        while ((o = s[n++]) && !t.isPropagationStopped()) {
          (t.currentTarget = o.elem), (r = 0);
          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
            (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
              ((t.handleObj = a),
              (t.data = a.data),
              void 0 !==
                (i = (
                  (w.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, u)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? w(i, this).index(l) > -1
                  : w.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return N(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || w.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, r) {
        return De(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return De(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? w(e).children("tbody")[0] || e
      : e;
  }
  function He(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Oe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        J.hasData(e) &&
        ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      }
      K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
    }
  }
  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      y = t[0],
      v = g(y);
    if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
      });
    if (
      p &&
      ((i = xe(t, e[0].ownerDocument, !1, e, r)),
      (o = i.firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
        (l = i),
          f !== d &&
            ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))),
          n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
          (l = s[f]),
            he.test(l.type || "") &&
              !J.access(l, "globalEval") &&
              w.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? w._evalUrl && w._evalUrl(l.src)
                : m(l.textContent.replace(qe, ""), c, l));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || w.cleanData(ye(r)),
        r.parentNode &&
          (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = w.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
          Me(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)
            Pe(o[r], a[r]);
        else Pe(e, s);
      return (
        (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if ((t = n[J.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[J.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return z(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Re(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Re(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return z(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Re(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ye(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              w(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
    $e = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Be = new RegExp(oe.join("|"), "i");
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (a = 36 === c.offsetWidth || "absolute"),
          be.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement("div"),
      c = r.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), a;
        },
      }));
  })();
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          w.contains(e.ownerDocument, e) ||
          (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          We.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ue = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" },
    Ge = ["Webkit", "Moz", "ms"],
    Ye = r.createElement("div").style;
  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
      n = Ge.length;
    while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }
  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }
  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n &&
              (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + oe[a], !0, i)),
            "padding" !== n
              ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
              : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
          )
        )),
      u
    );
  }
  function et(e, t, n) {
    var r = $e(e),
      i = Fe(e, t, r),
      o = "border-box" === w.css(e, "boxSizing", !1, r),
      a = o;
    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (a = a && (h.boxSizingReliable() || i === e.style[t])),
      ("auto" === i ||
        (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
        ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) +
        Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
        "px"
    );
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = G(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = ie.exec(n)) &&
          i[1] &&
          ((n = ue(e, t, i)), (o = "number")),
          null != n &&
            n === n &&
            ("number" === o &&
              (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = G(t);
      return (
        Xe.test(t) || (t = Je(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        "normal" === i && t in Ve && (i = Ve[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ze.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : se(e, Ue, function () {
                  return et(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
          return (
            a &&
              h.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ze(e, t, "border", !1, o) -
                  0.5
              )),
            s &&
              (i = ie.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ke(e, n, s)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              se(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function (e, t) {
        return z(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++)
                o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    });
  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }
  (w.Tween = tt),
    (tt.prototype = {
      constructor: tt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }),
    (tt.prototype.init.prototype = tt.prototype),
    (tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = tt.prototype.init),
    (w.fx.step = {});
  var nt,
    rt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function at() {
    rt &&
      (!1 === r.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
    for (
      var r,
        i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ct(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ae(e),
      y = J.get(e, "fxshow");
    n.queue ||
      (null == (a = w._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function () {
        p.always(function () {
          a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
        });
      }));
    for (r in t)
      if (((i = t[r]), it.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
        ) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }
        d[r] = (y && y[r]) || w.style(e, r);
      }
    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (l = y && y.display) && (l = J.get(e, "display")),
        "none" === (c = w.css(e, "display")) &&
          (l
            ? (c = l)
            : (fe([e], !0),
              (l = e.style.display || l),
              (c = w.css(e, "display")),
              fe([e]))),
        ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === w.css(e, "float") &&
          (u ||
            (p.done(function () {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          p.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (u = !1);
      for (r in d)
        u ||
          (y
            ? "hidden" in y && (g = y.hidden)
            : (y = J.access(e, "fxshow", { display: l })),
          o && (y.hidden = !g),
          g && fe([e], !0),
          p.done(function () {
            g || fe([e]), J.remove(e, "fxshow");
            for (r in d) w.style(e, r, d[r]);
          })),
          (u = lt(g ? y[r] : 0, r, p)),
          r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
    }
  }
  function ft(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = G(n)),
        (i = t[r]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = w.cssHooks[r]) && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function pt(e, t, n) {
    var r,
      i,
      o = 0,
      a = pt.prefilters.length,
      s = w.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = nt || st(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = w.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (ft(c, l.opts.specialEasing); o < a; o++)
      if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
        return (
          g(r.stop) &&
            (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      w.map(c, lt, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (w.Animation = w.extend(pt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ie.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (pt.tweeners[n] = pt.tweeners[n] || []),
          pt.tweeners[n].unshift(t);
    },
    prefilters: [ct],
    prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (g(e) && e),
              duration: e,
              easing: (n && t) || (t && !g(t) && t),
            };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in w.fx.speeds
              ? (r.duration = w.fx.speeds[r.duration])
              : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
            var t = pt(this, w.extend({}, e), o);
            (i || J.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = w.timers,
              a = J.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = w.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (nt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (nt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      rt || ((rt = !0), at());
    }),
    (w.fx.stop = function () {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = w.fx ? w.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var dt,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (i =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = ht[a]),
            (ht[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (ht[a] = o)),
          i
        );
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function (e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    );
  function vt(e) {
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }
  w.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).addClass(e.call(this, t, mt(this)));
        });
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).removeClass(e.call(this, t, mt(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++]))
              while (r.indexOf(" " + o + " ") > -1)
                r = r.replace(" " + o + " ", " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : g(e)
        ? this.each(function (n) {
            w(this).toggleClass(e.call(this, n, mt(this), t), t);
          })
        : this.each(function () {
            var t, i, o, a;
            if (r) {
              (i = 0), (o = w(this)), (a = xt(e));
              while ((t = a[i++]))
                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while ((n = this[r++]))
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
          return !0;
      return !1;
    },
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = g(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : Array.isArray(i) &&
                    (i = w.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  w.valHooks[this.type] ||
                  w.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (t =
            w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
            ? n.replace(bt, "")
            : null == n
            ? ""
            : n;
      }
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : vt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        v = [i || r],
        m = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !wt.test(m + w.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
          (c = m.indexOf(":") < 0 && "on" + m),
          (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !y(i)) {
          for (
            l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (u = s);
          u === (i.ownerDocument || r) &&
            v.push(u.defaultView || u.parentWindow || e);
        }
        a = 0;
        while ((s = v[a++]) && !t.isPropagationStopped())
          (h = s),
            (t.type = a > 1 ? l : d.bindType || m),
            (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) &&
              p.apply(s, n),
            (p = c && s[c]) &&
              p.apply &&
              Y(s) &&
              ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !Y(i) ||
            (c &&
              g(i[m]) &&
              !y(i) &&
              ((u = i[c]) && (i[c] = null),
              (w.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, Tt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Tt),
              (w.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t);
            i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t) - 1;
            i
              ? J.access(r, t, i)
              : (r.removeEventListener(e, n, !0), J.remove(r, t));
          },
        };
      });
  var Ct = e.location,
    Et = Date.now(),
    kt = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        w.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Dt = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : jt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== x(t)) r(e, t);
    else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              At.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    });
  var qt = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Bt = r.createElement("a");
  Bt.href = Ct.href;
  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        while ((r = o[i++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function _t(e, t, n, r) {
    var i = {},
      o = e === Wt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e;
  }
  function Xt(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.contents,
      u = e.dataTypes;
    while ("*" === u[0])
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function Ut(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
            for (i in l)
              if (
                (s = i.split(" "))[1] === o &&
                (a = l[u + " " + s[0]] || l["* " + s[0]])
              ) {
                !0 === a
                  ? (a = l[i])
                  : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function (t, n) {
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h = w.ajaxSetup({}, n),
        g = h.context || h,
        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
        v = w.Deferred(),
        m = w.Callbacks("once memory"),
        x = h.statusCode || {},
        b = {},
        T = {},
        C = "canceled",
        E = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) {
                s = {};
                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
              }
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (e, t) {
            return (
              null == c &&
                ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                (b[e] = t)),
              this
            );
          },
          overrideMimeType: function (e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (c) E.always(e[E.status]);
              else for (t in e) x[t] = [x[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || C;
            return i && i.abort(t), k(0, t), this;
          },
        };
      if (
        (v.promise(E),
        (h.url = ((t || h.url || Ct.href) + "").replace(
          Rt,
          Ct.protocol + "//"
        )),
        (h.type = n.method || n.type || h.method || h.type),
        (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
        null == h.crossDomain)
      ) {
        l = r.createElement("a");
        try {
          (l.href = h.url),
            (l.href = l.href),
            (h.crossDomain =
              Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
        } catch (e) {
          h.crossDomain = !0;
        }
      }
      if (
        (h.data &&
          h.processData &&
          "string" != typeof h.data &&
          (h.data = w.param(h.data, h.traditional)),
        _t(It, h, n, E),
        c)
      )
        return E;
      (f = w.event && h.global) &&
        0 == w.active++ &&
        w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Mt.test(h.type)),
        (o = h.url.replace(Lt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(qt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Ht, "$1")),
              (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] &&
            E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader("Content-Type", h.contentType),
        E.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : h.accepts["*"]
        );
      for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
        return E.abort();
      if (
        ((C = "abort"),
        m.add(h.complete),
        E.done(h.success),
        E.fail(h.error),
        (i = _t(Wt, h, n, E)))
      ) {
        if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
          return E;
        h.async &&
          h.timeout > 0 &&
          (u = e.setTimeout(function () {
            E.abort("timeout");
          }, h.timeout));
        try {
          (c = !1), i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");
      function k(t, n, r, s) {
        var l,
          p,
          d,
          b,
          T,
          C = n;
        c ||
          ((c = !0),
          u && e.clearTimeout(u),
          (i = void 0),
          (a = s || ""),
          (E.readyState = t > 0 ? 4 : 0),
          (l = (t >= 200 && t < 300) || 304 === t),
          r && (b = Xt(h, E, r)),
          (b = Ut(h, b, E, l)),
          l
            ? (h.ifModified &&
                ((T = E.getResponseHeader("Last-Modified")) &&
                  (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
              204 === t || "HEAD" === h.type
                ? (C = "nocontent")
                : 304 === t
                ? (C = "notmodified")
                : ((C = b.state), (p = b.data), (l = !(d = b.error))))
            : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
          (E.status = t),
          (E.statusText = (n || C) + ""),
          l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
          E.statusCode(x),
          (x = void 0),
          f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
          m.fireWith(g, [E, C]),
          f &&
            (y.trigger("ajaxComplete", [E, h]),
            --w.active || w.event.trigger("ajaxStop")));
      }
      return E;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    },
  }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (w._evalUrl = function (e) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Vt = { 0: 200, 1223: 204 },
    Gt = w.ajaxSettings.xhr();
  (h.cors = !!Gt && "withCredentials" in Gt),
    (h.ajax = Gt = !!Gt),
    w.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Gt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest");
            for (a in i) s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Vt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = w("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Qt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? w(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument = (function () {
      var e = r.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (w.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, o, a;
      return (
        t ||
          (h.createHTMLDocument
            ? (((i = (t =
                r.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = r.location.href),
              t.head.appendChild(i))
            : (t = r)),
        (o = A.exec(e)),
        (a = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = xe([e], t, a)),
            a && a.length && w(a).remove(),
            w.merge([], o.childNodes))
      );
    }),
    (w.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          w
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
        "static" === c && (e.style.position = "relative"),
          (s = f.offset()),
          (o = w.css(e, "top")),
          (u = w.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1)
            ? ((a = (r = f.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - w.css(r, "marginTop", !0),
            left: t.left - i.left - w.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === w.css(e, "position")) e = e.offsetParent;
          return e || be;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
          return z(
            this,
            function (e, r, i) {
              var o;
              if (
                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          w.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return z(
              this,
              function (t, n, i) {
                var o;
                return y(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? w.css(t, n, s)
                  : w.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          (i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }),
          (i.guid = e.guid = e.guid || w.guid++),
          i
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = g),
    (w.isWindow = y),
    (w.camelCase = G),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Jt = e.jQuery,
    Kt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
});

/*=============================================
=            03. Bootstrap        		 =
=============================================*/

/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], t)
    : t((e.bootstrap = {}), e.jQuery);
})(this, function (e, t) {
  "use strict";
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function s(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }
  function l(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {},
        t = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (t = t.concat(
          Object.getOwnPropertySymbols(o).filter(function (e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        t.forEach(function (e) {
          var t, n, i;
          (t = r),
            (i = o[(n = e)]),
            n in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i);
        });
    }
    return r;
  }
  for (
    var r,
      n,
      o,
      a,
      c,
      u,
      f,
      h,
      d,
      p,
      m,
      g,
      _,
      v,
      y,
      E,
      b,
      w,
      C,
      T,
      S,
      D,
      A,
      I,
      O,
      N,
      k,
      x,
      P,
      L,
      j,
      H,
      M,
      F,
      W,
      R,
      U,
      B,
      q,
      K,
      Q,
      Y,
      V,
      z,
      G,
      J,
      Z,
      X,
      $,
      ee,
      te,
      ne,
      ie,
      re,
      oe,
      se,
      ae,
      le,
      ce,
      ue,
      fe,
      he,
      de,
      pe,
      me,
      ge,
      _e,
      ve,
      ye,
      Ee,
      be,
      we = (function (i) {
        var t = "transitionend";
        function e(e) {
          var t = this,
            n = !1;
          return (
            i(this).one(l.TRANSITION_END, function () {
              n = !0;
            }),
            setTimeout(function () {
              n || l.triggerTransitionEnd(t);
            }, e),
            this
          );
        }
        var l = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (e) {
            for (
              ;
              (e += ~~(1e6 * Math.random())), document.getElementById(e);

            );
            return e;
          },
          getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            (t && "#" !== t) || (t = e.getAttribute("href") || "");
            try {
              return document.querySelector(t) ? t : null;
            } catch (e) {
              return null;
            }
          },
          getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var t = i(e).css("transition-duration");
            return parseFloat(t)
              ? ((t = t.split(",")[0]), 1e3 * parseFloat(t))
              : 0;
          },
          reflow: function (e) {
            return e.offsetHeight;
          },
          triggerTransitionEnd: function (e) {
            i(e).trigger(t);
          },
          supportsTransitionEnd: function () {
            return Boolean(t);
          },
          isElement: function (e) {
            return (e[0] || e).nodeType;
          },
          typeCheckConfig: function (e, t, n) {
            for (var i in n)
              if (Object.prototype.hasOwnProperty.call(n, i)) {
                var r = n[i],
                  o = t[i],
                  s =
                    o && l.isElement(o)
                      ? "element"
                      : ((a = o),
                        {}.toString
                          .call(a)
                          .match(/\s([a-z]+)/i)[1]
                          .toLowerCase());
                if (!new RegExp(r).test(s))
                  throw new Error(
                    e.toUpperCase() +
                      ': Option "' +
                      i +
                      '" provided type "' +
                      s +
                      '" but expected type "' +
                      r +
                      '".'
                  );
              }
            var a;
          },
        };
        return (
          (i.fn.emulateTransitionEnd = e),
          (i.event.special[l.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function (e) {
              if (i(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            },
          }),
          l
        );
      })((t = t && t.hasOwnProperty("default") ? t.default : t)),
      Ce =
        ((n = "alert"),
        (a = "." + (o = "bs.alert")),
        (c = (r = t).fn[n]),
        (u = {
          CLOSE: "close" + a,
          CLOSED: "closed" + a,
          CLICK_DATA_API: "click" + a + ".data-api",
        }),
        (f = "alert"),
        (h = "fade"),
        (d = "show"),
        (p = (function () {
          function i(e) {
            this._element = e;
          }
          var e = i.prototype;
          return (
            (e.close = function (e) {
              var t = this._element;
              e && (t = this._getRootElement(e)),
                this._triggerCloseEvent(t).isDefaultPrevented() ||
                  this._removeElement(t);
            }),
            (e.dispose = function () {
              r.removeData(this._element, o), (this._element = null);
            }),
            (e._getRootElement = function (e) {
              var t = we.getSelectorFromElement(e),
                n = !1;
              return (
                t && (n = document.querySelector(t)),
                n || (n = r(e).closest("." + f)[0]),
                n
              );
            }),
            (e._triggerCloseEvent = function (e) {
              var t = r.Event(u.CLOSE);
              return r(e).trigger(t), t;
            }),
            (e._removeElement = function (t) {
              var n = this;
              if ((r(t).removeClass(d), r(t).hasClass(h))) {
                var e = we.getTransitionDurationFromElement(t);
                r(t)
                  .one(we.TRANSITION_END, function (e) {
                    return n._destroyElement(t, e);
                  })
                  .emulateTransitionEnd(e);
              } else this._destroyElement(t);
            }),
            (e._destroyElement = function (e) {
              r(e).detach().trigger(u.CLOSED).remove();
            }),
            (i._jQueryInterface = function (n) {
              return this.each(function () {
                var e = r(this),
                  t = e.data(o);
                t || ((t = new i(this)), e.data(o, t)),
                  "close" === n && t[n](this);
              });
            }),
            (i._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this);
              };
            }),
            s(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.3";
                },
              },
            ]),
            i
          );
        })()),
        r(document).on(
          u.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          p._handleDismiss(new p())
        ),
        (r.fn[n] = p._jQueryInterface),
        (r.fn[n].Constructor = p),
        (r.fn[n].noConflict = function () {
          return (r.fn[n] = c), p._jQueryInterface;
        }),
        p),
      Te =
        ((g = "button"),
        (v = "." + (_ = "bs.button")),
        (y = ".data-api"),
        (E = (m = t).fn[g]),
        (b = "active"),
        (w = "btn"),
        (T = '[data-toggle^="button"]'),
        (S = '[data-toggle="buttons"]'),
        (D = "input"),
        (A = ".active"),
        (I = ".btn"),
        (O = {
          CLICK_DATA_API: "click" + v + y,
          FOCUS_BLUR_DATA_API: (C = "focus") + v + y + " blur" + v + y,
        }),
        (N = (function () {
          function n(e) {
            this._element = e;
          }
          var e = n.prototype;
          return (
            (e.toggle = function () {
              var e = !0,
                t = !0,
                n = m(this._element).closest(S)[0];
              if (n) {
                var i = this._element.querySelector(D);
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && this._element.classList.contains(b))
                      e = !1;
                    else {
                      var r = n.querySelector(A);
                      r && m(r).removeClass(b);
                    }
                  if (e) {
                    if (
                      i.hasAttribute("disabled") ||
                      n.hasAttribute("disabled") ||
                      i.classList.contains("disabled") ||
                      n.classList.contains("disabled")
                    )
                      return;
                    (i.checked = !this._element.classList.contains(b)),
                      m(i).trigger("change");
                  }
                  i.focus(), (t = !1);
                }
              }
              t &&
                this._element.setAttribute(
                  "aria-pressed",
                  !this._element.classList.contains(b)
                ),
                e && m(this._element).toggleClass(b);
            }),
            (e.dispose = function () {
              m.removeData(this._element, _), (this._element = null);
            }),
            (n._jQueryInterface = function (t) {
              return this.each(function () {
                var e = m(this).data(_);
                e || ((e = new n(this)), m(this).data(_, e)),
                  "toggle" === t && e[t]();
              });
            }),
            s(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.3";
                },
              },
            ]),
            n
          );
        })()),
        m(document)
          .on(O.CLICK_DATA_API, T, function (e) {
            e.preventDefault();
            var t = e.target;
            m(t).hasClass(w) || (t = m(t).closest(I)),
              N._jQueryInterface.call(m(t), "toggle");
          })
          .on(O.FOCUS_BLUR_DATA_API, T, function (e) {
            var t = m(e.target).closest(I)[0];
            m(t).toggleClass(C, /^focus(in)?$/.test(e.type));
          }),
        (m.fn[g] = N._jQueryInterface),
        (m.fn[g].Constructor = N),
        (m.fn[g].noConflict = function () {
          return (m.fn[g] = E), N._jQueryInterface;
        }),
        N),
      Se =
        ((x = "carousel"),
        (L = "." + (P = "bs.carousel")),
        (j = ".data-api"),
        (H = (k = t).fn[x]),
        (M = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
        }),
        (F = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
        }),
        (W = "next"),
        (R = "prev"),
        (U = "left"),
        (B = "right"),
        (q = {
          SLIDE: "slide" + L,
          SLID: "slid" + L,
          KEYDOWN: "keydown" + L,
          MOUSEENTER: "mouseenter" + L,
          MOUSELEAVE: "mouseleave" + L,
          TOUCHEND: "touchend" + L,
          LOAD_DATA_API: "load" + L + j,
          CLICK_DATA_API: "click" + L + j,
        }),
        (K = "carousel"),
        (Q = "active"),
        (Y = "slide"),
        (V = "carousel-item-right"),
        (z = "carousel-item-left"),
        (G = "carousel-item-next"),
        (J = "carousel-item-prev"),
        (Z = ".active"),
        (X = ".active.carousel-item"),
        ($ = ".carousel-item"),
        (ee = ".carousel-item-next, .carousel-item-prev"),
        (te = ".carousel-indicators"),
        (ne = "[data-slide], [data-slide-to]"),
        (ie = '[data-ride="carousel"]'),
        (re = (function () {
          function o(e, t) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this._config = this._getConfig(t)),
              (this._element = k(e)[0]),
              (this._indicatorsElement = this._element.querySelector(te)),
              this._addEventListeners();
          }
          var e = o.prototype;
          return (
            (e.next = function () {
              this._isSliding || this._slide(W);
            }),
            (e.nextWhenVisible = function () {
              !document.hidden &&
                k(this._element).is(":visible") &&
                "hidden" !== k(this._element).css("visibility") &&
                this.next();
            }),
            (e.prev = function () {
              this._isSliding || this._slide(R);
            }),
            (e.pause = function (e) {
              e || (this._isPaused = !0),
                this._element.querySelector(ee) &&
                  (we.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (e.cycle = function (e) {
              e || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (e.to = function (e) {
              var t = this;
              this._activeElement = this._element.querySelector(X);
              var n = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                  k(this._element).one(q.SLID, function () {
                    return t.to(e);
                  });
                else {
                  if (n === e) return this.pause(), void this.cycle();
                  var i = n < e ? W : R;
                  this._slide(i, this._items[e]);
                }
            }),
            (e.dispose = function () {
              k(this._element).off(L),
                k.removeData(this._element, P),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (e._getConfig = function (e) {
              return (e = l({}, M, e)), we.typeCheckConfig(x, e, F), e;
            }),
            (e._addEventListeners = function () {
              var t = this;
              this._config.keyboard &&
                k(this._element).on(q.KEYDOWN, function (e) {
                  return t._keydown(e);
                }),
                "hover" === this._config.pause &&
                  (k(this._element)
                    .on(q.MOUSEENTER, function (e) {
                      return t.pause(e);
                    })
                    .on(q.MOUSELEAVE, function (e) {
                      return t.cycle(e);
                    }),
                  ("ontouchstart" in document.documentElement) &&
                    k(this._element).on(q.TOUCHEND, function () {
                      t.pause(),
                        t.touchTimeout && clearTimeout(t.touchTimeout),
                        (t.touchTimeout = setTimeout(function (e) {
                          return t.cycle(e);
                        }, 500 + t._config.interval));
                    }));
            }),
            (e._keydown = function (e) {
              if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                  case 37:
                    e.preventDefault(), this.prev();
                    break;
                  case 39:
                    e.preventDefault(), this.next();
                }
            }),
            (e._getItemIndex = function (e) {
              return (
                (this._items =
                  e && e.parentNode
                    ? [].slice.call(e.parentNode.querySelectorAll($))
                    : []),
                this._items.indexOf(e)
              );
            }),
            (e._getItemByDirection = function (e, t) {
              var n = e === W,
                i = e === R,
                r = this._getItemIndex(t),
                o = this._items.length - 1;
              if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
                return t;
              var s = (r + (e === R ? -1 : 1)) % this._items.length;
              return -1 === s
                ? this._items[this._items.length - 1]
                : this._items[s];
            }),
            (e._triggerSlideEvent = function (e, t) {
              var n = this._getItemIndex(e),
                i = this._getItemIndex(this._element.querySelector(X)),
                r = k.Event(q.SLIDE, {
                  relatedTarget: e,
                  direction: t,
                  from: i,
                  to: n,
                });
              return k(this._element).trigger(r), r;
            }),
            (e._setActiveIndicatorElement = function (e) {
              if (this._indicatorsElement) {
                var t = [].slice.call(
                  this._indicatorsElement.querySelectorAll(Z)
                );
                k(t).removeClass(Q);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && k(n).addClass(Q);
              }
            }),
            (e._slide = function (e, t) {
              var n,
                i,
                r,
                o = this,
                s = this._element.querySelector(X),
                a = this._getItemIndex(s),
                l = t || (s && this._getItemByDirection(e, s)),
                c = this._getItemIndex(l),
                u = Boolean(this._interval);
              if (
                (e === W
                  ? ((n = z), (i = G), (r = U))
                  : ((n = V), (i = J), (r = B)),
                l && k(l).hasClass(Q))
              )
                this._isSliding = !1;
              else if (
                !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
                s &&
                l
              ) {
                (this._isSliding = !0),
                  u && this.pause(),
                  this._setActiveIndicatorElement(l);
                var f = k.Event(q.SLID, {
                  relatedTarget: l,
                  direction: r,
                  from: a,
                  to: c,
                });
                if (k(this._element).hasClass(Y)) {
                  k(l).addClass(i),
                    we.reflow(l),
                    k(s).addClass(n),
                    k(l).addClass(n);
                  var h = we.getTransitionDurationFromElement(s);
                  k(s)
                    .one(we.TRANSITION_END, function () {
                      k(l)
                        .removeClass(n + " " + i)
                        .addClass(Q),
                        k(s).removeClass(Q + " " + i + " " + n),
                        (o._isSliding = !1),
                        setTimeout(function () {
                          return k(o._element).trigger(f);
                        }, 0);
                    })
                    .emulateTransitionEnd(h);
                } else
                  k(s).removeClass(Q),
                    k(l).addClass(Q),
                    (this._isSliding = !1),
                    k(this._element).trigger(f);
                u && this.cycle();
              }
            }),
            (o._jQueryInterface = function (i) {
              return this.each(function () {
                var e = k(this).data(P),
                  t = l({}, M, k(this).data());
                "object" == typeof i && (t = l({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (
                  (e || ((e = new o(this, t)), k(this).data(P, e)),
                  "number" == typeof i)
                )
                  e.to(i);
                else if ("string" == typeof n) {
                  if ("undefined" == typeof e[n])
                    throw new TypeError('No method named "' + n + '"');
                  e[n]();
                } else t.interval && (e.pause(), e.cycle());
              });
            }),
            (o._dataApiClickHandler = function (e) {
              var t = we.getSelectorFromElement(this);
              if (t) {
                var n = k(t)[0];
                if (n && k(n).hasClass(K)) {
                  var i = l({}, k(n).data(), k(this).data()),
                    r = this.getAttribute("data-slide-to");
                  r && (i.interval = !1),
                    o._jQueryInterface.call(k(n), i),
                    r && k(n).data(P).to(r),
                    e.preventDefault();
                }
              }
            }),
            s(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.3";
                },
              },
              {
                key: "Default",
                get: function () {
                  return M;
                },
              },
            ]),
            o
          );
        })()),
        k(document).on(q.CLICK_DATA_API, ne, re._dataApiClickHandler),
        k(window).on(q.LOAD_DATA_API, function () {
          for (
            var e = [].slice.call(document.querySelectorAll(ie)),
              t = 0,
              n = e.length;
            t < n;
            t++
          ) {
            var i = k(e[t]);
            re._jQueryInterface.call(i, i.data());
          }
        }),
        (k.fn[x] = re._jQueryInterface),
        (k.fn[x].Constructor = re),
        (k.fn[x].noConflict = function () {
          return (k.fn[x] = H), re._jQueryInterface;
        }),
        re),
      De =
        ((se = "collapse"),
        (le = "." + (ae = "bs.collapse")),
        (ce = (oe = t).fn[se]),
        (ue = { toggle: !0, parent: "" }),
        (fe = { toggle: "boolean", parent: "(string|element)" }),
        (he = {
          SHOW: "show" + le,
          SHOWN: "shown" + le,
          HIDE: "hide" + le,
          HIDDEN: "hidden" + le,
          CLICK_DATA_API: "click" + le + ".data-api",
        }),
        (de = "show"),
        (pe = "collapse"),
        (me = "collapsing"),
        (ge = "collapsed"),
        (_e = "width"),
        (ve = "height"),
        (ye = ".show, .collapsing"),
        (Ee = '[data-toggle="collapse"]'),
        (be = (function () {
          function a(t, e) {
            (this._isTransitioning = !1),
              (this._element = t),
              (this._config = this._getConfig(e)),
              (this._triggerArray = oe.makeArray(
                document.querySelectorAll(
                  '[data-toggle="collapse"][href="#' +
                    t.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    t.id +
                    '"]'
                )
              ));
            for (
              var n = [].slice.call(document.querySelectorAll(Ee)),
                i = 0,
                r = n.length;
              i < r;
              i++
            ) {
              var o = n[i],
                s = we.getSelectorFromElement(o),
                a = [].slice
                  .call(document.querySelectorAll(s))
                  .filter(function (e) {
                    return e === t;
                  });
              null !== s &&
                0 < a.length &&
                ((this._selector = s), this._triggerArray.push(o));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var e = a.prototype;
          return (
            (e.toggle = function () {
              oe(this._element).hasClass(de) ? this.hide() : this.show();
            }),
            (e.show = function () {
              var e,
                t,
                n = this;
              if (
                !this._isTransitioning &&
                !oe(this._element).hasClass(de) &&
                (this._parent &&
                  0 ===
                    (e = [].slice
                      .call(this._parent.querySelectorAll(ye))
                      .filter(function (e) {
                        return (
                          e.getAttribute("data-parent") === n._config.parent
                        );
                      })).length &&
                  (e = null),
                !(
                  e &&
                  (t = oe(e).not(this._selector).data(ae)) &&
                  t._isTransitioning
                ))
              ) {
                var i = oe.Event(he.SHOW);
                if ((oe(this._element).trigger(i), !i.isDefaultPrevented())) {
                  e &&
                    (a._jQueryInterface.call(oe(e).not(this._selector), "hide"),
                    t || oe(e).data(ae, null));
                  var r = this._getDimension();
                  oe(this._element).removeClass(pe).addClass(me),
                    (this._element.style[r] = 0),
                    this._triggerArray.length &&
                      oe(this._triggerArray)
                        .removeClass(ge)
                        .attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                  var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                    s = we.getTransitionDurationFromElement(this._element);
                  oe(this._element)
                    .one(we.TRANSITION_END, function () {
                      oe(n._element).removeClass(me).addClass(pe).addClass(de),
                        (n._element.style[r] = ""),
                        n.setTransitioning(!1),
                        oe(n._element).trigger(he.SHOWN);
                    })
                    .emulateTransitionEnd(s),
                    (this._element.style[r] = this._element[o] + "px");
                }
              }
            }),
            (e.hide = function () {
              var e = this;
              if (!this._isTransitioning && oe(this._element).hasClass(de)) {
                var t = oe.Event(he.HIDE);
                if ((oe(this._element).trigger(t), !t.isDefaultPrevented())) {
                  var n = this._getDimension();
                  (this._element.style[n] =
                    this._element.getBoundingClientRect()[n] + "px"),
                    we.reflow(this._element),
                    oe(this._element)
                      .addClass(me)
                      .removeClass(pe)
                      .removeClass(de);
                  var i = this._triggerArray.length;
                  if (0 < i)
                    for (var r = 0; r < i; r++) {
                      var o = this._triggerArray[r],
                        s = we.getSelectorFromElement(o);
                      if (null !== s)
                        oe(
                          [].slice.call(document.querySelectorAll(s))
                        ).hasClass(de) ||
                          oe(o).addClass(ge).attr("aria-expanded", !1);
                    }
                  this.setTransitioning(!0);
                  this._element.style[n] = "";
                  var a = we.getTransitionDurationFromElement(this._element);
                  oe(this._element)
                    .one(we.TRANSITION_END, function () {
                      e.setTransitioning(!1),
                        oe(e._element)
                          .removeClass(me)
                          .addClass(pe)
                          .trigger(he.HIDDEN);
                    })
                    .emulateTransitionEnd(a);
                }
              }
            }),
            (e.setTransitioning = function (e) {
              this._isTransitioning = e;
            }),
            (e.dispose = function () {
              oe.removeData(this._element, ae),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (e._getConfig = function (e) {
              return (
                ((e = l({}, ue, e)).toggle = Boolean(e.toggle)),
                we.typeCheckConfig(se, e, fe),
                e
              );
            }),
            (e._getDimension = function () {
              return oe(this._element).hasClass(_e) ? _e : ve;
            }),
            (e._getParent = function () {
              var n = this,
                e = null;
              we.isElement(this._config.parent)
                ? ((e = this._config.parent),
                  "undefined" != typeof this._config.parent.jquery &&
                    (e = this._config.parent[0]))
                : (e = document.querySelector(this._config.parent));
              var t =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]',
                i = [].slice.call(e.querySelectorAll(t));
              return (
                oe(i).each(function (e, t) {
                  n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
                }),
                e
              );
            }),
            (e._addAriaAndCollapsedClass = function (e, t) {
              if (e) {
                var n = oe(e).hasClass(de);
                t.length && oe(t).toggleClass(ge, !n).attr("aria-expanded", n);
              }
            }),
            (a._getTargetFromElement = function (e) {
              var t = we.getSelectorFromElement(e);
              return t ? document.querySelector(t) : null;
            }),
            (a._jQueryInterface = function (i) {
              return this.each(function () {
                var e = oe(this),
                  t = e.data(ae),
                  n = l({}, ue, e.data(), "object" == typeof i && i ? i : {});
                if (
                  (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                  t || ((t = new a(this, n)), e.data(ae, t)),
                  "string" == typeof i)
                ) {
                  if ("undefined" == typeof t[i])
                    throw new TypeError('No method named "' + i + '"');
                  t[i]();
                }
              });
            }),
            s(a, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.3";
                },
              },
              {
                key: "Default",
                get: function () {
                  return ue;
                },
              },
            ]),
            a
          );
        })()),
        oe(document).on(he.CLICK_DATA_API, Ee, function (e) {
          "A" === e.currentTarget.tagName && e.preventDefault();
          var n = oe(this),
            t = we.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(t));
          oe(i).each(function () {
            var e = oe(this),
              t = e.data(ae) ? "toggle" : n.data();
            be._jQueryInterface.call(e, t);
          });
        }),
        (oe.fn[se] = be._jQueryInterface),
        (oe.fn[se].Constructor = be),
        (oe.fn[se].noConflict = function () {
          return (oe.fn[se] = ce), be._jQueryInterface;
        }),
        be),
      Ae = "undefined" != typeof window && "undefined" != typeof document,
      Ie = ["Edge", "Trident", "Firefox"],
      Oe = 0,
      Ne = 0;
    Ne < Ie.length;
    Ne += 1
  )
    if (Ae && 0 <= navigator.userAgent.indexOf(Ie[Ne])) {
      Oe = 1;
      break;
    }
  var ke =
    Ae && window.Promise
      ? function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                (t = !1), e();
              }));
          };
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, Oe));
          };
        };
  function xe(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function Pe(e, t) {
    if (1 !== e.nodeType) return [];
    var n = getComputedStyle(e, null);
    return t ? n[t] : n;
  }
  function Le(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function je(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var t = Pe(e),
      n = t.overflow,
      i = t.overflowX,
      r = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + r + i) ? e : je(Le(e));
  }
  var He = Ae && !(!window.MSInputMethodContext || !document.documentMode),
    Me = Ae && /MSIE 10/.test(navigator.userAgent);
  function Fe(e) {
    return 11 === e ? He : 10 === e ? Me : He || Me;
  }
  function We(e) {
    if (!e) return document.documentElement;
    for (
      var t = Fe(10) ? document.body : null, n = e.offsetParent;
      n === t && e.nextElementSibling;

    )
      n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === Pe(n, "position")
        ? We(n)
        : n
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function Re(e) {
    return null !== e.parentNode ? Re(e.parentNode) : e;
  }
  function Ue(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? e : t,
      r = n ? t : e,
      o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var s,
      a,
      l = o.commonAncestorContainer;
    if ((e !== l && t !== l) || i.contains(r))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && We(s.firstElementChild) !== s)
        ? We(l)
        : l;
    var c = Re(e);
    return c.host ? Ue(c.host, t) : Ue(e, Re(t).host);
  }
  function Be(e) {
    var t =
        "top" ===
        (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top")
          ? "scrollTop"
          : "scrollLeft",
      n = e.nodeName;
    if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement;
      return (e.ownerDocument.scrollingElement || i)[t];
    }
    return e[t];
  }
  function qe(e, t) {
    var n = "x" === t ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(e["border" + n + "Width"], 10) +
      parseFloat(e["border" + i + "Width"], 10)
    );
  }
  function Ke(e, t, n, i) {
    return Math.max(
      t["offset" + e],
      t["scroll" + e],
      n["client" + e],
      n["offset" + e],
      n["scroll" + e],
      Fe(10)
        ? n["offset" + e] +
            i["margin" + ("Height" === e ? "Top" : "Left")] +
            i["margin" + ("Height" === e ? "Bottom" : "Right")]
        : 0
    );
  }
  function Qe() {
    var e = document.body,
      t = document.documentElement,
      n = Fe(10) && getComputedStyle(t);
    return { height: Ke("Height", e, t, n), width: Ke("Width", e, t, n) };
  }
  var Ye = (function () {
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      };
    })(),
    Ve = function (e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    },
    ze =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      };
  function Ge(e) {
    return ze({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function Je(e) {
    var t = {};
    try {
      if (Fe(10)) {
        t = e.getBoundingClientRect();
        var n = Be(e, "top"),
          i = Be(e, "left");
        (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
      } else t = e.getBoundingClientRect();
    } catch (e) {}
    var r = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top,
      },
      o = "HTML" === e.nodeName ? Qe() : {},
      s = o.width || e.clientWidth || r.right - r.left,
      a = o.height || e.clientHeight || r.bottom - r.top,
      l = e.offsetWidth - s,
      c = e.offsetHeight - a;
    if (l || c) {
      var u = Pe(e);
      (l -= qe(u, "x")), (c -= qe(u, "y")), (r.width -= l), (r.height -= c);
    }
    return Ge(r);
  }
  function Ze(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = Fe(10),
      r = "HTML" === t.nodeName,
      o = Je(e),
      s = Je(t),
      a = je(e),
      l = Pe(t),
      c = parseFloat(l.borderTopWidth, 10),
      u = parseFloat(l.borderLeftWidth, 10);
    n &&
      "HTML" === t.nodeName &&
      ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
    var f = Ge({
      top: o.top - s.top - c,
      left: o.left - s.left - u,
      width: o.width,
      height: o.height,
    });
    if (((f.marginTop = 0), (f.marginLeft = 0), !i && r)) {
      var h = parseFloat(l.marginTop, 10),
        d = parseFloat(l.marginLeft, 10);
      (f.top -= c - h),
        (f.bottom -= c - h),
        (f.left -= u - d),
        (f.right -= u - d),
        (f.marginTop = h),
        (f.marginLeft = d);
    }
    return (
      (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) &&
        (f = (function (e, t) {
          var n =
              2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Be(t, "top"),
            r = Be(t, "left"),
            o = n ? -1 : 1;
          return (
            (e.top += i * o),
            (e.bottom += i * o),
            (e.left += r * o),
            (e.right += r * o),
            e
          );
        })(f, t)),
      f
    );
  }
  function Xe(e) {
    if (!e || !e.parentElement || Fe()) return document.documentElement;
    for (var t = e.parentElement; t && "none" === Pe(t, "transform"); )
      t = t.parentElement;
    return t || document.documentElement;
  }
  function $e(e, t, n, i) {
    var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      o = { top: 0, left: 0 },
      s = r ? Xe(e) : Ue(e, t);
    if ("viewport" === i)
      o = (function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = Ze(e, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : Be(n),
          a = t ? 0 : Be(n, "left");
        return Ge({
          top: s - i.top + i.marginTop,
          left: a - i.left + i.marginLeft,
          width: r,
          height: o,
        });
      })(s, r);
    else {
      var a = void 0;
      "scrollParent" === i
        ? "BODY" === (a = je(Le(t))).nodeName &&
          (a = e.ownerDocument.documentElement)
        : (a = "window" === i ? e.ownerDocument.documentElement : i);
      var l = Ze(a, s, r);
      if (
        "HTML" !== a.nodeName ||
        (function e(t) {
          var n = t.nodeName;
          return (
            "BODY" !== n &&
            "HTML" !== n &&
            ("fixed" === Pe(t, "position") || e(Le(t)))
          );
        })(s)
      )
        o = l;
      else {
        var c = Qe(),
          u = c.height,
          f = c.width;
        (o.top += l.top - l.marginTop),
          (o.bottom = u + l.top),
          (o.left += l.left - l.marginLeft),
          (o.right = f + l.left);
      }
    }
    return (o.left += n), (o.top += n), (o.right -= n), (o.bottom -= n), o;
  }
  function et(e, t, i, n, r) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var s = $e(i, n, o, r),
      a = {
        top: { width: s.width, height: t.top - s.top },
        right: { width: s.right - t.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - t.bottom },
        left: { width: t.left - s.left, height: s.height },
      },
      l = Object.keys(a)
        .map(function (e) {
          return ze({ key: e }, a[e], {
            area: ((t = a[e]), t.width * t.height),
          });
          var t;
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      c = l.filter(function (e) {
        var t = e.width,
          n = e.height;
        return t >= i.clientWidth && n >= i.clientHeight;
      }),
      u = 0 < c.length ? c[0].key : l[0].key,
      f = e.split("-")[1];
    return u + (f ? "-" + f : "");
  }
  function tt(e, t, n) {
    var i =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return Ze(n, i ? Xe(t) : Ue(t, n), i);
  }
  function nt(e) {
    var t = getComputedStyle(e),
      n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    return { width: e.offsetWidth + i, height: e.offsetHeight + n };
  }
  function it(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function rt(e, t, n) {
    n = n.split("-")[0];
    var i = nt(e),
      r = { width: i.width, height: i.height },
      o = -1 !== ["right", "left"].indexOf(n),
      s = o ? "top" : "left",
      a = o ? "left" : "top",
      l = o ? "height" : "width",
      c = o ? "width" : "height";
    return (
      (r[s] = t[s] + t[l] / 2 - i[l] / 2),
      (r[a] = n === a ? t[a] - i[c] : t[it(a)]),
      r
    );
  }
  function ot(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function st(e, n, t) {
    return (
      (void 0 === t
        ? e
        : e.slice(
            0,
            (function (e, t, n) {
              if (Array.prototype.findIndex)
                return e.findIndex(function (e) {
                  return e[t] === n;
                });
              var i = ot(e, function (e) {
                return e[t] === n;
              });
              return e.indexOf(i);
            })(e, "name", t)
          )
      ).forEach(function (e) {
        e.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var t = e.function || e.fn;
        e.enabled &&
          xe(t) &&
          ((n.offsets.popper = Ge(n.offsets.popper)),
          (n.offsets.reference = Ge(n.offsets.reference)),
          (n = t(n, e)));
      }),
      n
    );
  }
  function at(e, n) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === n;
    });
  }
  function lt(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        n = e.charAt(0).toUpperCase() + e.slice(1),
        i = 0;
      i < t.length;
      i++
    ) {
      var r = t[i],
        o = r ? "" + r + n : e;
      if ("undefined" != typeof document.body.style[o]) return o;
    }
    return null;
  }
  function ct(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function ut(e, t, n, i) {
    (n.updateBound = i),
      ct(e).addEventListener("resize", n.updateBound, { passive: !0 });
    var r = je(e);
    return (
      (function e(t, n, i, r) {
        var o = "BODY" === t.nodeName,
          s = o ? t.ownerDocument.defaultView : t;
        s.addEventListener(n, i, { passive: !0 }),
          o || e(je(s.parentNode), n, i, r),
          r.push(s);
      })(r, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = r),
      (n.eventsEnabled = !0),
      n
    );
  }
  function ft() {
    var e, t;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((e = this.reference),
        (t = this.state),
        ct(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t)));
  }
  function ht(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function dt(n, i) {
    Object.keys(i).forEach(function (e) {
      var t = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) &&
        ht(i[e]) &&
        (t = "px"),
        (n.style[e] = i[e] + t);
    });
  }
  function pt(e, t, n) {
    var i = ot(e, function (e) {
        return e.name === t;
      }),
      r =
        !!i &&
        e.some(function (e) {
          return e.name === n && e.enabled && e.order < i.order;
        });
    if (!r) {
      var o = "`" + t + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          o +
          " modifier in order to work, be sure to include it before " +
          o +
          "!"
      );
    }
    return r;
  }
  var mt = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    gt = mt.slice(3);
  function _t(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      n = gt.indexOf(e),
      i = gt.slice(n + 1).concat(gt.slice(0, n));
    return t ? i.reverse() : i;
  }
  var vt = "flip",
    yt = "clockwise",
    Et = "counterclockwise";
  function bt(e, r, o, t) {
    var s = [0, 0],
      a = -1 !== ["right", "left"].indexOf(t),
      n = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      i = n.indexOf(
        ot(n, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    n[i] &&
      -1 === n[i].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== i
          ? [
              n.slice(0, i).concat([n[i].split(l)[0]]),
              [n[i].split(l)[1]].concat(n.slice(i + 1)),
            ]
          : [n];
    return (
      (c = c.map(function (e, t) {
        var n = (1 === t ? !a : a) ? "height" : "width",
          i = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (i = !0), e)
              : i
              ? ((e[e.length - 1] += t), (i = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return (function (e, t, n, i) {
              var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +r[1],
                s = r[2];
              if (!o) return e;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i;
                }
                return (Ge(a)[t] / 100) * o;
              }
              if ("vh" === s || "vw" === s)
                return (
                  (("vh" === s
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  o
                );
              return o;
            })(e, n, r, o);
          });
      })).forEach(function (n, i) {
        n.forEach(function (e, t) {
          ht(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1));
        });
      }),
      s
    );
  }
  var wt = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];
            if (i) {
              var r = e.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = {
                  start: Ve({}, l, o[l]),
                  end: Ve({}, l, o[l] + o[c] - s[c]),
                };
              e.offsets.popper = ze({}, s, u[i]);
            }
            return e;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (e, t) {
            var n = t.offset,
              i = e.placement,
              r = e.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = ht(+n) ? [+n, 0] : bt(n, o, s, a)),
              "left" === a
                ? ((o.top += l[0]), (o.left -= l[1]))
                : "right" === a
                ? ((o.top += l[0]), (o.left += l[1]))
                : "top" === a
                ? ((o.left += l[0]), (o.top -= l[1]))
                : "bottom" === a && ((o.left += l[0]), (o.top += l[1])),
              (e.popper = o),
              e
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, i) {
            var t = i.boundariesElement || We(e.instance.popper);
            e.instance.reference === t && (t = We(t));
            var n = lt("transform"),
              r = e.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[n];
            (r.top = ""), (r.left = ""), (r[n] = "");
            var l = $e(
              e.instance.popper,
              e.instance.reference,
              i.padding,
              t,
              e.positionFixed
            );
            (r.top = o), (r.left = s), (r[n] = a), (i.boundaries = l);
            var c = i.priority,
              u = e.offsets.popper,
              f = {
                primary: function (e) {
                  var t = u[e];
                  return (
                    u[e] < l[e] &&
                      !i.escapeWithReference &&
                      (t = Math.max(u[e], l[e])),
                    Ve({}, e, t)
                  );
                },
                secondary: function (e) {
                  var t = "right" === e ? "left" : "top",
                    n = u[t];
                  return (
                    u[e] > l[e] &&
                      !i.escapeWithReference &&
                      (n = Math.min(
                        u[t],
                        l[e] - ("right" === e ? u.width : u.height)
                      )),
                    Ve({}, t, n)
                  );
                },
              };
            return (
              c.forEach(function (e) {
                var t =
                  -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                u = ze({}, u, f[t](e));
              }),
              (e.offsets.popper = u),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              n = t.popper,
              i = t.reference,
              r = e.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
              n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, t) {
            var n;
            if (!pt(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var i = t.element;
            if ("string" == typeof i) {
              if (!(i = e.instance.popper.querySelector(i))) return e;
            } else if (!e.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var r = e.placement.split("-")[0],
              o = e.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              u = l ? "Top" : "Left",
              f = u.toLowerCase(),
              h = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = nt(i)[c];
            a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)),
              a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]),
              (e.offsets.popper = Ge(e.offsets.popper));
            var m = a[f] + a[c] / 2 - p / 2,
              g = Pe(e.instance.popper),
              _ = parseFloat(g["margin" + u], 10),
              v = parseFloat(g["border" + u + "Width"], 10),
              y = m - e.offsets.popper[f] - _ - v;
            return (
              (y = Math.max(Math.min(s[c] - p, y), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow =
                (Ve((n = {}), f, Math.round(y)), Ve(n, h, ""), n)),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (p, m) {
            if (at(p.instance.modifiers, "inner")) return p;
            if (p.flipped && p.placement === p.originalPlacement) return p;
            var g = $e(
                p.instance.popper,
                p.instance.reference,
                m.padding,
                m.boundariesElement,
                p.positionFixed
              ),
              _ = p.placement.split("-")[0],
              v = it(_),
              y = p.placement.split("-")[1] || "",
              E = [];
            switch (m.behavior) {
              case vt:
                E = [_, v];
                break;
              case yt:
                E = _t(_);
                break;
              case Et:
                E = _t(_, !0);
                break;
              default:
                E = m.behavior;
            }
            return (
              E.forEach(function (e, t) {
                if (_ !== e || E.length === t + 1) return p;
                (_ = p.placement.split("-")[0]), (v = it(_));
                var n,
                  i = p.offsets.popper,
                  r = p.offsets.reference,
                  o = Math.floor,
                  s =
                    ("left" === _ && o(i.right) > o(r.left)) ||
                    ("right" === _ && o(i.left) < o(r.right)) ||
                    ("top" === _ && o(i.bottom) > o(r.top)) ||
                    ("bottom" === _ && o(i.top) < o(r.bottom)),
                  a = o(i.left) < o(g.left),
                  l = o(i.right) > o(g.right),
                  c = o(i.top) < o(g.top),
                  u = o(i.bottom) > o(g.bottom),
                  f =
                    ("left" === _ && a) ||
                    ("right" === _ && l) ||
                    ("top" === _ && c) ||
                    ("bottom" === _ && u),
                  h = -1 !== ["top", "bottom"].indexOf(_),
                  d =
                    !!m.flipVariations &&
                    ((h && "start" === y && a) ||
                      (h && "end" === y && l) ||
                      (!h && "start" === y && c) ||
                      (!h && "end" === y && u));
                (s || f || d) &&
                  ((p.flipped = !0),
                  (s || f) && (_ = E[t + 1]),
                  d &&
                    (y =
                      "end" === (n = y) ? "start" : "start" === n ? "end" : n),
                  (p.placement = _ + (y ? "-" + y : "")),
                  (p.offsets.popper = ze(
                    {},
                    p.offsets.popper,
                    rt(p.instance.popper, p.offsets.reference, p.placement)
                  )),
                  (p = st(p.instance.modifiers, p, "flip")));
              }),
              p
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (r[s ? "left" : "top"] =
                o[n] - (a ? r[s ? "width" : "height"] : 0)),
              (e.placement = it(t)),
              (e.offsets.popper = Ge(r)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!pt(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              n = ot(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < n.top ||
              t.left > n.right ||
              t.top > n.bottom ||
              t.right < n.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var n = t.x,
              i = t.y,
              r = e.offsets.popper,
              o = ot(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== o &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s = void 0 !== o ? o : t.gpuAcceleration,
              a = Je(We(e.instance.popper)),
              l = { position: r.position },
              c = {
                left: Math.floor(r.left),
                top: Math.round(r.top),
                bottom: Math.round(r.bottom),
                right: Math.floor(r.right),
              },
              u = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              h = lt("transform"),
              d = void 0,
              p = void 0;
            if (
              ((p = "bottom" === u ? -a.height + c.bottom : c.top),
              (d = "right" === f ? -a.width + c.right : c.left),
              s && h)
            )
              (l[h] = "translate3d(" + d + "px, " + p + "px, 0)"),
                (l[u] = 0),
                (l[f] = 0),
                (l.willChange = "transform");
            else {
              var m = "bottom" === u ? -1 : 1,
                g = "right" === f ? -1 : 1;
              (l[u] = p * m), (l[f] = d * g), (l.willChange = u + ", " + f);
            }
            var _ = { "x-placement": e.placement };
            return (
              (e.attributes = ze({}, _, e.attributes)),
              (e.styles = ze({}, l, e.styles)),
              (e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            var t, n;
            return (
              dt(e.instance.popper, e.styles),
              (t = e.instance.popper),
              (n = e.attributes),
              Object.keys(n).forEach(function (e) {
                !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
              }),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                dt(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, n, i, r) {
            var o = tt(r, t, e, n.positionFixed),
              s = et(
                n.placement,
                o,
                t,
                e,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", s),
              dt(t, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    Ct = (function () {
      function o(e, t) {
        var n = this,
          i =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, o),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update);
          }),
          (this.update = ke(this.update.bind(this))),
          (this.options = ze({}, o.Defaults, i)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = t && t.jquery ? t[0] : t),
          (this.options.modifiers = {}),
          Object.keys(ze({}, o.Defaults.modifiers, i.modifiers)).forEach(
            function (e) {
              n.options.modifiers[e] = ze(
                {},
                o.Defaults.modifiers[e] || {},
                i.modifiers ? i.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return ze({ name: e }, n.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (e) {
            e.enabled &&
              xe(e.onLoad) &&
              e.onLoad(n.reference, n.popper, n.options, e, n.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        Ye(o, [
          {
            key: "update",
            value: function () {
              return function () {
                if (!this.state.isDestroyed) {
                  var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                  };
                  (e.offsets.reference = tt(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed
                  )),
                    (e.placement = et(
                      this.options.placement,
                      e.offsets.reference,
                      this.popper,
                      this.reference,
                      this.options.modifiers.flip.boundariesElement,
                      this.options.modifiers.flip.padding
                    )),
                    (e.originalPlacement = e.placement),
                    (e.positionFixed = this.options.positionFixed),
                    (e.offsets.popper = rt(
                      this.popper,
                      e.offsets.reference,
                      e.placement
                    )),
                    (e.offsets.popper.position = this.options.positionFixed
                      ? "fixed"
                      : "absolute"),
                    (e = st(this.modifiers, e)),
                    this.state.isCreated
                      ? this.options.onUpdate(e)
                      : ((this.state.isCreated = !0), this.options.onCreate(e));
                }
              }.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return function () {
                return (
                  (this.state.isDestroyed = !0),
                  at(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style.left = ""),
                    (this.popper.style.right = ""),
                    (this.popper.style.bottom = ""),
                    (this.popper.style.willChange = ""),
                    (this.popper.style[lt("transform")] = "")),
                  this.disableEventListeners(),
                  this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                  this
                );
              }.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return function () {
                this.state.eventsEnabled ||
                  (this.state = ut(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                  ));
              }.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return ft.call(this);
            },
          },
        ]),
        o
      );
    })();
  (Ct.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (Ct.placements = mt),
    (Ct.Defaults = wt);
  var Tt,
    St,
    Dt,
    At,
    It,
    Ot,
    Nt,
    kt,
    xt,
    Pt,
    Lt,
    jt,
    Ht,
    Mt,
    Ft,
    Wt,
    Rt,
    Ut,
    Bt,
    qt,
    Kt,
    Qt,
    Yt,
    Vt,
    zt,
    Gt,
    Jt,
    Zt,
    Xt,
    $t,
    en,
    tn,
    nn,
    rn,
    on,
    sn,
    an,
    ln,
    cn,
    un,
    fn,
    hn,
    dn,
    pn,
    mn,
    gn,
    _n,
    vn,
    yn,
    En,
    bn,
    wn,
    Cn,
    Tn,
    Sn,
    Dn,
    An,
    In,
    On,
    Nn,
    kn,
    xn,
    Pn,
    Ln,
    jn,
    Hn,
    Mn,
    Fn,
    Wn,
    Rn,
    Un,
    Bn,
    qn,
    Kn,
    Qn,
    Yn,
    Vn,
    zn,
    Gn,
    Jn,
    Zn,
    Xn,
    $n,
    ei,
    ti,
    ni,
    ii,
    ri,
    oi,
    si,
    ai,
    li,
    ci,
    ui,
    fi,
    hi,
    di,
    pi,
    mi,
    gi,
    _i,
    vi,
    yi,
    Ei,
    bi,
    wi,
    Ci,
    Ti,
    Si,
    Di,
    Ai,
    Ii,
    Oi,
    Ni,
    ki,
    xi,
    Pi,
    Li,
    ji,
    Hi,
    Mi,
    Fi,
    Wi,
    Ri,
    Ui,
    Bi =
      ((St = "dropdown"),
      (At = "." + (Dt = "bs.dropdown")),
      (It = ".data-api"),
      (Ot = (Tt = t).fn[St]),
      (Nt = new RegExp("38|40|27")),
      (kt = {
        HIDE: "hide" + At,
        HIDDEN: "hidden" + At,
        SHOW: "show" + At,
        SHOWN: "shown" + At,
        CLICK: "click" + At,
        CLICK_DATA_API: "click" + At + It,
        KEYDOWN_DATA_API: "keydown" + At + It,
        KEYUP_DATA_API: "keyup" + At + It,
      }),
      (xt = "disabled"),
      (Pt = "show"),
      (Lt = "dropup"),
      (jt = "dropright"),
      (Ht = "dropleft"),
      (Mt = "dropdown-menu-right"),
      (Ft = "position-static"),
      (Wt = '[data-toggle="dropdown"]'),
      (Rt = ".dropdown form"),
      (Ut = ".dropdown-menu"),
      (Bt = ".navbar-nav"),
      (qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
      (Kt = "top-start"),
      (Qt = "top-end"),
      (Yt = "bottom-start"),
      (Vt = "bottom-end"),
      (zt = "right-start"),
      (Gt = "left-start"),
      (Jt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
      }),
      (Zt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
      }),
      (Xt = (function () {
        function c(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var e = c.prototype;
        return (
          (e.toggle = function () {
            if (!this._element.disabled && !Tt(this._element).hasClass(xt)) {
              var e = c._getParentFromElement(this._element),
                t = Tt(this._menu).hasClass(Pt);
              if ((c._clearMenus(), !t)) {
                var n = { relatedTarget: this._element },
                  i = Tt.Event(kt.SHOW, n);
                if ((Tt(e).trigger(i), !i.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if ("undefined" == typeof Ct)
                      throw new TypeError(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                      );
                    var r = this._element;
                    "parent" === this._config.reference
                      ? (r = e)
                      : we.isElement(this._config.reference) &&
                        ((r = this._config.reference),
                        "undefined" != typeof this._config.reference.jquery &&
                          (r = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        Tt(e).addClass(Ft),
                      (this._popper = new Ct(
                        r,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === Tt(e).closest(Bt).length &&
                    Tt(document.body).children().on("mouseover", null, Tt.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    Tt(this._menu).toggleClass(Pt),
                    Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN, n));
                }
              }
            }
          }),
          (e.dispose = function () {
            Tt.removeData(this._element, Dt),
              Tt(this._element).off(At),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (e.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e._addEventListeners = function () {
            var t = this;
            Tt(this._element).on(kt.CLICK, function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (e._getConfig = function (e) {
            return (
              (e = l(
                {},
                this.constructor.Default,
                Tt(this._element).data(),
                e
              )),
              we.typeCheckConfig(St, e, this.constructor.DefaultType),
              e
            );
          }),
          (e._getMenuElement = function () {
            if (!this._menu) {
              var e = c._getParentFromElement(this._element);
              e && (this._menu = e.querySelector(Ut));
            }
            return this._menu;
          }),
          (e._getPlacement = function () {
            var e = Tt(this._element.parentNode),
              t = Yt;
            return (
              e.hasClass(Lt)
                ? ((t = Kt), Tt(this._menu).hasClass(Mt) && (t = Qt))
                : e.hasClass(jt)
                ? (t = zt)
                : e.hasClass(Ht)
                ? (t = Gt)
                : Tt(this._menu).hasClass(Mt) && (t = Vt),
              t
            );
          }),
          (e._detectNavbar = function () {
            return 0 < Tt(this._element).closest(".navbar").length;
          }),
          (e._getPopperConfig = function () {
            var t = this,
              e = {};
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = l(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset);
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: e,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (n.modifiers.applyStyle = { enabled: !1 }),
              n
            );
          }),
          (c._jQueryInterface = function (t) {
            return this.each(function () {
              var e = Tt(this).data(Dt);
              if (
                (e ||
                  ((e = new c(this, "object" == typeof t ? t : null)),
                  Tt(this).data(Dt, e)),
                "string" == typeof t)
              ) {
                if ("undefined" == typeof e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          (c._clearMenus = function (e) {
            if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
              for (
                var t = [].slice.call(document.querySelectorAll(Wt)),
                  n = 0,
                  i = t.length;
                n < i;
                n++
              ) {
                var r = c._getParentFromElement(t[n]),
                  o = Tt(t[n]).data(Dt),
                  s = { relatedTarget: t[n] };
                if ((e && "click" === e.type && (s.clickEvent = e), o)) {
                  var a = o._menu;
                  if (
                    Tt(r).hasClass(Pt) &&
                    !(
                      e &&
                      (("click" === e.type &&
                        /input|textarea/i.test(e.target.tagName)) ||
                        ("keyup" === e.type && 9 === e.which)) &&
                      Tt.contains(r, e.target)
                    )
                  ) {
                    var l = Tt.Event(kt.HIDE, s);
                    Tt(r).trigger(l),
                      l.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          Tt(document.body)
                            .children()
                            .off("mouseover", null, Tt.noop),
                        t[n].setAttribute("aria-expanded", "false"),
                        Tt(a).removeClass(Pt),
                        Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN, s)));
                  }
                }
              }
          }),
          (c._getParentFromElement = function (e) {
            var t,
              n = we.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (c._dataApiKeydownHandler = function (e) {
            if (
              (/input|textarea/i.test(e.target.tagName)
                ? !(
                    32 === e.which ||
                    (27 !== e.which &&
                      ((40 !== e.which && 38 !== e.which) ||
                        Tt(e.target).closest(Ut).length))
                  )
                : Nt.test(e.which)) &&
              (e.preventDefault(),
              e.stopPropagation(),
              !this.disabled && !Tt(this).hasClass(xt))
            ) {
              var t = c._getParentFromElement(this),
                n = Tt(t).hasClass(Pt);
              if (
                (n || (27 === e.which && 32 === e.which)) &&
                (!n || (27 !== e.which && 32 !== e.which))
              ) {
                var i = [].slice.call(t.querySelectorAll(qt));
                if (0 !== i.length) {
                  var r = i.indexOf(e.target);
                  38 === e.which && 0 < r && r--,
                    40 === e.which && r < i.length - 1 && r++,
                    r < 0 && (r = 0),
                    i[r].focus();
                }
              } else {
                if (27 === e.which) {
                  var o = t.querySelector(Wt);
                  Tt(o).trigger("focus");
                }
                Tt(this).trigger("click");
              }
            }
          }),
          s(c, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Jt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Zt;
              },
            },
          ]),
          c
        );
      })()),
      Tt(document)
        .on(kt.KEYDOWN_DATA_API, Wt, Xt._dataApiKeydownHandler)
        .on(kt.KEYDOWN_DATA_API, Ut, Xt._dataApiKeydownHandler)
        .on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Xt._clearMenus)
        .on(kt.CLICK_DATA_API, Wt, function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            Xt._jQueryInterface.call(Tt(this), "toggle");
        })
        .on(kt.CLICK_DATA_API, Rt, function (e) {
          e.stopPropagation();
        }),
      (Tt.fn[St] = Xt._jQueryInterface),
      (Tt.fn[St].Constructor = Xt),
      (Tt.fn[St].noConflict = function () {
        return (Tt.fn[St] = Ot), Xt._jQueryInterface;
      }),
      Xt),
    qi =
      ((en = "modal"),
      (nn = "." + (tn = "bs.modal")),
      (rn = ($t = t).fn[en]),
      (on = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (sn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      }),
      (an = {
        HIDE: "hide" + nn,
        HIDDEN: "hidden" + nn,
        SHOW: "show" + nn,
        SHOWN: "shown" + nn,
        FOCUSIN: "focusin" + nn,
        RESIZE: "resize" + nn,
        CLICK_DISMISS: "click.dismiss" + nn,
        KEYDOWN_DISMISS: "keydown.dismiss" + nn,
        MOUSEUP_DISMISS: "mouseup.dismiss" + nn,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + nn,
        CLICK_DATA_API: "click" + nn + ".data-api",
      }),
      (ln = "modal-scrollbar-measure"),
      (cn = "modal-backdrop"),
      (un = "modal-open"),
      (fn = "fade"),
      (hn = "show"),
      (dn = ".modal-dialog"),
      (pn = '[data-toggle="modal"]'),
      (mn = '[data-dismiss="modal"]'),
      (gn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
      (_n = ".sticky-top"),
      (vn = (function () {
        function r(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(dn)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var e = r.prototype;
        return (
          (e.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (e.show = function (e) {
            var t = this;
            if (!this._isTransitioning && !this._isShown) {
              $t(this._element).hasClass(fn) && (this._isTransitioning = !0);
              var n = $t.Event(an.SHOW, { relatedTarget: e });
              $t(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  $t(document.body).addClass(un),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(this._element).on(an.CLICK_DISMISS, mn, function (e) {
                    return t.hide(e);
                  }),
                  $t(this._dialog).on(an.MOUSEDOWN_DISMISS, function () {
                    $t(t._element).one(an.MOUSEUP_DISMISS, function (e) {
                      $t(e.target).is(t._element) &&
                        (t._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return t._showElement(e);
                  }));
            }
          }),
          (e.hide = function (e) {
            var t = this;
            if (
              (e && e.preventDefault(), !this._isTransitioning && this._isShown)
            ) {
              var n = $t.Event(an.HIDE);
              if (
                ($t(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = $t(this._element).hasClass(fn);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(document).off(an.FOCUSIN),
                  $t(this._element).removeClass(hn),
                  $t(this._element).off(an.CLICK_DISMISS),
                  $t(this._dialog).off(an.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var r = we.getTransitionDurationFromElement(this._element);
                  $t(this._element)
                    .one(we.TRANSITION_END, function (e) {
                      return t._hideModal(e);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (e.dispose = function () {
            $t.removeData(this._element, tn),
              $t(window, document, this._element, this._backdrop).off(nn),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (e.handleUpdate = function () {
            this._adjustDialog();
          }),
          (e._getConfig = function (e) {
            return (e = l({}, on, e)), we.typeCheckConfig(en, e, sn), e;
          }),
          (e._showElement = function (e) {
            var t = this,
              n = $t(this._element).hasClass(fn);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              (this._element.scrollTop = 0),
              n && we.reflow(this._element),
              $t(this._element).addClass(hn),
              this._config.focus && this._enforceFocus();
            var i = $t.Event(an.SHOWN, { relatedTarget: e }),
              r = function () {
                t._config.focus && t._element.focus(),
                  (t._isTransitioning = !1),
                  $t(t._element).trigger(i);
              };
            if (n) {
              var o = we.getTransitionDurationFromElement(this._element);
              $t(this._dialog)
                .one(we.TRANSITION_END, r)
                .emulateTransitionEnd(o);
            } else r();
          }),
          (e._enforceFocus = function () {
            var t = this;
            $t(document)
              .off(an.FOCUSIN)
              .on(an.FOCUSIN, function (e) {
                document !== e.target &&
                  t._element !== e.target &&
                  0 === $t(t._element).has(e.target).length &&
                  t._element.focus();
              });
          }),
          (e._setEscapeEvent = function () {
            var t = this;
            this._isShown && this._config.keyboard
              ? $t(this._element).on(an.KEYDOWN_DISMISS, function (e) {
                  27 === e.which && (e.preventDefault(), t.hide());
                })
              : this._isShown || $t(this._element).off(an.KEYDOWN_DISMISS);
          }),
          (e._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? $t(window).on(an.RESIZE, function (e) {
                  return t.handleUpdate(e);
                })
              : $t(window).off(an.RESIZE);
          }),
          (e._hideModal = function () {
            var e = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                $t(document.body).removeClass(un),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  $t(e._element).trigger(an.HIDDEN);
              });
          }),
          (e._removeBackdrop = function () {
            this._backdrop &&
              ($t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (e._showBackdrop = function (e) {
            var t = this,
              n = $t(this._element).hasClass(fn) ? fn : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = cn),
                n && this._backdrop.classList.add(n),
                $t(this._backdrop).appendTo(document.body),
                $t(this._element).on(an.CLICK_DISMISS, function (e) {
                  t._ignoreBackdropClick
                    ? (t._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      ("static" === t._config.backdrop
                        ? t._element.focus()
                        : t.hide());
                }),
                n && we.reflow(this._backdrop),
                $t(this._backdrop).addClass(hn),
                !e)
              )
                return;
              if (!n) return void e();
              var i = we.getTransitionDurationFromElement(this._backdrop);
              $t(this._backdrop)
                .one(we.TRANSITION_END, e)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              $t(this._backdrop).removeClass(hn);
              var r = function () {
                t._removeBackdrop(), e && e();
              };
              if ($t(this._element).hasClass(fn)) {
                var o = we.getTransitionDurationFromElement(this._backdrop);
                $t(this._backdrop)
                  .one(we.TRANSITION_END, r)
                  .emulateTransitionEnd(o);
              } else r();
            } else e && e();
          }),
          (e._adjustDialog = function () {
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              e &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !e &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (e._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (e._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (e._setScrollbar = function () {
            var r = this;
            if (this._isBodyOverflowing) {
              var e = [].slice.call(document.querySelectorAll(gn)),
                t = [].slice.call(document.querySelectorAll(_n));
              $t(e).each(function (e, t) {
                var n = t.style.paddingRight,
                  i = $t(t).css("padding-right");
                $t(t)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + r._scrollbarWidth + "px"
                  );
              }),
                $t(t).each(function (e, t) {
                  var n = t.style.marginRight,
                    i = $t(t).css("margin-right");
                  $t(t)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) - r._scrollbarWidth + "px"
                    );
                });
              var n = document.body.style.paddingRight,
                i = $t(document.body).css("padding-right");
              $t(document.body)
                .data("padding-right", n)
                .css(
                  "padding-right",
                  parseFloat(i) + this._scrollbarWidth + "px"
                );
            }
          }),
          (e._resetScrollbar = function () {
            var e = [].slice.call(document.querySelectorAll(gn));
            $t(e).each(function (e, t) {
              var n = $t(t).data("padding-right");
              $t(t).removeData("padding-right"),
                (t.style.paddingRight = n || "");
            });
            var t = [].slice.call(document.querySelectorAll("" + _n));
            $t(t).each(function (e, t) {
              var n = $t(t).data("margin-right");
              "undefined" != typeof n &&
                $t(t).css("margin-right", n).removeData("margin-right");
            });
            var n = $t(document.body).data("padding-right");
            $t(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = n || "");
          }),
          (e._getScrollbarWidth = function () {
            var e = document.createElement("div");
            (e.className = ln), document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (r._jQueryInterface = function (n, i) {
            return this.each(function () {
              var e = $t(this).data(tn),
                t = l(
                  {},
                  on,
                  $t(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (e || ((e = new r(this, t)), $t(this).data(tn, e)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n](i);
              } else t.show && e.show(i);
            });
          }),
          s(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return on;
              },
            },
          ]),
          r
        );
      })()),
      $t(document).on(an.CLICK_DATA_API, pn, function (e) {
        var t,
          n = this,
          i = we.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = $t(t).data(tn)
          ? "toggle"
          : l({}, $t(t).data(), $t(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
        var o = $t(t).one(an.SHOW, function (e) {
          e.isDefaultPrevented() ||
            o.one(an.HIDDEN, function () {
              $t(n).is(":visible") && n.focus();
            });
        });
        vn._jQueryInterface.call($t(t), r, this);
      }),
      ($t.fn[en] = vn._jQueryInterface),
      ($t.fn[en].Constructor = vn),
      ($t.fn[en].noConflict = function () {
        return ($t.fn[en] = rn), vn._jQueryInterface;
      }),
      vn),
    Ki =
      ((En = "tooltip"),
      (wn = "." + (bn = "bs.tooltip")),
      (Cn = (yn = t).fn[En]),
      (Tn = "bs-tooltip"),
      (Sn = new RegExp("(^|\\s)" + Tn + "\\S+", "g")),
      (In = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(An = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        }),
        selector: !(Dn = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
      }),
      (Nn = "out"),
      (kn = {
        HIDE: "hide" + wn,
        HIDDEN: "hidden" + wn,
        SHOW: (On = "show") + wn,
        SHOWN: "shown" + wn,
        INSERTED: "inserted" + wn,
        CLICK: "click" + wn,
        FOCUSIN: "focusin" + wn,
        FOCUSOUT: "focusout" + wn,
        MOUSEENTER: "mouseenter" + wn,
        MOUSELEAVE: "mouseleave" + wn,
      }),
      (xn = "fade"),
      (Pn = "show"),
      (Ln = ".tooltip-inner"),
      (jn = ".arrow"),
      (Hn = "hover"),
      (Mn = "focus"),
      (Fn = "click"),
      (Wn = "manual"),
      (Rn = (function () {
        function i(e, t) {
          if ("undefined" == typeof Ct)
            throw new TypeError(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var e = i.prototype;
        return (
          (e.enable = function () {
            this._isEnabled = !0;
          }),
          (e.disable = function () {
            this._isEnabled = !1;
          }),
          (e.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (e.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var t = this.constructor.DATA_KEY,
                  n = yn(e.currentTarget).data(t);
                n ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  yn(e.currentTarget).data(t, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (yn(this.getTipElement()).hasClass(Pn))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (e.dispose = function () {
            clearTimeout(this._timeout),
              yn.removeData(this.element, this.constructor.DATA_KEY),
              yn(this.element).off(this.constructor.EVENT_KEY),
              yn(this.element).closest(".modal").off("hide.bs.modal"),
              this.tip && yn(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (e.show = function () {
            var t = this;
            if ("none" === yn(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var e = yn.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              yn(this.element).trigger(e);
              var n = yn.contains(
                this.element.ownerDocument.documentElement,
                this.element
              );
              if (e.isDefaultPrevented() || !n) return;
              var i = this.getTipElement(),
                r = we.getUID(this.constructor.NAME);
              i.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && yn(i).addClass(xn);
              var o =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement,
                s = this._getAttachment(o);
              this.addAttachmentClass(s);
              var a =
                !1 === this.config.container
                  ? document.body
                  : yn(document).find(this.config.container);
              yn(i).data(this.constructor.DATA_KEY, this),
                yn.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || yn(i).appendTo(a),
                yn(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new Ct(this.element, i, {
                  placement: s,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: jn },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (e) {
                    e.originalPlacement !== e.placement &&
                      t._handlePopperPlacementChange(e);
                  },
                  onUpdate: function (e) {
                    t._handlePopperPlacementChange(e);
                  },
                })),
                yn(i).addClass(Pn),
                "ontouchstart" in document.documentElement &&
                  yn(document.body).children().on("mouseover", null, yn.noop);
              var l = function () {
                t.config.animation && t._fixTransition();
                var e = t._hoverState;
                (t._hoverState = null),
                  yn(t.element).trigger(t.constructor.Event.SHOWN),
                  e === Nn && t._leave(null, t);
              };
              if (yn(this.tip).hasClass(xn)) {
                var c = we.getTransitionDurationFromElement(this.tip);
                yn(this.tip).one(we.TRANSITION_END, l).emulateTransitionEnd(c);
              } else l();
            }
          }),
          (e.hide = function (e) {
            var t = this,
              n = this.getTipElement(),
              i = yn.Event(this.constructor.Event.HIDE),
              r = function () {
                t._hoverState !== On &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  t._cleanTipClass(),
                  t.element.removeAttribute("aria-describedby"),
                  yn(t.element).trigger(t.constructor.Event.HIDDEN),
                  null !== t._popper && t._popper.destroy(),
                  e && e();
              };
            if ((yn(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (yn(n).removeClass(Pn),
                "ontouchstart" in document.documentElement &&
                  yn(document.body).children().off("mouseover", null, yn.noop),
                (this._activeTrigger[Fn] = !1),
                (this._activeTrigger[Mn] = !1),
                (this._activeTrigger[Hn] = !1),
                yn(this.tip).hasClass(xn))
              ) {
                var o = we.getTransitionDurationFromElement(n);
                yn(n).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
              } else r();
              this._hoverState = "";
            }
          }),
          (e.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (e.addAttachmentClass = function (e) {
            yn(this.getTipElement()).addClass(Tn + "-" + e);
          }),
          (e.getTipElement = function () {
            return (
              (this.tip = this.tip || yn(this.config.template)[0]), this.tip
            );
          }),
          (e.setContent = function () {
            var e = this.getTipElement();
            this.setElementContent(yn(e.querySelectorAll(Ln)), this.getTitle()),
              yn(e).removeClass(xn + " " + Pn);
          }),
          (e.setElementContent = function (e, t) {
            var n = this.config.html;
            "object" == typeof t && (t.nodeType || t.jquery)
              ? n
                ? yn(t).parent().is(e) || e.empty().append(t)
                : e.text(yn(t).text())
              : e[n ? "html" : "text"](t);
          }),
          (e.getTitle = function () {
            var e = this.element.getAttribute("data-original-title");
            return (
              e ||
                (e =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              e
            );
          }),
          (e._getAttachment = function (e) {
            return An[e.toUpperCase()];
          }),
          (e._setListeners = function () {
            var i = this;
            this.config.trigger.split(" ").forEach(function (e) {
              if ("click" === e)
                yn(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function (e) {
                    return i.toggle(e);
                  }
                );
              else if (e !== Wn) {
                var t =
                    e === Hn
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    e === Hn
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT;
                yn(i.element)
                  .on(t, i.config.selector, function (e) {
                    return i._enter(e);
                  })
                  .on(n, i.config.selector, function (e) {
                    return i._leave(e);
                  });
              }
              yn(i.element)
                .closest(".modal")
                .on("hide.bs.modal", function () {
                  return i.hide();
                });
            }),
              this.config.selector
                ? (this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (e._fixTitle = function () {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (e._enter = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || yn(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              yn(e.currentTarget).data(n, t)),
              e && (t._activeTrigger["focusin" === e.type ? Mn : Hn] = !0),
              yn(t.getTipElement()).hasClass(Pn) || t._hoverState === On
                ? (t._hoverState = On)
                : (clearTimeout(t._timeout),
                  (t._hoverState = On),
                  t.config.delay && t.config.delay.show
                    ? (t._timeout = setTimeout(function () {
                        t._hoverState === On && t.show();
                      }, t.config.delay.show))
                    : t.show());
          }),
          (e._leave = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || yn(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              yn(e.currentTarget).data(n, t)),
              e && (t._activeTrigger["focusout" === e.type ? Mn : Hn] = !1),
              t._isWithActiveTrigger() ||
                (clearTimeout(t._timeout),
                (t._hoverState = Nn),
                t.config.delay && t.config.delay.hide
                  ? (t._timeout = setTimeout(function () {
                      t._hoverState === Nn && t.hide();
                    }, t.config.delay.hide))
                  : t.hide());
          }),
          (e._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (e._getConfig = function (e) {
            return (
              "number" ==
                typeof (e = l(
                  {},
                  this.constructor.Default,
                  yn(this.element).data(),
                  "object" == typeof e && e ? e : {}
                )).delay && (e.delay = { show: e.delay, hide: e.delay }),
              "number" == typeof e.title && (e.title = e.title.toString()),
              "number" == typeof e.content &&
                (e.content = e.content.toString()),
              we.typeCheckConfig(En, e, this.constructor.DefaultType),
              e
            );
          }),
          (e._getDelegateConfig = function () {
            var e = {};
            if (this.config)
              for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] &&
                  (e[t] = this.config[t]);
            return e;
          }),
          (e._cleanTipClass = function () {
            var e = yn(this.getTipElement()),
              t = e.attr("class").match(Sn);
            null !== t && t.length && e.removeClass(t.join(""));
          }),
          (e._handlePopperPlacementChange = function (e) {
            var t = e.instance;
            (this.tip = t.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (e._fixTransition = function () {
            var e = this.getTipElement(),
              t = this.config.animation;
            null === e.getAttribute("x-placement") &&
              (yn(e).removeClass(xn),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = t));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = yn(this).data(bn),
                t = "object" == typeof n && n;
              if (
                (e || !/dispose|hide/.test(n)) &&
                (e || ((e = new i(this, t)), yn(this).data(bn, e)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return In;
              },
            },
            {
              key: "NAME",
              get: function () {
                return En;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return bn;
              },
            },
            {
              key: "Event",
              get: function () {
                return kn;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return wn;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Dn;
              },
            },
          ]),
          i
        );
      })()),
      (yn.fn[En] = Rn._jQueryInterface),
      (yn.fn[En].Constructor = Rn),
      (yn.fn[En].noConflict = function () {
        return (yn.fn[En] = Cn), Rn._jQueryInterface;
      }),
      Rn),
    Qi =
      ((Bn = "popover"),
      (Kn = "." + (qn = "bs.popover")),
      (Qn = (Un = t).fn[Bn]),
      (Yn = "bs-popover"),
      (Vn = new RegExp("(^|\\s)" + Yn + "\\S+", "g")),
      (zn = l({}, Ki.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })),
      (Gn = l({}, Ki.DefaultType, { content: "(string|element|function)" })),
      (Jn = "fade"),
      (Xn = ".popover-header"),
      ($n = ".popover-body"),
      (ei = {
        HIDE: "hide" + Kn,
        HIDDEN: "hidden" + Kn,
        SHOW: (Zn = "show") + Kn,
        SHOWN: "shown" + Kn,
        INSERTED: "inserted" + Kn,
        CLICK: "click" + Kn,
        FOCUSIN: "focusin" + Kn,
        FOCUSOUT: "focusout" + Kn,
        MOUSEENTER: "mouseenter" + Kn,
        MOUSELEAVE: "mouseleave" + Kn,
      }),
      (ti = (function (e) {
        var t, n;
        function i() {
          return e.apply(this, arguments) || this;
        }
        (n = e),
          ((t = i).prototype = Object.create(n.prototype)),
          ((t.prototype.constructor = t).__proto__ = n);
        var r = i.prototype;
        return (
          (r.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (r.addAttachmentClass = function (e) {
            Un(this.getTipElement()).addClass(Yn + "-" + e);
          }),
          (r.getTipElement = function () {
            return (
              (this.tip = this.tip || Un(this.config.template)[0]), this.tip
            );
          }),
          (r.setContent = function () {
            var e = Un(this.getTipElement());
            this.setElementContent(e.find(Xn), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
              this.setElementContent(e.find($n), t),
              e.removeClass(Jn + " " + Zn);
          }),
          (r._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (r._cleanTipClass = function () {
            var e = Un(this.getTipElement()),
              t = e.attr("class").match(Vn);
            null !== t && 0 < t.length && e.removeClass(t.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = Un(this).data(qn),
                t = "object" == typeof n ? n : null;
              if (
                (e || !/destroy|hide/.test(n)) &&
                (e || ((e = new i(this, t)), Un(this).data(qn, e)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return zn;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Bn;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return qn;
              },
            },
            {
              key: "Event",
              get: function () {
                return ei;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Kn;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Gn;
              },
            },
          ]),
          i
        );
      })(Ki)),
      (Un.fn[Bn] = ti._jQueryInterface),
      (Un.fn[Bn].Constructor = ti),
      (Un.fn[Bn].noConflict = function () {
        return (Un.fn[Bn] = Qn), ti._jQueryInterface;
      }),
      ti),
    Yi =
      ((ii = "scrollspy"),
      (oi = "." + (ri = "bs.scrollspy")),
      (si = (ni = t).fn[ii]),
      (ai = { offset: 10, method: "auto", target: "" }),
      (li = { offset: "number", method: "string", target: "(string|element)" }),
      (ci = {
        ACTIVATE: "activate" + oi,
        SCROLL: "scroll" + oi,
        LOAD_DATA_API: "load" + oi + ".data-api",
      }),
      (ui = "dropdown-item"),
      (fi = "active"),
      (hi = '[data-spy="scroll"]'),
      (di = ".active"),
      (pi = ".nav, .list-group"),
      (mi = ".nav-link"),
      (gi = ".nav-item"),
      (_i = ".list-group-item"),
      (vi = ".dropdown"),
      (yi = ".dropdown-item"),
      (Ei = ".dropdown-toggle"),
      (bi = "offset"),
      (wi = "position"),
      (Ci = (function () {
        function n(e, t) {
          var n = this;
          (this._element = e),
            (this._scrollElement = "BODY" === e.tagName ? window : e),
            (this._config = this._getConfig(t)),
            (this._selector =
              this._config.target +
              " " +
              mi +
              "," +
              this._config.target +
              " " +
              _i +
              "," +
              this._config.target +
              " " +
              yi),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            ni(this._scrollElement).on(ci.SCROLL, function (e) {
              return n._process(e);
            }),
            this.refresh(),
            this._process();
        }
        var e = n.prototype;
        return (
          (e.refresh = function () {
            var t = this,
              e = this._scrollElement === this._scrollElement.window ? bi : wi,
              r = "auto" === this._config.method ? e : this._config.method,
              o = r === wi ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (e) {
                  var t,
                    n = we.getSelectorFromElement(e);
                  if ((n && (t = document.querySelector(n)), t)) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height) return [ni(t)[r]().top + o, n];
                  }
                  return null;
                })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (e.dispose = function () {
            ni.removeData(this._element, ri),
              ni(this._scrollElement).off(oi),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (e._getConfig = function (e) {
            if (
              "string" !=
              typeof (e = l({}, ai, "object" == typeof e && e ? e : {})).target
            ) {
              var t = ni(e.target).attr("id");
              t || ((t = we.getUID(ii)), ni(e.target).attr("id", t)),
                (e.target = "#" + t);
            }
            return we.typeCheckConfig(ii, e, li), e;
          }),
          (e._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (e._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (e._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (e._process = function () {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                e < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; ) {
                this._activeTarget !== this._targets[r] &&
                  e >= this._offsets[r] &&
                  ("undefined" == typeof this._offsets[r + 1] ||
                    e < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
              }
            }
          }),
          (e._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var e = this._selector.split(",");
            e = e.map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            });
            var n = ni([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass(ui)
              ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi))
              : (n.addClass(fi),
                n
                  .parents(pi)
                  .prev(mi + ", " + _i)
                  .addClass(fi),
                n.parents(pi).prev(gi).children(mi).addClass(fi)),
              ni(this._scrollElement).trigger(ci.ACTIVATE, {
                relatedTarget: t,
              });
          }),
          (e._clear = function () {
            var e = [].slice.call(document.querySelectorAll(this._selector));
            ni(e).filter(di).removeClass(fi);
          }),
          (n._jQueryInterface = function (t) {
            return this.each(function () {
              var e = ni(this).data(ri);
              if (
                (e ||
                  ((e = new n(this, "object" == typeof t && t)),
                  ni(this).data(ri, e)),
                "string" == typeof t)
              ) {
                if ("undefined" == typeof e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return ai;
              },
            },
          ]),
          n
        );
      })()),
      ni(window).on(ci.LOAD_DATA_API, function () {
        for (
          var e = [].slice.call(document.querySelectorAll(hi)), t = e.length;
          t--;

        ) {
          var n = ni(e[t]);
          Ci._jQueryInterface.call(n, n.data());
        }
      }),
      (ni.fn[ii] = Ci._jQueryInterface),
      (ni.fn[ii].Constructor = Ci),
      (ni.fn[ii].noConflict = function () {
        return (ni.fn[ii] = si), Ci._jQueryInterface;
      }),
      Ci),
    Vi =
      ((Di = "." + (Si = "bs.tab")),
      (Ai = (Ti = t).fn.tab),
      (Ii = {
        HIDE: "hide" + Di,
        HIDDEN: "hidden" + Di,
        SHOW: "show" + Di,
        SHOWN: "shown" + Di,
        CLICK_DATA_API: "click" + Di + ".data-api",
      }),
      (Oi = "dropdown-menu"),
      (Ni = "active"),
      (ki = "disabled"),
      (xi = "fade"),
      (Pi = "show"),
      (Li = ".dropdown"),
      (ji = ".nav, .list-group"),
      (Hi = ".active"),
      (Mi = "> li > .active"),
      (Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
      (Wi = ".dropdown-toggle"),
      (Ri = "> .dropdown-menu .active"),
      (Ui = (function () {
        function i(e) {
          this._element = e;
        }
        var e = i.prototype;
        return (
          (e.show = function () {
            var n = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  Ti(this._element).hasClass(Ni)) ||
                Ti(this._element).hasClass(ki)
              )
            ) {
              var e,
                i,
                t = Ti(this._element).closest(ji)[0],
                r = we.getSelectorFromElement(this._element);
              if (t) {
                var o = "UL" === t.nodeName ? Mi : Hi;
                i = (i = Ti.makeArray(Ti(t).find(o)))[i.length - 1];
              }
              var s = Ti.Event(Ii.HIDE, { relatedTarget: this._element }),
                a = Ti.Event(Ii.SHOW, { relatedTarget: i });
              if (
                (i && Ti(i).trigger(s),
                Ti(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented())
              ) {
                r && (e = document.querySelector(r)),
                  this._activate(this._element, t);
                var l = function () {
                  var e = Ti.Event(Ii.HIDDEN, { relatedTarget: n._element }),
                    t = Ti.Event(Ii.SHOWN, { relatedTarget: i });
                  Ti(i).trigger(e), Ti(n._element).trigger(t);
                };
                e ? this._activate(e, e.parentNode, l) : l();
              }
            }
          }),
          (e.dispose = function () {
            Ti.removeData(this._element, Si), (this._element = null);
          }),
          (e._activate = function (e, t, n) {
            var i = this,
              r = (
                "UL" === t.nodeName ? Ti(t).find(Mi) : Ti(t).children(Hi)
              )[0],
              o = n && r && Ti(r).hasClass(xi),
              s = function () {
                return i._transitionComplete(e, r, n);
              };
            if (r && o) {
              var a = we.getTransitionDurationFromElement(r);
              Ti(r).one(we.TRANSITION_END, s).emulateTransitionEnd(a);
            } else s();
          }),
          (e._transitionComplete = function (e, t, n) {
            if (t) {
              Ti(t).removeClass(Pi + " " + Ni);
              var i = Ti(t.parentNode).find(Ri)[0];
              i && Ti(i).removeClass(Ni),
                "tab" === t.getAttribute("role") &&
                  t.setAttribute("aria-selected", !1);
            }
            if (
              (Ti(e).addClass(Ni),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !0),
              we.reflow(e),
              Ti(e).addClass(Pi),
              e.parentNode && Ti(e.parentNode).hasClass(Oi))
            ) {
              var r = Ti(e).closest(Li)[0];
              if (r) {
                var o = [].slice.call(r.querySelectorAll(Wi));
                Ti(o).addClass(Ni);
              }
              e.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = Ti(this),
                t = e.data(Si);
              if (
                (t || ((t = new i(this)), e.data(Si, t)), "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          i
        );
      })()),
      Ti(document).on(Ii.CLICK_DATA_API, Fi, function (e) {
        e.preventDefault(), Ui._jQueryInterface.call(Ti(this), "show");
      }),
      (Ti.fn.tab = Ui._jQueryInterface),
      (Ti.fn.tab.Constructor = Ui),
      (Ti.fn.tab.noConflict = function () {
        return (Ti.fn.tab = Ai), Ui._jQueryInterface;
      }),
      Ui);
  !(function (e) {
    if ("undefined" == typeof e)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (
      (t[0] < 2 && t[1] < 9) ||
      (1 === t[0] && 9 === t[1] && t[2] < 1) ||
      4 <= t[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(t),
    (e.Util = we),
    (e.Alert = Ce),
    (e.Button = Te),
    (e.Carousel = Se),
    (e.Collapse = De),
    (e.Dropdown = Bi),
    (e.Modal = qi),
    (e.Popover = Qi),
    (e.Scrollspy = Yi),
    (e.Tab = Vi),
    (e.Tooltip = Ki),
    Object.defineProperty(e, "__esModule", { value: !0 });
});

/*=============================================
=            04. Mean Menu           =
=============================================*/

!(function ($) {
  "use strict";
  $.fn.meanmenu = function (e) {
    var n = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: "body",
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "right",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: "480",
      meanNavPush: "",
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: "+",
      meanContract: "-",
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: "block",
      removeElements: "",
    };
    e = $.extend(n, e);
    var a = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function () {
      var n = e.meanMenuTarget,
        t = e.meanMenuContainer,
        r = e.meanMenuClose,
        i = e.meanMenuCloseSize,
        s = e.meanMenuOpen,
        u = e.meanRevealPosition,
        m = e.meanRevealPositionDistance,
        l = e.meanRevealColour,
        o = e.meanScreenWidth,
        c = e.meanNavPush,
        v = ".meanmenu-reveal",
        h = e.meanShowChildren,
        d = e.meanExpandableChildren,
        y = e.meanExpand,
        j = e.meanContract,
        Q = e.meanRemoveAttrs,
        f = e.onePage,
        g = e.meanDisplay,
        p = e.removeElements,
        C = !1;
      (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/Blackberry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) &&
        (C = !0),
        (navigator.userAgent.match(/MSIE 8/i) ||
          navigator.userAgent.match(/MSIE 7/i)) &&
          jQuery("html").css("overflow-y", "scroll");
      var w = "",
        x = function () {
          if ("center" === u) {
            var e = window.innerWidth || document.documentElement.clientWidth,
              n = e / 2 - 22 + "px";
            (w = "left:" + n + ";right:auto;"),
              C
                ? jQuery(".meanmenu-reveal").animate({ left: n })
                : jQuery(".meanmenu-reveal").css("left", n);
          }
        },
        A = !1,
        E = !1;
      "right" === u && (w = "right:" + m + ";left:auto;"),
        "left" === u && (w = "left:" + m + ";right:auto;"),
        x();
      var M = "",
        P = function () {
          M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s);
        },
        W = function () {
          jQuery(".mean-bar,.mean-push").remove(),
            jQuery(t).removeClass("mean-container"),
            jQuery(n).css("display", g),
            (A = !1),
            (E = !1),
            jQuery(p).removeClass("mean-remove");
        },
        b = function () {
          var e = "background:" + l + ";color:" + l + ";" + w;
          if (o >= a) {
            jQuery(p).addClass("mean-remove"),
              (E = !0),
              jQuery(t).addClass("mean-container"),
              jQuery(".mean-container").prepend(
                '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                  e +
                  '">Show Navigation</a><nav class="mean-nav"></nav></div>'
              );
            var r = jQuery(n).html();
            jQuery(".mean-nav").html(r),
              Q &&
                jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                  jQuery(this).is(".mean-remove")
                    ? jQuery(this).attr("class", "mean-remove")
                    : jQuery(this).removeAttr("class"),
                    jQuery(this).removeAttr("id");
                }),
              jQuery(n).before('<div class="mean-push" />'),
              jQuery(".mean-push").css("margin-top", c),
              jQuery(n).hide(),
              jQuery(".meanmenu-reveal").show(),
              jQuery(v).html(s),
              (M = jQuery(v)),
              jQuery(".mean-nav ul").hide(),
              h
                ? d
                  ? (jQuery(".mean-nav ul ul").each(function () {
                      jQuery(this).children().length &&
                        jQuery(this, "li:first")
                          .parent()
                          .append(
                            '<a class="mean-expand" href="#" style="font-size: ' +
                              i +
                              '">' +
                              y +
                              "</a>"
                          );
                    }),
                    jQuery(".mean-expand").on("click", function (e) {
                      e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked")
                          ? (jQuery(this).text(y),
                            jQuery(this)
                              .prev("ul")
                              .slideUp(300, function () {}))
                          : (jQuery(this).text(j),
                            jQuery(this)
                              .prev("ul")
                              .slideDown(300, function () {})),
                        jQuery(this).toggleClass("mean-clicked");
                    }))
                  : jQuery(".mean-nav ul ul").show()
                : jQuery(".mean-nav ul ul").hide(),
              jQuery(".mean-nav ul li").last().addClass("mean-last"),
              M.removeClass("meanclose"),
              jQuery(M).click(function (e) {
                e.preventDefault(),
                  A === !1
                    ? (M.css("text-align", "center"),
                      M.css("text-indent", "0"),
                      M.css("font-size", i),
                      jQuery(".mean-nav ul:first").slideDown(),
                      (A = !0))
                    : (jQuery(".mean-nav ul:first").slideUp(), (A = !1)),
                  M.toggleClass("meanclose"),
                  P(),
                  jQuery(p).addClass("mean-remove");
              }),
              f &&
                jQuery(".mean-nav ul > li > a:first-child").on(
                  "click",
                  function () {
                    jQuery(".mean-nav ul:first").slideUp(),
                      (A = !1),
                      jQuery(M).toggleClass("meanclose").html(s);
                  }
                );
          } else W();
        };
      C ||
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            a > o,
            W(),
            o >= a ? (b(), x()) : W();
        }),
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            C
              ? (x(), o >= a ? E === !1 && b() : W())
              : (W(), o >= a && (b(), x()));
        }),
        b();
    });
  };
})(jQuery);

/*=============================================
=            05. Count Down          =
=============================================*/

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  "use strict";
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g))
      return (
        String(a).match(/^[0-9]*$/) && (a = Number(a)),
        String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
        new Date(a)
      );
    throw new Error("Couldn't cast `" + a + "` to a date object.");
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          (h = h[2]),
            i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
            null !== m &&
              ("!" === k && (m = e(l, m)),
              "" === k && m < 10 && (m = "0" + m.toString()),
              (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, "%"));
    };
  }
  function e(a, b) {
    var c = "s",
      d = "";
    return (
      a &&
        ((a = a.replace(/(:|;|\s)/gi, "").split(/\,/)),
        1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
      Math.abs(b) > 1 ? c : d
    );
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1, defer: !1 };
  g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (g = new RegExp(g.join("|")));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds",
    },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.firstTick = !0),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d &&
          ("function" == typeof d
            ? (this.$el.on("update.countdown", d),
              this.$el.on("stoped.countdown", d),
              this.$el.on("finish.countdown", d))
            : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval),
        (this.interval = null),
        this.dispatchEvent("stoped");
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this),
        (f[this.instanceNumber] = null),
        delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var a,
        b = new Date();
      return (
        (a = this.finalDate.getTime() - b.getTime()),
        (a = Math.ceil(a / 1e3)),
        (a = !this.options.elapse && a < 0 ? 0 : Math.abs(a)),
        this.totalSecsLeft === a || this.firstTick
          ? void (this.firstTick = !1)
          : ((this.totalSecsLeft = a),
            (this.elapsed = b >= this.finalDate),
            (this.offset = {
              seconds: this.totalSecsLeft % 60,
              minutes: Math.floor(this.totalSecsLeft / 60) % 60,
              hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
              days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToMonth: Math.floor(
                (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
              ),
              weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
              weeksToMonth:
                Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
              months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
              years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
              totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
              totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
              totalMinutes: Math.floor(this.totalSecsLeft / 60),
              totalSeconds: this.totalSecsLeft,
            }),
            void (this.options.elapse || 0 !== this.totalSecsLeft
              ? this.dispatchEvent("update")
              : (this.stop(), this.dispatchEvent("finish"))))
      );
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + ".countdown");
      (c.finalDate = this.finalDate),
        (c.elapsed = this.elapsed),
        (c.offset = a.extend({}, this.offset)),
        (c.strftime = d(this.offset)),
        this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data("countdown-instance");
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e)
            ? d[e].apply(d, b.slice(1))
            : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? (d.setFinalDate.call(d, e), d.start())
            : a.error(
                "Method %s does not exist on jQuery.countdown".replace(
                  /\%s/gi,
                  e
                )
              );
        } else new j(this, b[0], b[1]);
      });
    });
});

/*=============================================
=            06. Magnific popup          =
=============================================*/

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/*=============================================
=            07. Nice Select          =
=============================================*/
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */

!(function (e) {
  e.fn.niceSelect = function (t) {
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                l = e(this).next(".nice-select"),
                c = l.hasClass("open");
              l.length && (l.remove(), s(t), c && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .addClass(t.attr("multiple") ? "has-multiple" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html(
            t.attr("multiple")
              ? '<span class="multiple-options"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>'
              : '<span class="current"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>'
          )
      );
      var s = t.next(),
        l = t.find("option");
      if (t.attr("multiple")) {
        var c = "";
        (a = t.find("option:selected")).each(function () {
          ($selected_option = e(this)),
            ($selected_text =
              $selected_option.data("display") || $selected_option.text()),
            (c += '<span class="current">' + $selected_text + "</span>");
        }),
          ($select_placeholder =
            t.data("placeholder") || t.attr("placeholder")),
          ($select_placeholder =
            "" == $select_placeholder ? "Select" : $select_placeholder),
          (c = "" == c ? $select_placeholder : c),
          s.find(".multiple-options").html(c);
      } else {
        var a = t.find("option:selected");
        s.find(".current").html(a.data("display") || a.text());
      }
      l.each(function (t) {
        var l = e(this),
          c = l.data("display");
        s.find("ul").append(
          e("<li></li>")
            .attr("data-value", l.val())
            .attr("data-display", c || null)
            .addClass(
              "option" +
                (l.is(":selected") ? " selected" : "") +
                (l.is(":disabled") ? " disabled" : "")
            )
            .html(l.text())
        );
      });
    }
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".nice-select-search").val(""),
              s.find(".nice-select-search").focus(),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"),
              s.find("ul li").show())
            : s.focus();
      }),
      e(document).on("click", ".nice-select-search-box", function (e) {
        return e.stopPropagation(), !1;
      }),
      e(document).on("keyup.nice-select-search", ".nice-select", function () {
        var t = e(this),
          s = t.find(".nice-select-search").val(),
          l = t.find("ul li");
        if ("" == s) l.show();
        else if (t.hasClass("open")) {
          s = s.toLowerCase();
          var c = new RegExp(s);
          0 < l.length
            ? l.each(function () {
                var t = e(this),
                  s = t.text().toLowerCase();
                c.test(s) ? t.show() : t.hide();
              })
            : l.show();
        }
        t.find(".option"),
          t.find(".focus").removeClass("focus"),
          t.find(".selected").addClass("focus");
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            l = s.closest(".nice-select");
          if (l.hasClass("has-multiple"))
            s.hasClass("selected")
              ? s.removeClass("selected")
              : s.addClass("selected"),
              ($selected_html = ""),
              ($selected_values = []),
              l.find(".selected").each(function () {
                $selected_option = e(this);
                var t =
                  $selected_option.data("display") || $selected_option.text();
                ($selected_html += '<span class="current">' + t + "</span>"),
                  $selected_values.push($selected_option.data("value"));
              }),
              ($select_placeholder =
                l.prev("select").data("placeholder") ||
                l.prev("select").attr("placeholder")),
              ($select_placeholder =
                "" == $select_placeholder ? "Select" : $select_placeholder),
              ($selected_html =
                "" == $selected_html ? $select_placeholder : $selected_html),
              l.find(".multiple-options").html($selected_html),
              l.prev("select").val($selected_values).trigger("change");
          else {
            l.find(".selected").removeClass("selected"), s.addClass("selected");
            var c = s.data("display") || s.text();
            l.find(".current").text(c),
              l.prev("select").val(s.data("value")).trigger("change");
          }
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          l = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? l.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var c = l.nextAll(".option:not(.disabled)").first();
            c.length > 0 &&
              (s.find(".focus").removeClass("focus"), c.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var a = l.prevAll(".option:not(.disabled)").first();
            a.length > 0 &&
              (s.find(".focus").removeClass("focus"), a.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var l = document.createElement("a").style;
    return (
      (l.cssText = "pointer-events:auto"),
      "auto" !== l.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);

/*=============================================
=            08. Slick slider            =
=============================================*/

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});

/*=============================================
=            09. ResizeSensor            =
=============================================*/

!(function () {
  var e = function (t, i) {
    function s() {
      (this.q = []),
        (this.add = function (e) {
          this.q.push(e);
        });
      var e, t;
      this.call = function () {
        for (e = 0, t = this.q.length; e < t; e++) this.q[e].call();
      };
    }
    function o(e, t) {
      return e.currentStyle
        ? e.currentStyle[t]
        : window.getComputedStyle
        ? window.getComputedStyle(e, null).getPropertyValue(t)
        : e.style[t];
    }
    function n(e, t) {
      if (e.resizedAttached) {
        if (e.resizedAttached) return void e.resizedAttached.add(t);
      } else (e.resizedAttached = new s()), e.resizedAttached.add(t);
      (e.resizeSensor = document.createElement("div")),
        (e.resizeSensor.className = "resize-sensor");
      var i =
          "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
        n = "position: absolute; left: 0; top: 0; transition: 0s;";
      (e.resizeSensor.style.cssText = i),
        (e.resizeSensor.innerHTML =
          '<div class="resize-sensor-expand" style="' +
          i +
          '"><div style="' +
          n +
          '"></div></div><div class="resize-sensor-shrink" style="' +
          i +
          '"><div style="' +
          n +
          ' width: 200%; height: 200%"></div></div>'),
        e.appendChild(e.resizeSensor),
        { fixed: 1, absolute: 1 }[o(e, "position")] ||
          (e.style.position = "relative");
      var d,
        r,
        l = e.resizeSensor.childNodes[0],
        c = l.childNodes[0],
        h = e.resizeSensor.childNodes[1],
        a =
          (h.childNodes[0],
          function () {
            (c.style.width = l.offsetWidth + 10 + "px"),
              (c.style.height = l.offsetHeight + 10 + "px"),
              (l.scrollLeft = l.scrollWidth),
              (l.scrollTop = l.scrollHeight),
              (h.scrollLeft = h.scrollWidth),
              (h.scrollTop = h.scrollHeight),
              (d = e.offsetWidth),
              (r = e.offsetHeight);
          });
      a();
      var f = function () {
          e.resizedAttached && e.resizedAttached.call();
        },
        u = function (e, t, i) {
          e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i);
        },
        p = function () {
          (e.offsetWidth == d && e.offsetHeight == r) || f(), a();
        };
      u(l, "scroll", p), u(h, "scroll", p);
    }
    var d = Object.prototype.toString.call(t),
      r =
        "[object Array]" === d ||
        "[object NodeList]" === d ||
        "[object HTMLCollection]" === d ||
        ("undefined" != typeof jQuery && t instanceof jQuery) ||
        ("undefined" != typeof Elements && t instanceof Elements);
    if (r) for (var l = 0, c = t.length; l < c; l++) n(t[l], i);
    else n(t, i);
    this.detach = function () {
      if (r) for (var i = 0, s = t.length; i < s; i++) e.detach(t[i]);
      else e.detach(t);
    };
  };
  (e.detach = function (e) {
    e.resizeSensor &&
      (e.removeChild(e.resizeSensor),
      delete e.resizeSensor,
      delete e.resizedAttached);
  }),
    "undefined" != typeof module && "undefined" != typeof module.exports
      ? (module.exports = e)
      : (window.ResizeSensor = e);
})();
//# sourceMappingURL=maps/ResizeSensor.min.js.map

/*=============================================
=            10. Theia sticky sidebar      =
=============================================*/

!(function (i) {
  i.fn.theiaStickySidebar = function (t) {
    function e(t, e) {
      var a = o(t, e);
      a ||
        (console.log(
          "TSS: Body width smaller than options.minWidth. Init is delayed."
        ),
        i(document).on(
          "scroll." + t.namespace,
          (function (t, e) {
            return function (a) {
              var n = o(t, e);
              n && i(this).unbind(a);
            };
          })(t, e)
        ),
        i(window).on(
          "resize." + t.namespace,
          (function (t, e) {
            return function (a) {
              var n = o(t, e);
              n && i(this).unbind(a);
            };
          })(t, e)
        ));
    }
    function o(t, e) {
      return (
        t.initialized === !0 ||
        (!(i("body").width() < t.minWidth) && (a(t, e), !0))
      );
    }
    function a(t, e) {
      t.initialized = !0;
      var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
      0 === o.length &&
        i("head").append(
          i(
            '<style id="theia-sticky-sidebar-stylesheet-' +
              t.namespace +
              '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
          )
        ),
        e.each(function () {
          function e() {
            (a.fixedScrollTop = 0),
              a.sidebar.css({ "min-height": "1px" }),
              a.stickySidebar.css({
                position: "static",
                width: "",
                transform: "none",
              });
          }
          function o(t) {
            var e = t.height();
            return (
              t.children().each(function () {
                e = Math.max(e, i(this).height());
              }),
              e
            );
          }
          var a = {};
          if (
            ((a.sidebar = i(this)),
            (a.options = t || {}),
            (a.container = i(a.options.containerSelector)),
            0 == a.container.length && (a.container = a.sidebar.parent()),
            a.sidebar.parents().css("-webkit-transform", "none"),
            a.sidebar.css({
              position: a.options.defaultPosition,
              overflow: "visible",
              "-webkit-box-sizing": "border-box",
              "-moz-box-sizing": "border-box",
              "box-sizing": "border-box",
            }),
            (a.stickySidebar = a.sidebar.find(".theiaStickySidebar")),
            0 == a.stickySidebar.length)
          ) {
            var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
            a.sidebar
              .find("script")
              .filter(function (i, t) {
                return 0 === t.type.length || t.type.match(s);
              })
              .remove(),
              (a.stickySidebar = i("<div>")
                .addClass("theiaStickySidebar")
                .append(a.sidebar.children())),
              a.sidebar.append(a.stickySidebar);
          }
          (a.marginBottom = parseInt(a.sidebar.css("margin-bottom"))),
            (a.paddingTop = parseInt(a.sidebar.css("padding-top"))),
            (a.paddingBottom = parseInt(a.sidebar.css("padding-bottom")));
          var r = a.stickySidebar.offset().top,
            d = a.stickySidebar.outerHeight();
          a.stickySidebar.css("padding-top", 1),
            a.stickySidebar.css("padding-bottom", 1),
            (r -= a.stickySidebar.offset().top),
            (d = a.stickySidebar.outerHeight() - d - r),
            0 == r
              ? (a.stickySidebar.css("padding-top", 0),
                (a.stickySidebarPaddingTop = 0))
              : (a.stickySidebarPaddingTop = 1),
            0 == d
              ? (a.stickySidebar.css("padding-bottom", 0),
                (a.stickySidebarPaddingBottom = 0))
              : (a.stickySidebarPaddingBottom = 1),
            (a.previousScrollTop = null),
            (a.fixedScrollTop = 0),
            e(),
            (a.onScroll = function (a) {
              if (a.stickySidebar.is(":visible")) {
                if (i("body").width() < a.options.minWidth) return void e();
                if (a.options.disableOnResponsiveLayouts) {
                  var s = a.sidebar.outerWidth(
                    "none" == a.sidebar.css("float")
                  );
                  if (s + 50 > a.container.width()) return void e();
                }
                var r = i(document).scrollTop(),
                  d = "static";
                if (
                  r >=
                  a.sidebar.offset().top +
                    (a.paddingTop - a.options.additionalMarginTop)
                ) {
                  var c,
                    p = a.paddingTop + t.additionalMarginTop,
                    b =
                      a.paddingBottom +
                      a.marginBottom +
                      t.additionalMarginBottom,
                    l = a.sidebar.offset().top,
                    f = a.sidebar.offset().top + o(a.container),
                    h = 0 + t.additionalMarginTop,
                    g =
                      a.stickySidebar.outerHeight() + p + b <
                      i(window).height();
                  c = g
                    ? h + a.stickySidebar.outerHeight()
                    : i(window).height() -
                      a.marginBottom -
                      a.paddingBottom -
                      t.additionalMarginBottom;
                  var u = l - r + a.paddingTop,
                    S = f - r - a.paddingBottom - a.marginBottom,
                    y = a.stickySidebar.offset().top - r,
                    m = a.previousScrollTop - r;
                  "fixed" == a.stickySidebar.css("position") &&
                    "modern" == a.options.sidebarBehavior &&
                    (y += m),
                    "stick-to-top" == a.options.sidebarBehavior &&
                      (y = t.additionalMarginTop),
                    "stick-to-bottom" == a.options.sidebarBehavior &&
                      (y = c - a.stickySidebar.outerHeight()),
                    (y =
                      m > 0
                        ? Math.min(y, h)
                        : Math.max(y, c - a.stickySidebar.outerHeight())),
                    (y = Math.max(y, u)),
                    (y = Math.min(y, S - a.stickySidebar.outerHeight()));
                  var k = a.container.height() == a.stickySidebar.outerHeight();
                  d =
                    (k || y != h) &&
                    (k || y != c - a.stickySidebar.outerHeight())
                      ? r + y - a.sidebar.offset().top - a.paddingTop <=
                        t.additionalMarginTop
                        ? "static"
                        : "absolute"
                      : "fixed";
                }
                if ("fixed" == d) {
                  var v = i(document).scrollLeft();
                  a.stickySidebar.css({
                    position: "fixed",
                    width: n(a.stickySidebar) + "px",
                    transform: "translateY(" + y + "px)",
                    left:
                      a.sidebar.offset().left +
                      parseInt(a.sidebar.css("padding-left")) -
                      v +
                      "px",
                    top: "0px",
                  });
                } else if ("absolute" == d) {
                  var x = {};
                  "absolute" != a.stickySidebar.css("position") &&
                    ((x.position = "absolute"),
                    (x.transform =
                      "translateY(" +
                      (r +
                        y -
                        a.sidebar.offset().top -
                        a.stickySidebarPaddingTop -
                        a.stickySidebarPaddingBottom) +
                      "px)"),
                    (x.top = "0px")),
                    (x.width = n(a.stickySidebar) + "px"),
                    (x.left = ""),
                    a.stickySidebar.css(x);
                } else "static" == d && e();
                "static" != d &&
                  1 == a.options.updateSidebarHeight &&
                  a.sidebar.css({
                    "min-height":
                      a.stickySidebar.outerHeight() +
                      a.stickySidebar.offset().top -
                      a.sidebar.offset().top +
                      a.paddingBottom,
                  }),
                  (a.previousScrollTop = r);
              }
            }),
            a.onScroll(a),
            i(document).on(
              "scroll." + a.options.namespace,
              (function (i) {
                return function () {
                  i.onScroll(i);
                };
              })(a)
            ),
            i(window).on(
              "resize." + a.options.namespace,
              (function (i) {
                return function () {
                  i.stickySidebar.css({ position: "static" }), i.onScroll(i);
                };
              })(a)
            ),
            "undefined" != typeof ResizeSensor &&
              new ResizeSensor(
                a.stickySidebar[0],
                (function (i) {
                  return function () {
                    i.onScroll(i);
                  };
                })(a)
              );
        });
    }
    function n(i) {
      var t;
      try {
        t = i[0].getBoundingClientRect().width;
      } catch (i) {}
      return "undefined" == typeof t && (t = i.width()), t;
    }
    var s = {
      containerSelector: "",
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: !0,
      minWidth: 0,
      disableOnResponsiveLayouts: !0,
      sidebarBehavior: "modern",
      defaultPosition: "relative",
      namespace: "TSS",
    };
    return (
      (t = i.extend(s, t)),
      (t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0),
      (t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0),
      e(t, this),
      this
    );
  };
})(jQuery);
//# sourceMappingURL=maps/theia-sticky-sidebar.min.js.map

/*=============================================
=            11. Instafeed            =
=============================================*/

// Generated by CoffeeScript 1.9.3
(function () {
  var e;
  (e = (function () {
    function e(e, t) {
      var n, r;
      this.options = {
        target: "instafeed",
        get: "popular",
        resolution: "thumbnail",
        sortBy: "none",
        links: !0,
        mock: !1,
        useHttp: !1,
      };
      if (typeof e == "object") for (n in e) (r = e[n]), (this.options[n] = r);
      (this.context = t != null ? t : this), (this.unique = this._genKey());
    }
    return (
      (e.prototype.hasNext = function () {
        return (
          typeof this.context.nextUrl == "string" &&
          this.context.nextUrl.length > 0
        );
      }),
      (e.prototype.next = function () {
        return this.hasNext() ? this.run(this.context.nextUrl) : !1;
      }),
      (e.prototype.run = function (t) {
        var n, r, i;
        if (
          typeof this.options.clientId != "string" &&
          typeof this.options.accessToken != "string"
        )
          throw new Error("Missing clientId or accessToken.");
        if (
          typeof this.options.accessToken != "string" &&
          typeof this.options.clientId != "string"
        )
          throw new Error("Missing clientId or accessToken.");
        return (
          this.options.before != null &&
            typeof this.options.before == "function" &&
            this.options.before.call(this),
          typeof document != "undefined" &&
            document !== null &&
            ((i = document.createElement("script")),
            (i.id = "instafeed-fetcher"),
            (i.src = t || this._buildUrl()),
            (n = document.getElementsByTagName("head")),
            n[0].appendChild(i),
            (r = "instafeedCache" + this.unique),
            (window[r] = new e(this.options, this)),
            (window[r].unique = this.unique)),
          !0
        );
      }),
      (e.prototype.parse = function (e) {
        var t,
          n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m,
          g,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N,
          C,
          k,
          L,
          A,
          O,
          M,
          _,
          D;
        if (typeof e != "object") {
          if (
            this.options.error != null &&
            typeof this.options.error == "function"
          )
            return this.options.error.call(this, "Invalid JSON data"), !1;
          throw new Error("Invalid JSON response");
        }
        if (e.meta.code !== 200) {
          if (
            this.options.error != null &&
            typeof this.options.error == "function"
          )
            return this.options.error.call(this, e.meta.error_message), !1;
          throw new Error("Error from Instagram: " + e.meta.error_message);
        }
        if (e.data.length === 0) {
          if (
            this.options.error != null &&
            typeof this.options.error == "function"
          )
            return (
              this.options.error.call(
                this,
                "No images were returned from Instagram"
              ),
              !1
            );
          throw new Error("No images were returned from Instagram");
        }
        this.options.success != null &&
          typeof this.options.success == "function" &&
          this.options.success.call(this, e),
          (this.context.nextUrl = ""),
          e.pagination != null &&
            (this.context.nextUrl = e.pagination.next_url);
        if (this.options.sortBy !== "none") {
          this.options.sortBy === "random"
            ? (M = ["", "random"])
            : (M = this.options.sortBy.split("-")),
            (O = M[0] === "least" ? !0 : !1);
          switch (M[1]) {
            case "random":
              e.data.sort(function () {
                return 0.5 - Math.random();
              });
              break;
            case "recent":
              e.data = this._sortBy(e.data, "created_time", O);
              break;
            case "liked":
              e.data = this._sortBy(e.data, "likes.count", O);
              break;
            case "commented":
              e.data = this._sortBy(e.data, "comments.count", O);
              break;
            default:
              throw new Error(
                "Invalid option for sortBy: '" + this.options.sortBy + "'."
              );
          }
        }
        if (
          typeof document != "undefined" &&
          document !== null &&
          this.options.mock === !1
        ) {
          (m = e.data),
            (A = parseInt(this.options.limit, 10)),
            this.options.limit != null && m.length > A && (m = m.slice(0, A)),
            (u = document.createDocumentFragment()),
            this.options.filter != null &&
              typeof this.options.filter == "function" &&
              (m = this._filter(m, this.options.filter));
          if (
            this.options.template != null &&
            typeof this.options.template == "string"
          ) {
            (f = ""), (d = ""), (w = ""), (D = document.createElement("div"));
            for (c = 0, N = m.length; c < N; c++) {
              (h = m[c]), (p = h.images[this.options.resolution]);
              if (typeof p != "object")
                throw (
                  ((o =
                    "No image found for resolution: " +
                    this.options.resolution +
                    "."),
                  new Error(o))
                );
              (E = p.width),
                (y = p.height),
                (b = "square"),
                E > y && (b = "landscape"),
                E < y && (b = "portrait"),
                (v = p.url),
                (l = window.location.protocol.indexOf("http") >= 0),
                l &&
                  !this.options.useHttp &&
                  (v = v.replace(/https?:\/\//, "//")),
                (d = this._makeTemplate(this.options.template, {
                  model: h,
                  id: h.id,
                  link: h.link,
                  type: h.type,
                  image: v,
                  width: E,
                  height: y,
                  orientation: b,
                  caption: this._getObjectProperty(h, "caption.text"),
                  likes: h.likes.count,
                  comments: h.comments.count,
                  location: this._getObjectProperty(h, "location.name"),
                })),
                (f += d);
            }
            (D.innerHTML = f), (i = []), (r = 0), (n = D.childNodes.length);
            while (r < n) i.push(D.childNodes[r]), (r += 1);
            for (x = 0, C = i.length; x < C; x++) (L = i[x]), u.appendChild(L);
          } else
            for (T = 0, k = m.length; T < k; T++) {
              (h = m[T]),
                (g = document.createElement("img")),
                (p = h.images[this.options.resolution]);
              if (typeof p != "object")
                throw (
                  ((o =
                    "No image found for resolution: " +
                    this.options.resolution +
                    "."),
                  new Error(o))
                );
              (v = p.url),
                (l = window.location.protocol.indexOf("http") >= 0),
                l &&
                  !this.options.useHttp &&
                  (v = v.replace(/https?:\/\//, "//")),
                (g.src = v),
                this.options.links === !0
                  ? ((t = document.createElement("a")),
                    (t.href = h.link),
                    t.appendChild(g),
                    u.appendChild(t))
                  : u.appendChild(g);
            }
          (_ = this.options.target),
            typeof _ == "string" && (_ = document.getElementById(_));
          if (_ == null)
            throw (
              ((o =
                'No element with id="' + this.options.target + '" on page.'),
              new Error(o))
            );
          _.appendChild(u),
            (a = document.getElementsByTagName("head")[0]),
            a.removeChild(document.getElementById("instafeed-fetcher")),
            (S = "instafeedCache" + this.unique),
            (window[S] = void 0);
          try {
            delete window[S];
          } catch (P) {
            s = P;
          }
        }
        return (
          this.options.after != null &&
            typeof this.options.after == "function" &&
            this.options.after.call(this),
          !0
        );
      }),
      (e.prototype._buildUrl = function () {
        var e, t, n;
        e = "https://api.instagram.com/v1";
        switch (this.options.get) {
          case "popular":
            t = "media/popular";
            break;
          case "tagged":
            if (!this.options.tagName)
              throw new Error(
                "No tag name specified. Use the 'tagName' option."
              );
            t = "tags/" + this.options.tagName + "/media/recent";
            break;
          case "location":
            if (!this.options.locationId)
              throw new Error(
                "No location specified. Use the 'locationId' option."
              );
            t = "locations/" + this.options.locationId + "/media/recent";
            break;
          case "user":
            if (!this.options.userId)
              throw new Error("No user specified. Use the 'userId' option.");
            t = "users/" + this.options.userId + "/media/recent";
            break;
          default:
            throw new Error(
              "Invalid option for get: '" + this.options.get + "'."
            );
        }
        return (
          (n = e + "/" + t),
          this.options.accessToken != null
            ? (n += "?access_token=" + this.options.accessToken)
            : (n += "?client_id=" + this.options.clientId),
          this.options.limit != null && (n += "&count=" + this.options.limit),
          (n += "&callback=instafeedCache" + this.unique + ".parse"),
          n
        );
      }),
      (e.prototype._genKey = function () {
        var e;
        return (
          (e = function () {
            return (((1 + Math.random()) * 65536) | 0)
              .toString(16)
              .substring(1);
          }),
          "" + e() + e() + e() + e()
        );
      }),
      (e.prototype._makeTemplate = function (e, t) {
        var n, r, i, s, o;
        (r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/), (n = e);
        while (r.test(n))
          (s = n.match(r)[1]),
            (o = (i = this._getObjectProperty(t, s)) != null ? i : ""),
            (n = n.replace(r, function () {
              return "" + o;
            }));
        return n;
      }),
      (e.prototype._getObjectProperty = function (e, t) {
        var n, r;
        (t = t.replace(/\[(\w+)\]/g, ".$1")), (r = t.split("."));
        while (r.length) {
          n = r.shift();
          if (!(e != null && n in e)) return null;
          e = e[n];
        }
        return e;
      }),
      (e.prototype._sortBy = function (e, t, n) {
        var r;
        return (
          (r = function (e, r) {
            var i, s;
            return (
              (i = this._getObjectProperty(e, t)),
              (s = this._getObjectProperty(r, t)),
              n ? (i > s ? 1 : -1) : i < s ? 1 : -1
            );
          }),
          e.sort(r.bind(this)),
          e
        );
      }),
      (e.prototype._filter = function (e, t) {
        var n, r, i, s, o;
        (n = []),
          (r = function (e) {
            if (t(e)) return n.push(e);
          });
        for (i = 0, o = e.length; i < o; i++) (s = e[i]), r(s);
        return n;
      }),
      e
    );
  })()),
    (function (e, t) {
      return typeof define == "function" && define.amd
        ? define([], t)
        : typeof module == "object" && module.exports
        ? (module.exports = t())
        : (e.Instafeed = t());
    })(this, function () {
      return e;
    });
}).call(this);

/*=============================================
=            12. jQuery UI          =
=============================================*/

/*! jQuery UI - v1.11.4 - 2015-12-02
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
  function t(t, s) {
    var n,
      a,
      o,
      r = t.nodeName.toLowerCase();
    return "area" === r
      ? ((n = t.parentNode),
        (a = n.name),
        t.href && a && "map" === n.nodeName.toLowerCase()
          ? ((o = e("img[usemap='#" + a + "']")[0]), !!o && i(o))
          : !1)
      : (/^(input|select|textarea|button|object)$/.test(r)
          ? !t.disabled
          : "a" === r
          ? t.href || s
          : s) && i(t);
  }
  function i(t) {
    return (
      e.expr.filters.visible(t) &&
      !e(t)
        .parents()
        .addBack()
        .filter(function () {
          return "hidden" === e.css(this, "visibility");
        }).length
    );
  }
  (e.ui = e.ui || {}),
    e.extend(e.ui, {
      version: "1.11.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    }),
    e.fn.extend({
      scrollParent: function (t) {
        var i = this.css("position"),
          s = "absolute" === i,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents()
            .filter(function () {
              var t = e(this);
              return s && "static" === t.css("position")
                ? !1
                : n.test(
                    t.css("overflow") +
                      t.css("overflow-y") +
                      t.css("overflow-x")
                  );
            })
            .eq(0);
        return "fixed" !== i && a.length
          ? a
          : e(this[0].ownerDocument || document);
      },
      uniqueId: (function () {
        var e = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++e);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
        });
      },
    }),
    e.extend(e.expr[":"], {
      data: e.expr.createPseudo
        ? e.expr.createPseudo(function (t) {
            return function (i) {
              return !!e.data(i, t);
            };
          })
        : function (t, i, s) {
            return !!e.data(t, s[3]);
          },
      focusable: function (i) {
        return t(i, !isNaN(e.attr(i, "tabindex")));
      },
      tabbable: function (i) {
        var s = e.attr(i, "tabindex"),
          n = isNaN(s);
        return (n || s >= 0) && t(i, !n);
      },
    }),
    e("<a>").outerWidth(1).jquery ||
      e.each(["Width", "Height"], function (t, i) {
        function s(t, i, s, a) {
          return (
            e.each(n, function () {
              (i -= parseFloat(e.css(t, "padding" + this)) || 0),
                s &&
                  (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
            }),
            i
          );
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          a = i.toLowerCase(),
          o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight,
          };
        (e.fn["inner" + i] = function (t) {
          return void 0 === t
            ? o["inner" + i].call(this)
            : this.each(function () {
                e(this).css(a, s(this, t) + "px");
              });
        }),
          (e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t
              ? o["outer" + i].call(this, t)
              : this.each(function () {
                  e(this).css(a, s(this, t, !0, n) + "px");
                });
          });
      }),
    e.fn.addBack ||
      (e.fn.addBack = function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      }),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
      (e.fn.removeData = (function (t) {
        return function (i) {
          return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
        };
      })(e.fn.removeData)),
    (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    e.fn.extend({
      focus: (function (t) {
        return function (i, s) {
          return "number" == typeof i
            ? this.each(function () {
                var t = this;
                setTimeout(function () {
                  e(t).focus(), s && s.call(t);
                }, i);
              })
            : t.apply(this, arguments);
        };
      })(e.fn.focus),
      disableSelection: (function () {
        var e =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown";
        return function () {
          return this.bind(e + ".ui-disableSelection", function (e) {
            e.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
      zIndex: function (t) {
        if (void 0 !== t) return this.css("zIndex", t);
        if (this.length)
          for (var i, s, n = e(this[0]); n.length && n[0] !== document; ) {
            if (
              ((i = n.css("position")),
              ("absolute" === i || "relative" === i || "fixed" === i) &&
                ((s = parseInt(n.css("zIndex"), 10)), !isNaN(s) && 0 !== s))
            )
              return s;
            n = n.parent();
          }
        return 0;
      },
    }),
    (e.ui.plugin = {
      add: function (t, i, s) {
        var n,
          a = e.ui[t].prototype;
        for (n in s)
          (a.plugins[n] = a.plugins[n] || []), a.plugins[n].push([i, s[n]]);
      },
      call: function (e, t, i, s) {
        var n,
          a = e.plugins[t];
        if (
          a &&
          (s ||
            (e.element[0].parentNode &&
              11 !== e.element[0].parentNode.nodeType))
        )
          for (n = 0; a.length > n; n++)
            e.options[a[n][0]] && a[n][1].apply(e.element, i);
      },
    });
  var s = 0,
    n = Array.prototype.slice;
  (e.cleanData = (function (t) {
    return function (i) {
      var s, n, a;
      for (a = 0; null != (n = i[a]); a++)
        try {
          (s = e._data(n, "events")),
            s && s.remove && e(n).triggerHandler("remove");
        } catch (o) {}
      t(i);
    };
  })(e.cleanData)),
    (e.widget = function (t, i, s) {
      var n,
        a,
        o,
        r,
        h = {},
        l = t.split(".")[0];
      return (
        (t = t.split(".")[1]),
        (n = l + "-" + t),
        s || ((s = i), (i = e.Widget)),
        (e.expr[":"][n.toLowerCase()] = function (t) {
          return !!e.data(t, n);
        }),
        (e[l] = e[l] || {}),
        (a = e[l][t]),
        (o = e[l][t] =
          function (e, t) {
            return this._createWidget
              ? (arguments.length && this._createWidget(e, t), void 0)
              : new o(e, t);
          }),
        e.extend(o, a, {
          version: s.version,
          _proto: e.extend({}, s),
          _childConstructors: [],
        }),
        (r = new i()),
        (r.options = e.widget.extend({}, r.options)),
        e.each(s, function (t, s) {
          return e.isFunction(s)
            ? ((h[t] = (function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments);
                  },
                  n = function (e) {
                    return i.prototype[t].apply(this, e);
                  };
                return function () {
                  var t,
                    i = this._super,
                    a = this._superApply;
                  return (
                    (this._super = e),
                    (this._superApply = n),
                    (t = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = a),
                    t
                  );
                };
              })()),
              void 0)
            : ((h[t] = s), void 0);
        }),
        (o.prototype = e.widget.extend(
          r,
          { widgetEventPrefix: a ? r.widgetEventPrefix || t : t },
          h,
          { constructor: o, namespace: l, widgetName: t, widgetFullName: n }
        )),
        a
          ? (e.each(a._childConstructors, function (t, i) {
              var s = i.prototype;
              e.widget(s.namespace + "." + s.widgetName, o, i._proto);
            }),
            delete a._childConstructors)
          : i._childConstructors.push(o),
        e.widget.bridge(t, o),
        o
      );
    }),
    (e.widget.extend = function (t) {
      for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
        for (i in a[o])
          (s = a[o][i]),
            a[o].hasOwnProperty(i) &&
              void 0 !== s &&
              (t[i] = e.isPlainObject(s)
                ? e.isPlainObject(t[i])
                  ? e.widget.extend({}, t[i], s)
                  : e.widget.extend({}, s)
                : s);
      return t;
    }),
    (e.widget.bridge = function (t, i) {
      var s = i.prototype.widgetFullName || t;
      e.fn[t] = function (a) {
        var o = "string" == typeof a,
          r = n.call(arguments, 1),
          h = this;
        return (
          o
            ? this.each(function () {
                var i,
                  n = e.data(this, s);
                return "instance" === a
                  ? ((h = n), !1)
                  : n
                  ? e.isFunction(n[a]) && "_" !== a.charAt(0)
                    ? ((i = n[a].apply(n, r)),
                      i !== n && void 0 !== i
                        ? ((h = i && i.jquery ? h.pushStack(i.get()) : i), !1)
                        : void 0)
                    : e.error(
                        "no such method '" +
                          a +
                          "' for " +
                          t +
                          " widget instance"
                      )
                  : e.error(
                      "cannot call methods on " +
                        t +
                        " prior to initialization; " +
                        "attempted to call method '" +
                        a +
                        "'"
                    );
              })
            : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))),
              this.each(function () {
                var t = e.data(this, s);
                t
                  ? (t.option(a || {}), t._init && t._init())
                  : e.data(this, s, new i(a, this));
              })),
          h
        );
      };
    }),
    (e.Widget = function () {}),
    (e.Widget._childConstructors = []),
    (e.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { disabled: !1, create: null },
      _createWidget: function (t, i) {
        (i = e(i || this.defaultElement || this)[0]),
          (this.element = e(i)),
          (this.uuid = s++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = e()),
          (this.hoverable = e()),
          (this.focusable = e()),
          i !== this &&
            (e.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (e) {
                e.target === i && this.destroy();
              },
            }),
            (this.document = e(i.style ? i.ownerDocument : i.document || i)),
            (this.window = e(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = e.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: e.noop,
      _getCreateEventData: e.noop,
      _create: e.noop,
      _init: e.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            .removeData(e.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(
              this.widgetFullName + "-disabled " + "ui-state-disabled"
            ),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: e.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, i) {
        var s,
          n,
          a,
          o = t;
        if (0 === arguments.length) return e.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((o = {}), (s = t.split(".")), (t = s.shift()), s.length)) {
            for (
              n = o[t] = e.widget.extend({}, this.options[t]), a = 0;
              s.length - 1 > a;
              a++
            )
              (n[s[a]] = n[s[a]] || {}), (n = n[s[a]]);
            if (((t = s.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            o[t] = i;
          }
        return this._setOptions(o), this;
      },
      _setOptions: function (e) {
        var t;
        for (t in e) this._setOption(t, e[t]);
        return this;
      },
      _setOption: function (e, t) {
        return (
          (this.options[e] = t),
          "disabled" === e &&
            (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t),
            t &&
              (this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus"))),
          this
        );
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _on: function (t, i, s) {
        var n,
          a = this;
        "boolean" != typeof t && ((s = i), (i = t), (t = !1)),
          s
            ? ((i = n = e(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          e.each(s, function (s, o) {
            function r() {
              return t ||
                (a.options.disabled !== !0 &&
                  !e(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof o ? a[o] : o).apply(a, arguments)
                : void 0;
            }
            "string" != typeof o &&
              (r.guid = o.guid = o.guid || r.guid || e.guid++);
            var h = s.match(/^([\w:-]*)\s*(.*)$/),
              l = h[1] + a.eventNamespace,
              u = h[2];
            u ? n.delegate(u, l, r) : i.bind(l, r);
          });
      },
      _off: function (t, i) {
        (i =
          (i || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.unbind(i).undelegate(i),
          (this.bindings = e(this.bindings.not(t).get())),
          (this.focusable = e(this.focusable.not(t).get())),
          (this.hoverable = e(this.hoverable.not(t).get()));
      },
      _delay: function (e, t) {
        function i() {
          return ("string" == typeof e ? s[e] : e).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, t || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              e(t.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (t) {
              e(t.currentTarget).removeClass("ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              e(t.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (t) {
              e(t.currentTarget).removeClass("ui-state-focus");
            },
          });
      },
      _trigger: function (t, i, s) {
        var n,
          a,
          o = this.options[t];
        if (
          ((s = s || {}),
          (i = e.Event(i)),
          (i.type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (i.target = this.element[0]),
          (a = i.originalEvent))
        )
          for (n in a) n in i || (i[n] = a[n]);
        return (
          this.element.trigger(i, s),
          !(
            (e.isFunction(o) &&
              o.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
      e.Widget.prototype["_" + t] = function (s, n, a) {
        "string" == typeof n && (n = { effect: n });
        var o,
          r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : t;
        (n = n || {}),
          "number" == typeof n && (n = { duration: n }),
          (o = !e.isEmptyObject(n)),
          (n.complete = a),
          n.delay && s.delay(n.delay),
          o && e.effects && e.effects.effect[r]
            ? s[t](n)
            : r !== t && s[r]
            ? s[r](n.duration, n.easing, a)
            : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i();
              });
      };
    }),
    e.widget;
  var a = !1;
  e(document).mouseup(function () {
    a = !1;
  }),
    e.widget("ui.mouse", {
      version: "1.11.4",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var t = this;
        this.element
          .bind("mousedown." + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .bind("click." + this.widgetName, function (i) {
            return !0 === e.data(i.target, t.widgetName + ".preventClickEvent")
              ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (t) {
        if (!a) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(t),
            (this._mouseDownEvent = t);
          var i = this,
            s = 1 === t.which,
            n =
              "string" == typeof this.options.cancel && t.target.nodeName
                ? e(t.target).closest(this.options.cancel).length
                : !1;
          return s && !n && this._mouseCapture(t)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted = this._mouseStart(t) !== !1),
              !this._mouseStarted)
                ? (t.preventDefault(), !0)
                : (!0 ===
                    e.data(t.target, this.widgetName + ".preventClickEvent") &&
                    e.removeData(
                      t.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e);
                  }),
                  (this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e);
                  }),
                  this.document
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  t.preventDefault(),
                  (a = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (t) {
        if (this._mouseMoved) {
          if (
            e.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !t.button
          )
            return this._mouseUp(t);
          if (!t.which) return this._mouseUp(t);
        }
        return (
          (t.which || t.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, t) !== !1),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (t) {
        return (
          this.document
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            t.target === this._mouseDownEvent.target &&
              e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
          (a = !1),
          !1
        );
      },
      _mouseDistanceMet: function (e) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - e.pageX),
            Math.abs(this._mouseDownEvent.pageY - e.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    e.widget("ui.slider", e.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget" +
              " ui-widget-content" +
              " ui-corner-all"
          ),
          this._refresh(),
          this._setOption("disabled", this.options.disabled),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var t,
          i,
          s = this.options,
          n = this.element
            .find(".ui-slider-handle")
            .addClass("ui-state-default ui-corner-all"),
          a =
            "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          o = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            t = n.length;
          i > t;
          t++
        )
          o.push(a);
        (this.handles = n.add(e(o.join("")).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (t) {
            e(this).data("ui-slider-handle-index", t);
          });
      },
      _createRange: function () {
        var t = this.options,
          i = "";
        t.range
          ? (t.range === !0 &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : e.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass("ui-slider-range-min ui-slider-range-max")
                  .css({ left: "", bottom: "" })
              : ((this.range = e("<div></div>").appendTo(this.element)),
                (i = "ui-slider-range ui-widget-header ui-corner-all")),
            this.range.addClass(
              i +
                ("min" === t.range || "max" === t.range
                  ? " ui-slider-range-" + t.range
                  : "")
            ))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this.element.removeClass(
            "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
          ),
          this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u = this,
          d = this.options;
        return d.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: t.pageX, y: t.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (t) {
              var i = Math.abs(s - u.values(t));
              (n > i ||
                (n === i &&
                  (t === u._lastChangedValue || u.values(t) === d.min))) &&
                ((n = i), (a = e(this)), (o = t));
            }),
            (r = this._start(t, o)),
            r === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = o),
                a.addClass("ui-state-active").focus(),
                (h = a.offset()),
                (l = !e(t.target).parents().addBack().is(".ui-slider-handle")),
                (this._clickOffset = l
                  ? { left: 0, top: 0 }
                  : {
                      left: t.pageX - h.left - a.width() / 2,
                      top:
                        t.pageY -
                        h.top -
                        a.height() / 2 -
                        (parseInt(a.css("borderTopWidth"), 10) || 0) -
                        (parseInt(a.css("borderBottomWidth"), 10) || 0) +
                        (parseInt(a.css("marginTop"), 10) || 0),
                    }),
                this.handles.hasClass("ui-state-hover") || this._slide(t, o, s),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (e) {
        var t = { x: e.pageX, y: e.pageY },
          i = this._normValueFromMouse(t);
        return this._slide(e, this._handleIndex, i), !1;
      },
      _mouseStop: function (e) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(e, this._handleIndex),
          this._change(e, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (e) {
        var t, i, s, n, a;
        return (
          "horizontal" === this.orientation
            ? ((t = this.elementSize.width),
              (i =
                e.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((t = this.elementSize.height),
              (i =
                e.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / t),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          "vertical" === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (a = this._valueMin() + s * n),
          this._trimAlignValue(a)
        );
      },
      _start: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("start", e, i)
        );
      },
      _slide: function (e, t, i) {
        var s, n, a;
        this.options.values && this.options.values.length
          ? ((s = this.values(t ? 0 : 1)),
            2 === this.options.values.length &&
              this.options.range === !0 &&
              ((0 === t && i > s) || (1 === t && s > i)) &&
              (i = s),
            i !== this.values(t) &&
              ((n = this.values()),
              (n[t] = i),
              (a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n,
              })),
              (s = this.values(t ? 0 : 1)),
              a !== !1 && this.values(t, i)))
          : i !== this.value() &&
            ((a = this._trigger("slide", e, {
              handle: this.handles[t],
              value: i,
            })),
            a !== !1 && this.value(i));
      },
      _stop: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("stop", e, i);
      },
      _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[t], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
            (this._lastChangedValue = t),
            this._trigger("change", e, i);
        }
      },
      value: function (e) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(e)),
            this._refreshValue(),
            this._change(null, 0),
            void 0)
          : this._value();
      },
      values: function (t, i) {
        var s, n, a;
        if (arguments.length > 1)
          return (
            (this.options.values[t] = this._trimAlignValue(i)),
            this._refreshValue(),
            this._change(null, t),
            void 0
          );
        if (!arguments.length) return this._values();
        if (!e.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(t)
            : this.value();
        for (
          s = this.options.values, n = arguments[0], a = 0;
          s.length > a;
          a += 1
        )
          (s[a] = this._trimAlignValue(n[a])), this._change(null, a);
        this._refreshValue();
      },
      _setOption: function (t, i) {
        var s,
          n = 0;
        switch (
          ("range" === t &&
            this.options.range === !0 &&
            ("min" === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          e.isArray(this.options.values) && (n = this.options.values.length),
          "disabled" === t &&
            this.element.toggleClass("ui-state-disabled", !!i),
          this._super(t, i),
          t)
        ) {
          case "orientation":
            this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), s = 0;
              n > s;
              s += 1
            )
              this._change(null, s);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _value: function () {
        var e = this.options.value;
        return (e = this._trimAlignValue(e));
      },
      _values: function (e) {
        var t, i, s;
        if (arguments.length)
          return (t = this.options.values[e]), (t = this._trimAlignValue(t));
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (e) {
        if (this._valueMin() >= e) return this._valueMin();
        if (e >= this._valueMax()) return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1,
          i = (e - this._valueMin()) % t,
          s = e - i;
        return (
          2 * Math.abs(i) >= t && (s += i > 0 ? t : -t),
          parseFloat(s.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var e = this.options.max,
          t = this._valueMin(),
          i = this.options.step,
          s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
        (e = s + t), (this.max = parseFloat(e.toFixed(this._precision())));
      },
      _precision: function () {
        var e = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (e = Math.max(e, this._precisionOf(this.options.min))),
          e
        );
      },
      _precisionOf: function (e) {
        var t = "" + e,
          i = t.indexOf(".");
        return -1 === i ? 0 : t.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshValue: function () {
        var t,
          i,
          s,
          n,
          a,
          o = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          u = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (s) {
              (i =
                100 *
                ((h.values(s) - h._valueMin()) /
                  (h._valueMax() - h._valueMin()))),
                (u["horizontal" === h.orientation ? "left" : "bottom"] =
                  i + "%"),
                e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate),
                h.options.range === !0 &&
                  ("horizontal" === h.orientation
                    ? (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? "animate" : "css"]({ left: i + "%" }, r.animate),
                      1 === s &&
                        h.range[l ? "animate" : "css"](
                          { width: i - t + "%" },
                          { queue: !1, duration: r.animate }
                        ))
                    : (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? "animate" : "css"](
                            { bottom: i + "%" },
                            r.animate
                          ),
                      1 === s &&
                        h.range[l ? "animate" : "css"](
                          { height: i - t + "%" },
                          { queue: !1, duration: r.animate }
                        ))),
                (t = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (a = this._valueMax()),
            (i = a !== n ? 100 * ((s - n) / (a - n)) : 0),
            (u["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate),
            "min" === o &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ width: i + "%" }, r.animate),
            "max" === o &&
              "horizontal" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { width: 100 - i + "%" },
                { queue: !1, duration: r.animate }
              ),
            "min" === o &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ height: i + "%" }, r.animate),
            "max" === o &&
              "vertical" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { height: 100 - i + "%" },
                { queue: !1, duration: r.animate }
              ));
      },
      _handleEvents: {
        keydown: function (t) {
          var i,
            s,
            n,
            a,
            o = e(t.target).data("ui-slider-handle-index");
          switch (t.keyCode) {
            case e.ui.keyCode.HOME:
            case e.ui.keyCode.END:
            case e.ui.keyCode.PAGE_UP:
            case e.ui.keyCode.PAGE_DOWN:
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (
                (t.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  e(t.target).addClass("ui-state-active"),
                  (i = this._start(t, o)),
                  i === !1))
              )
                return;
          }
          switch (
            ((a = this.options.step),
            (s = n =
              this.options.values && this.options.values.length
                ? this.values(o)
                : this.value()),
            t.keyCode)
          ) {
            case e.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case e.ui.keyCode.END:
              n = this._valueMax();
              break;
            case e.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(
                s + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case e.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(
                s - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + a);
              break;
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - a);
          }
          this._slide(t, o, n);
        },
        keyup: function (t) {
          var i = e(t.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(t, i),
            this._change(t, i),
            e(t.target).removeClass("ui-state-active"));
        },
      },
    });
});

/*=============================================
=            13. Light Gallery          =
=============================================*/

/*! lightgallery - v1.6.11 - 2018-05-22
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2018 Sachin N; Licensed GPLv3 */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = b(require("jquery")))
    : b(a.jQuery);
})(this, function (a) {
  !(function () {
    "use strict";
    function b(b, d) {
      if (
        ((this.el = b),
        (this.$el = a(b)),
        (this.s = a.extend({}, c, d)),
        this.s.dynamic &&
          "undefined" !== this.s.dynamicEl &&
          this.s.dynamicEl.constructor === Array &&
          !this.s.dynamicEl.length)
      )
        throw "When using dynamic mode, you must also define dynamicEl as an Array.";
      return (
        (this.modules = {}),
        (this.lGalleryOn = !1),
        (this.lgBusy = !1),
        (this.hideBartimeout = !1),
        (this.isTouch = "ontouchstart" in document.documentElement),
        this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
        this.s.dynamic
          ? (this.$items = this.s.dynamicEl)
          : "this" === this.s.selector
          ? (this.$items = this.$el)
          : "" !== this.s.selector
          ? this.s.selectWithin
            ? (this.$items = a(this.s.selectWithin).find(this.s.selector))
            : (this.$items = this.$el.find(a(this.s.selector)))
          : (this.$items = this.$el.children()),
        (this.$slide = ""),
        (this.$outer = ""),
        this.init(),
        this
      );
    }
    var c = {
      mode: "lg-slide",
      cssEasing: "ease",
      easing: "linear",
      speed: 600,
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 150,
      hideBarsDelay: 6e3,
      useLeft: !1,
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: !1,
      iframeMaxWidth: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      galleryId: 1,
    };
    (b.prototype.init = function () {
      var b = this;
      b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
      var c = window.location.hash;
      c.indexOf("lg=" + this.s.galleryId) > 0 &&
        ((b.index = parseInt(c.split("&slide=")[1], 10)),
        a("body").addClass("lg-from-hash"),
        a("body").hasClass("lg-on") ||
          (setTimeout(function () {
            b.build(b.index);
          }),
          a("body").addClass("lg-on"))),
        b.s.dynamic
          ? (b.$el.trigger("onBeforeOpen.lg"),
            (b.index = b.s.index || 0),
            a("body").hasClass("lg-on") ||
              setTimeout(function () {
                b.build(b.index), a("body").addClass("lg-on");
              }))
          : b.$items.on("click.lgcustom", function (c) {
              try {
                c.preventDefault(), c.preventDefault();
              } catch (a) {
                c.returnValue = !1;
              }
              b.$el.trigger("onBeforeOpen.lg"),
                (b.index = b.s.index || b.$items.index(this)),
                a("body").hasClass("lg-on") ||
                  (b.build(b.index), a("body").addClass("lg-on"));
            });
    }),
      (b.prototype.build = function (b) {
        var c = this;
        c.structure(),
          a.each(a.fn.lightGallery.modules, function (b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
          }),
          c.slide(b, !1, !1, !1),
          c.s.keyPress && c.keyPress(),
          c.$items.length > 1
            ? (c.arrow(),
              setTimeout(function () {
                c.enableDrag(), c.enableSwipe();
              }, 50),
              c.s.mousewheel && c.mousewheel())
            : c.$slide.on("click.lg", function () {
                c.$el.trigger("onSlideClick.lg");
              }),
          c.counter(),
          c.closeGallery(),
          c.$el.trigger("onAfterOpen.lg"),
          c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
            c.$outer.removeClass("lg-hide-items"),
              clearTimeout(c.hideBartimeout),
              (c.hideBartimeout = setTimeout(function () {
                c.$outer.addClass("lg-hide-items");
              }, c.s.hideBarsDelay));
          }),
          c.$outer.trigger("mousemove.lg");
      }),
      (b.prototype.structure = function () {
        var b,
          c = "",
          d = "",
          e = 0,
          f = "",
          g = this;
        for (
          a("body").append('<div class="lg-backdrop"></div>'),
            a(".lg-backdrop").css(
              "transition-duration",
              this.s.backdropDuration + "ms"
            ),
            e = 0;
          e < this.$items.length;
          e++
        )
          c += '<div class="lg-item"></div>';
        if (
          (this.s.controls &&
            this.$items.length > 1 &&
            (d =
              '<div class="lg-actions"><button class="lg-prev lg-icon">' +
              this.s.prevHtml +
              '</button><button class="lg-next lg-icon">' +
              this.s.nextHtml +
              "</button></div>"),
          ".lg-sub-html" === this.s.appendSubHtmlTo &&
            (f = '<div class="lg-sub-html"></div>'),
          (b =
            '<div class="lg-outer ' +
            this.s.addClass +
            " " +
            this.s.startClass +
            '"><div class="lg" style="width:' +
            this.s.width +
            "; height:" +
            this.s.height +
            '"><div class="lg-inner">' +
            c +
            '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' +
            d +
            f +
            "</div></div>"),
          a("body").append(b),
          (this.$outer = a(".lg-outer")),
          (this.$slide = this.$outer.find(".lg-item")),
          this.s.useLeft
            ? (this.$outer.addClass("lg-use-left"), (this.s.mode = "lg-slide"))
            : this.$outer.addClass("lg-use-css3"),
          g.setTop(),
          a(window).on("resize.lg orientationchange.lg", function () {
            setTimeout(function () {
              g.setTop();
            }, 100);
          }),
          this.$slide.eq(this.index).addClass("lg-current"),
          this.doCss()
            ? this.$outer.addClass("lg-css3")
            : (this.$outer.addClass("lg-css"), (this.s.speed = 0)),
          this.$outer.addClass(this.s.mode),
          this.s.enableDrag &&
            this.$items.length > 1 &&
            this.$outer.addClass("lg-grab"),
          this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
          this.doCss())
        ) {
          var h = this.$outer.find(".lg-inner");
          h.css("transition-timing-function", this.s.cssEasing),
            h.css("transition-duration", this.s.speed + "ms");
        }
        setTimeout(function () {
          a(".lg-backdrop").addClass("in");
        }),
          setTimeout(function () {
            g.$outer.addClass("lg-visible");
          }, this.s.backdropDuration),
          this.s.download &&
            this.$outer
              .find(".lg-toolbar")
              .append(
                '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
              ),
          (this.prevScrollTop = a(window).scrollTop());
      }),
      (b.prototype.setTop = function () {
        if ("100%" !== this.s.height) {
          var b = a(window).height(),
            c = (b - parseInt(this.s.height, 10)) / 2,
            d = this.$outer.find(".lg");
          b >= parseInt(this.s.height, 10)
            ? d.css("top", c + "px")
            : d.css("top", "0px");
        }
      }),
      (b.prototype.doCss = function () {
        return !!(function () {
          var a = [
              "transition",
              "MozTransition",
              "WebkitTransition",
              "OTransition",
              "msTransition",
              "KhtmlTransition",
            ],
            b = document.documentElement,
            c = 0;
          for (c = 0; c < a.length; c++) if (a[c] in b.style) return !0;
        })();
      }),
      (b.prototype.isVideo = function (a, b) {
        var c;
        if (
          ((c = this.s.dynamic
            ? this.s.dynamicEl[b].html
            : this.$items.eq(b).attr("data-html")),
          !a)
        )
          return c
            ? { html5: !0 }
            : (console.error(
                "lightGallery :- data-src is not pvovided on slide item " +
                  (b + 1) +
                  ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"
              ),
              !1);
        var d = a.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
          ),
          e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
          f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
          g = a.match(
            /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
          );
        return d
          ? { youtube: d }
          : e
          ? { vimeo: e }
          : f
          ? { dailymotion: f }
          : g
          ? { vk: g }
          : void 0;
      }),
      (b.prototype.counter = function () {
        this.s.counter &&
          a(this.s.appendCounterTo).append(
            '<div id="lg-counter"><span id="lg-counter-current">' +
              (parseInt(this.index, 10) + 1) +
              '</span> / <span id="lg-counter-all">' +
              this.$items.length +
              "</span></div>"
          );
      }),
      (b.prototype.addHtml = function (b) {
        var c,
          d,
          e = null;
        if (
          (this.s.dynamic
            ? this.s.dynamicEl[b].subHtmlUrl
              ? (c = this.s.dynamicEl[b].subHtmlUrl)
              : (e = this.s.dynamicEl[b].subHtml)
            : ((d = this.$items.eq(b)),
              d.attr("data-sub-html-url")
                ? (c = d.attr("data-sub-html-url"))
                : ((e = d.attr("data-sub-html")),
                  this.s.getCaptionFromTitleOrAlt &&
                    !e &&
                    (e =
                      d.attr("title") || d.find("img").first().attr("alt")))),
          !c)
        )
          if (void 0 !== e && null !== e) {
            var f = e.substring(0, 1);
            ("." !== f && "#" !== f) ||
              (e =
                this.s.subHtmlSelectorRelative && !this.s.dynamic
                  ? d.find(e).html()
                  : a(e).html());
          } else e = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo
          ? c
            ? this.$outer.find(this.s.appendSubHtmlTo).load(c)
            : this.$outer.find(this.s.appendSubHtmlTo).html(e)
          : c
          ? this.$slide.eq(b).load(c)
          : this.$slide.eq(b).append(e),
          void 0 !== e &&
            null !== e &&
            ("" === e
              ? this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
          this.$el.trigger("onAfterAppendSubHtml.lg", [b]);
      }),
      (b.prototype.preload = function (a) {
        var b = 1,
          c = 1;
        for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)
          this.loadContent(a + b, !1, 0);
        for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
          this.loadContent(a - c, !1, 0);
      }),
      (b.prototype.loadContent = function (b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k = this,
          l = !1,
          m = function (b) {
            for (var c = [], d = [], e = 0; e < b.length; e++) {
              var g = b[e].split(" ");
              "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1]);
            }
            for (var h = a(window).width(), i = 0; i < c.length; i++)
              if (parseInt(c[i], 10) > h) {
                f = d[i];
                break;
              }
          };
        if (k.s.dynamic) {
          if (
            (k.s.dynamicEl[b].poster &&
              ((l = !0), (g = k.s.dynamicEl[b].poster)),
            (j = k.s.dynamicEl[b].html),
            (f = k.s.dynamicEl[b].src),
            k.s.dynamicEl[b].responsive)
          ) {
            m(k.s.dynamicEl[b].responsive.split(","));
          }
          (h = k.s.dynamicEl[b].srcset), (i = k.s.dynamicEl[b].sizes);
        } else {
          if (
            (k.$items.eq(b).attr("data-poster") &&
              ((l = !0), (g = k.$items.eq(b).attr("data-poster"))),
            (j = k.$items.eq(b).attr("data-html")),
            (f =
              k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src")),
            k.$items.eq(b).attr("data-responsive"))
          ) {
            m(k.$items.eq(b).attr("data-responsive").split(","));
          }
          (h = k.$items.eq(b).attr("data-srcset")),
            (i = k.$items.eq(b).attr("data-sizes"));
        }
        var n = !1;
        k.s.dynamic
          ? k.s.dynamicEl[b].iframe && (n = !0)
          : "true" === k.$items.eq(b).attr("data-iframe") && (n = !0);
        var o = k.isVideo(f, b);
        if (!k.$slide.eq(b).hasClass("lg-loaded")) {
          if (n)
            k.$slide
              .eq(b)
              .prepend(
                '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                  k.s.iframeMaxWidth +
                  '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                  f +
                  '"  allowfullscreen="true"></iframe></div></div>'
              );
          else if (l) {
            var p = "";
            (p =
              o && o.youtube
                ? "lg-has-youtube"
                : o && o.vimeo
                ? "lg-has-vimeo"
                : "lg-has-html5"),
              k.$slide
                .eq(b)
                .prepend(
                  '<div class="lg-video-cont ' +
                    p +
                    ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                    g +
                    '" /></div></div>'
                );
          } else
            o
              ? (k.$slide
                  .eq(b)
                  .prepend(
                    '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                  ),
                k.$el.trigger("hasVideo.lg", [b, f, j]))
              : k.$slide
                  .eq(b)
                  .prepend(
                    '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                      f +
                      '" /></div>'
                  );
          if (
            (k.$el.trigger("onAferAppendSlide.lg", [b]),
            (e = k.$slide.eq(b).find(".lg-object")),
            i && e.attr("sizes", i),
            h)
          ) {
            e.attr("srcset", h);
            try {
              picturefill({ elements: [e[0]] });
            } catch (a) {
              console.warn(
                "lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document."
              );
            }
          }
          ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b),
            k.$slide.eq(b).addClass("lg-loaded");
        }
        k.$slide
          .eq(b)
          .find(".lg-object")
          .on("load.lg error.lg", function () {
            var c = 0;
            d && !a("body").hasClass("lg-from-hash") && (c = d),
              setTimeout(function () {
                k.$slide.eq(b).addClass("lg-complete"),
                  k.$el.trigger("onSlideItemLoad.lg", [b, d || 0]);
              }, c);
          }),
          o && o.html5 && !l && k.$slide.eq(b).addClass("lg-complete"),
          !0 === c &&
            (k.$slide.eq(b).hasClass("lg-complete")
              ? k.preload(b)
              : k.$slide
                  .eq(b)
                  .find(".lg-object")
                  .on("load.lg error.lg", function () {
                    k.preload(b);
                  }));
      }),
      (b.prototype.slide = function (b, c, d, e) {
        var f = this.$outer.find(".lg-current").index(),
          g = this;
        if (!g.lGalleryOn || f !== b) {
          var h = this.$slide.length,
            i = g.lGalleryOn ? this.s.speed : 0;
          if (!g.lgBusy) {
            if (this.s.download) {
              var j;
              (j = g.s.dynamic
                ? !1 !== g.s.dynamicEl[b].downloadUrl &&
                  (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src)
                : "false" !== g.$items.eq(b).attr("data-download-url") &&
                  (g.$items.eq(b).attr("data-download-url") ||
                    g.$items.eq(b).attr("href") ||
                    g.$items.eq(b).attr("data-src"))),
                j
                  ? (a("#lg-download").attr("href", j),
                    g.$outer.removeClass("lg-hide-download"))
                  : g.$outer.addClass("lg-hide-download");
            }
            if (
              (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]),
              (g.lgBusy = !0),
              clearTimeout(g.hideBartimeout),
              ".lg-sub-html" === this.s.appendSubHtmlTo &&
                setTimeout(function () {
                  g.addHtml(b);
                }, i),
              this.arrowDisable(b),
              e || (b < f ? (e = "prev") : b > f && (e = "next")),
              c)
            ) {
              this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
              var k, l;
              h > 2
                ? ((k = b - 1),
                  (l = b + 1),
                  0 === b && f === h - 1
                    ? ((l = 0), (k = h - 1))
                    : b === h - 1 && 0 === f && ((l = 0), (k = h - 1)))
                : ((k = 0), (l = 1)),
                "prev" === e
                  ? g.$slide.eq(l).addClass("lg-next-slide")
                  : g.$slide.eq(k).addClass("lg-prev-slide"),
                g.$slide.eq(b).addClass("lg-current");
            } else
              g.$outer.addClass("lg-no-trans"),
                this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                "prev" === e
                  ? (this.$slide.eq(b).addClass("lg-prev-slide"),
                    this.$slide.eq(f).addClass("lg-next-slide"))
                  : (this.$slide.eq(b).addClass("lg-next-slide"),
                    this.$slide.eq(f).addClass("lg-prev-slide")),
                setTimeout(function () {
                  g.$slide.removeClass("lg-current"),
                    g.$slide.eq(b).addClass("lg-current"),
                    g.$outer.removeClass("lg-no-trans");
                }, 50);
            g.lGalleryOn
              ? (setTimeout(function () {
                  g.loadContent(b, !0, 0);
                }, this.s.speed + 50),
                setTimeout(function () {
                  (g.lgBusy = !1),
                    g.$el.trigger("onAfterSlide.lg", [f, b, c, d]);
                }, this.s.speed))
              : (g.loadContent(b, !0, g.s.backdropDuration),
                (g.lgBusy = !1),
                g.$el.trigger("onAfterSlide.lg", [f, b, c, d])),
              (g.lGalleryOn = !0),
              this.s.counter && a("#lg-counter-current").text(b + 1);
          }
          g.index = b;
        }
      }),
      (b.prototype.goToNextSlide = function (a) {
        var b = this,
          c = b.s.loop;
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index + 1 < b.$slide.length
              ? (b.index++,
                b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
                b.slide(b.index, a, !1, "next"))
              : c
              ? ((b.index = 0),
                b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
                b.slide(b.index, a, !1, "next"))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass("lg-right-end"),
                setTimeout(function () {
                  b.$outer.removeClass("lg-right-end");
                }, 400)));
      }),
      (b.prototype.goToPrevSlide = function (a) {
        var b = this,
          c = b.s.loop;
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index > 0
              ? (b.index--,
                b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
                b.slide(b.index, a, !1, "prev"))
              : c
              ? ((b.index = b.$items.length - 1),
                b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
                b.slide(b.index, a, !1, "prev"))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass("lg-left-end"),
                setTimeout(function () {
                  b.$outer.removeClass("lg-left-end");
                }, 400)));
      }),
      (b.prototype.keyPress = function () {
        var b = this;
        this.$items.length > 1 &&
          a(window).on("keyup.lg", function (a) {
            b.$items.length > 1 &&
              (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()),
              39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()));
          }),
          a(window).on("keydown.lg", function (a) {
            !0 === b.s.escKey &&
              27 === a.keyCode &&
              (a.preventDefault(),
              b.$outer.hasClass("lg-thumb-open")
                ? b.$outer.removeClass("lg-thumb-open")
                : b.destroy());
          });
      }),
      (b.prototype.arrow = function () {
        var a = this;
        this.$outer.find(".lg-prev").on("click.lg", function () {
          a.goToPrevSlide();
        }),
          this.$outer.find(".lg-next").on("click.lg", function () {
            a.goToNextSlide();
          });
      }),
      (b.prototype.arrowDisable = function (a) {
        !this.s.loop &&
          this.s.hideControlOnEnd &&
          (a + 1 < this.$slide.length
            ? this.$outer
                .find(".lg-next")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-next")
                .attr("disabled", "disabled")
                .addClass("disabled"),
          a > 0
            ? this.$outer
                .find(".lg-prev")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-prev")
                .attr("disabled", "disabled")
                .addClass("disabled"));
      }),
      (b.prototype.setTranslate = function (a, b, c) {
        this.s.useLeft
          ? a.css("left", b)
          : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" });
      }),
      (b.prototype.touchMove = function (b, c) {
        var d = c - b;
        Math.abs(d) > 15 &&
          (this.$outer.addClass("lg-dragging"),
          this.setTranslate(this.$slide.eq(this.index), d, 0),
          this.setTranslate(
            a(".lg-prev-slide"),
            -this.$slide.eq(this.index).width() + d,
            0
          ),
          this.setTranslate(
            a(".lg-next-slide"),
            this.$slide.eq(this.index).width() + d,
            0
          ));
      }),
      (b.prototype.touchEnd = function (a) {
        var b = this;
        "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
          this.$slide
            .not(".lg-current, .lg-prev-slide, .lg-next-slide")
            .css("opacity", "0"),
          setTimeout(function () {
            b.$outer.removeClass("lg-dragging"),
              a < 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToNextSlide(!0)
                : a > 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToPrevSlide(!0)
                : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
              b.$slide.removeAttr("style");
          }),
          setTimeout(function () {
            b.$outer.hasClass("lg-dragging") ||
              "lg-slide" === b.s.mode ||
              b.$outer.removeClass("lg-slide");
          }, b.s.speed + 100);
      }),
      (b.prototype.enableSwipe = function () {
        var a = this,
          b = 0,
          c = 0,
          d = !1;
        a.s.enableSwipe &&
          a.doCss() &&
          (a.$slide.on("touchstart.lg", function (c) {
            a.$outer.hasClass("lg-zoomed") ||
              a.lgBusy ||
              (c.preventDefault(),
              a.manageSwipeClass(),
              (b = c.originalEvent.targetTouches[0].pageX));
          }),
          a.$slide.on("touchmove.lg", function (e) {
            a.$outer.hasClass("lg-zoomed") ||
              (e.preventDefault(),
              (c = e.originalEvent.targetTouches[0].pageX),
              a.touchMove(b, c),
              (d = !0));
          }),
          a.$slide.on("touchend.lg", function () {
            a.$outer.hasClass("lg-zoomed") ||
              (d
                ? ((d = !1), a.touchEnd(c - b))
                : a.$el.trigger("onSlideClick.lg"));
          }));
      }),
      (b.prototype.enableDrag = function () {
        var b = this,
          c = 0,
          d = 0,
          e = !1,
          f = !1;
        b.s.enableDrag &&
          b.doCss() &&
          (b.$slide.on("mousedown.lg", function (d) {
            b.$outer.hasClass("lg-zoomed") ||
              b.lgBusy ||
              a(d.target).text().trim() ||
              (d.preventDefault(),
              b.manageSwipeClass(),
              (c = d.pageX),
              (e = !0),
              (b.$outer.scrollLeft += 1),
              (b.$outer.scrollLeft -= 1),
              b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
              b.$el.trigger("onDragstart.lg"));
          }),
          a(window).on("mousemove.lg", function (a) {
            e &&
              ((f = !0),
              (d = a.pageX),
              b.touchMove(c, d),
              b.$el.trigger("onDragmove.lg"));
          }),
          a(window).on("mouseup.lg", function (g) {
            f
              ? ((f = !1), b.touchEnd(d - c), b.$el.trigger("onDragend.lg"))
              : (a(g.target).hasClass("lg-object") ||
                  a(g.target).hasClass("lg-video-play")) &&
                b.$el.trigger("onSlideClick.lg"),
              e &&
                ((e = !1),
                b.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
          }));
      }),
      (b.prototype.manageSwipeClass = function () {
        var a = this.index + 1,
          b = this.index - 1;
        this.s.loop &&
          this.$slide.length > 2 &&
          (0 === this.index
            ? (b = this.$slide.length - 1)
            : this.index === this.$slide.length - 1 && (a = 0)),
          this.$slide.removeClass("lg-next-slide lg-prev-slide"),
          b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
          this.$slide.eq(a).addClass("lg-next-slide");
      }),
      (b.prototype.mousewheel = function () {
        var a = this;
        a.$outer.on("mousewheel.lg", function (b) {
          b.deltaY &&
            (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
            b.preventDefault());
        });
      }),
      (b.prototype.closeGallery = function () {
        var b = this,
          c = !1;
        this.$outer.find(".lg-close").on("click.lg", function () {
          b.destroy();
        }),
          b.s.closable &&
            (b.$outer.on("mousedown.lg", function (b) {
              c = !!(
                a(b.target).is(".lg-outer") ||
                a(b.target).is(".lg-item ") ||
                a(b.target).is(".lg-img-wrap")
              );
            }),
            b.$outer.on("mousemove.lg", function () {
              c = !1;
            }),
            b.$outer.on("mouseup.lg", function (d) {
              (a(d.target).is(".lg-outer") ||
                a(d.target).is(".lg-item ") ||
                (a(d.target).is(".lg-img-wrap") && c)) &&
                (b.$outer.hasClass("lg-dragging") || b.destroy());
            }));
      }),
      (b.prototype.destroy = function (b) {
        var c = this;
        b ||
          (c.$el.trigger("onBeforeClose.lg"),
          a(window).scrollTop(c.prevScrollTop)),
          b &&
            (c.s.dynamic || this.$items.off("click.lg click.lgcustom"),
            a.removeData(c.el, "lightGallery")),
          this.$el.off(".lg.tm"),
          a.each(a.fn.lightGallery.modules, function (a) {
            c.modules[a] && c.modules[a].destroy();
          }),
          (this.lGalleryOn = !1),
          clearTimeout(c.hideBartimeout),
          (this.hideBartimeout = !1),
          a(window).off(".lg"),
          a("body").removeClass("lg-on lg-from-hash"),
          c.$outer && c.$outer.removeClass("lg-visible"),
          a(".lg-backdrop").removeClass("in"),
          setTimeout(function () {
            c.$outer && c.$outer.remove(),
              a(".lg-backdrop").remove(),
              b || c.$el.trigger("onCloseAfter.lg");
          }, c.s.backdropDuration + 50);
      }),
      (a.fn.lightGallery = function (c) {
        return this.each(function () {
          if (a.data(this, "lightGallery"))
            try {
              a(this).data("lightGallery").init();
            } catch (a) {
              console.error("lightGallery has not initiated properly");
            }
          else a.data(this, "lightGallery", new b(this, c));
        });
      }),
      (a.fn.lightGallery.modules = {});
  })();
}),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = {
          autoplay: !1,
          pause: 5e3,
          progressBar: !0,
          fourceAutoplay: !1,
          autoplayControls: !0,
          appendAutoplayControlsTo: ".lg-toolbar",
        },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.$el = a(c)),
            !(this.core.$items.length < 2) &&
              ((this.core.s = a.extend({}, b, this.core.s)),
              (this.interval = !1),
              (this.fromAuto = !0),
              (this.canceledOnTouch = !1),
              (this.fourceAutoplayTemp = this.core.s.fourceAutoplay),
              this.core.doCss() || (this.core.s.progressBar = !1),
              this.init(),
              this)
          );
        };
      (c.prototype.init = function () {
        var a = this;
        a.core.s.autoplayControls && a.controls(),
          a.core.s.progressBar &&
            a.core.$outer
              .find(".lg")
              .append(
                '<div class="lg-progress-bar"><div class="lg-progress"></div></div>'
              ),
          a.progress(),
          a.core.s.autoplay &&
            a.$el.one("onSlideItemLoad.lg.tm", function () {
              a.startlAuto();
            }),
          a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
            a.interval && (a.cancelAuto(), (a.canceledOnTouch = !0));
          }),
          a.$el.on(
            "onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",
            function () {
              !a.interval &&
                a.canceledOnTouch &&
                (a.startlAuto(), (a.canceledOnTouch = !1));
            }
          );
      }),
        (c.prototype.progress = function () {
          var a,
            b,
            c = this;
          c.$el.on("onBeforeSlide.lg.tm", function () {
            c.core.s.progressBar &&
              c.fromAuto &&
              ((a = c.core.$outer.find(".lg-progress-bar")),
              (b = c.core.$outer.find(".lg-progress")),
              c.interval &&
                (b.removeAttr("style"),
                a.removeClass("lg-start"),
                setTimeout(function () {
                  b.css(
                    "transition",
                    "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"
                  ),
                    a.addClass("lg-start");
                }, 20))),
              c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(),
              (c.fromAuto = !1);
          });
        }),
        (c.prototype.controls = function () {
          var b = this;
          a(this.core.s.appendAutoplayControlsTo).append(
            '<span class="lg-autoplay-button lg-icon"></span>'
          ),
            b.core.$outer
              .find(".lg-autoplay-button")
              .on("click.lg", function () {
                a(b.core.$outer).hasClass("lg-show-autoplay")
                  ? (b.cancelAuto(), (b.core.s.fourceAutoplay = !1))
                  : b.interval ||
                    (b.startlAuto(),
                    (b.core.s.fourceAutoplay = b.fourceAutoplayTemp));
              });
        }),
        (c.prototype.startlAuto = function () {
          var a = this;
          a.core.$outer
            .find(".lg-progress")
            .css(
              "transition",
              "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"
            ),
            a.core.$outer.addClass("lg-show-autoplay"),
            a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
            (a.interval = setInterval(function () {
              a.core.index + 1 < a.core.$items.length
                ? a.core.index++
                : (a.core.index = 0),
                (a.fromAuto = !0),
                a.core.slide(a.core.index, !1, !1, "next");
            }, a.core.s.speed + a.core.s.pause));
        }),
        (c.prototype.cancelAuto = function () {
          clearInterval(this.interval),
            (this.interval = !1),
            this.core.$outer.find(".lg-progress").removeAttr("style"),
            this.core.$outer.removeClass("lg-show-autoplay"),
            this.core.$outer.find(".lg-progress-bar").removeClass("lg-start");
        }),
        (c.prototype.destroy = function () {
          this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove();
        }),
        (a.fn.lightGallery.modules.autoplay = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = { fullScreen: !0 },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.$el = a(c)),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var a = "";
        if (this.core.s.fullScreen) {
          if (
            !(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            )
          )
            return;
          (a = '<span class="lg-fullscreen lg-icon"></span>'),
            this.core.$outer.find(".lg-toolbar").append(a),
            this.fullScreen();
        }
      }),
        (c.prototype.requestFullscreen = function () {
          var a = document.documentElement;
          a.requestFullscreen
            ? a.requestFullscreen()
            : a.msRequestFullscreen
            ? a.msRequestFullscreen()
            : a.mozRequestFullScreen
            ? a.mozRequestFullScreen()
            : a.webkitRequestFullscreen && a.webkitRequestFullscreen();
        }),
        (c.prototype.exitFullscreen = function () {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.msExitFullscreen
            ? document.msExitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen && document.webkitExitFullscreen();
        }),
        (c.prototype.fullScreen = function () {
          var b = this;
          a(document).on(
            "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",
            function () {
              b.core.$outer.toggleClass("lg-fullscreen-on");
            }
          ),
            this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
              document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.webkitFullscreenElement ||
              document.msFullscreenElement
                ? b.exitFullscreen()
                : b.requestFullscreen();
            });
        }),
        (c.prototype.destroy = function () {
          this.exitFullscreen(),
            a(document).off(
              "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg"
            );
        }),
        (a.fn.lightGallery.modules.fullscreen = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = { pager: !1 },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.$el = a(c)),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.pager && this.core.$items.length > 1 && this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var b,
          c,
          d,
          e = this,
          f = "";
        if (
          (e.core.$outer
            .find(".lg")
            .append('<div class="lg-pager-outer"></div>'),
          e.core.s.dynamic)
        )
          for (var g = 0; g < e.core.s.dynamicEl.length; g++)
            f +=
              '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
              e.core.s.dynamicEl[g].thumb +
              '" /></div></span>';
        else
          e.core.$items.each(function () {
            e.core.s.exThumbImage
              ? (f +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  a(this).attr(e.core.s.exThumbImage) +
                  '" /></div></span>')
              : (f +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  a(this).find("img").attr("src") +
                  '" /></div></span>');
          });
        (c = e.core.$outer.find(".lg-pager-outer")),
          c.html(f),
          (b = e.core.$outer.find(".lg-pager-cont")),
          b.on("click.lg touchend.lg", function () {
            var b = a(this);
            (e.core.index = b.index()), e.core.slide(e.core.index, !1, !0, !1);
          }),
          c.on("mouseover.lg", function () {
            clearTimeout(d), c.addClass("lg-pager-hover");
          }),
          c.on("mouseout.lg", function () {
            d = setTimeout(function () {
              c.removeClass("lg-pager-hover");
            });
          }),
          e.core.$el.on("onBeforeSlide.lg.tm", function (a, c, d) {
            b.removeClass("lg-pager-active"),
              b.eq(d).addClass("lg-pager-active");
          });
      }),
        (c.prototype.destroy = function () {}),
        (a.fn.lightGallery.modules.pager = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = {
          thumbnail: !0,
          animateThumb: !0,
          currentPagerPosition: "middle",
          thumbWidth: 100,
          thumbHeight: "80px",
          thumbContHeight: 100,
          thumbMargin: 5,
          exThumbImage: !1,
          showThumbByDefault: !0,
          toogleThumb: !0,
          pullCaptionUp: !0,
          enableThumbDrag: !0,
          enableThumbSwipe: !0,
          swipeThreshold: 50,
          loadYoutubeThumbnail: !0,
          youtubeThumbSize: 1,
          loadVimeoThumbnail: !0,
          vimeoThumbSize: "thumbnail_small",
          loadDailymotionThumbnail: !0,
        },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.core.s = a.extend({}, b, this.core.s)),
            (this.$el = a(c)),
            (this.$thumbOuter = null),
            (this.thumbOuterWidth = 0),
            (this.thumbTotalWidth =
              this.core.$items.length *
              (this.core.s.thumbWidth + this.core.s.thumbMargin)),
            (this.thumbIndex = this.core.index),
            this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
            (this.left = 0),
            this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var a = this;
        this.core.s.thumbnail &&
          this.core.$items.length > 1 &&
          (this.core.s.showThumbByDefault &&
            setTimeout(function () {
              a.core.$outer.addClass("lg-thumb-open");
            }, 700),
          this.core.s.pullCaptionUp &&
            this.core.$outer.addClass("lg-pull-caption-up"),
          this.build(),
          this.core.s.animateThumb && this.core.doCss()
            ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
              this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
              (this.thumbClickable = !1))
            : (this.thumbClickable = !0),
          this.toogle(),
          this.thumbkeyPress());
      }),
        (c.prototype.build = function () {
          function b(a, b, c) {
            var g,
              h = d.core.isVideo(a, c) || {},
              i = "";
            h.youtube || h.vimeo || h.dailymotion
              ? h.youtube
                ? (g = d.core.s.loadYoutubeThumbnail
                    ? "//img.youtube.com/vi/" +
                      h.youtube[1] +
                      "/" +
                      d.core.s.youtubeThumbSize +
                      ".jpg"
                    : b)
                : h.vimeo
                ? d.core.s.loadVimeoThumbnail
                  ? ((g = "//i.vimeocdn.com/video/error_" + f + ".jpg"),
                    (i = h.vimeo[1]))
                  : (g = b)
                : h.dailymotion &&
                  (g = d.core.s.loadDailymotionThumbnail
                    ? "//www.dailymotion.com/thumbnail/video/" +
                      h.dailymotion[1]
                    : b)
              : (g = b),
              (e +=
                '<div data-vimeo-id="' +
                i +
                '" class="lg-thumb-item" style="width:' +
                d.core.s.thumbWidth +
                "px; height: " +
                d.core.s.thumbHeight +
                "; margin-right: " +
                d.core.s.thumbMargin +
                'px"><img src="' +
                g +
                '" /></div>'),
              (i = "");
          }
          var c,
            d = this,
            e = "",
            f = "",
            g =
              '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
          switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
              f = "640";
              break;
            case "thumbnail_medium":
              f = "200x150";
              break;
            case "thumbnail_small":
              f = "100x75";
          }
          if (
            (d.core.$outer.addClass("lg-has-thumb"),
            d.core.$outer.find(".lg").append(g),
            (d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer")),
            (d.thumbOuterWidth = d.$thumbOuter.width()),
            d.core.s.animateThumb &&
              d.core.$outer
                .find(".lg-thumb")
                .css({ width: d.thumbTotalWidth + "px", position: "relative" }),
            this.core.s.animateThumb &&
              d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"),
            d.core.s.dynamic)
          )
            for (var h = 0; h < d.core.s.dynamicEl.length; h++)
              b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
          else
            d.core.$items.each(function (c) {
              d.core.s.exThumbImage
                ? b(
                    a(this).attr("href") || a(this).attr("data-src"),
                    a(this).attr(d.core.s.exThumbImage),
                    c
                  )
                : b(
                    a(this).attr("href") || a(this).attr("data-src"),
                    a(this).find("img").attr("src"),
                    c
                  );
            });
          d.core.$outer.find(".lg-thumb").html(e),
            (c = d.core.$outer.find(".lg-thumb-item")),
            c.each(function () {
              var b = a(this),
                c = b.attr("data-vimeo-id");
              c &&
                a.getJSON(
                  "//www.vimeo.com/api/v2/video/" + c + ".json?callback=?",
                  { format: "json" },
                  function (a) {
                    b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize]);
                  }
                );
            }),
            c.eq(d.core.index).addClass("active"),
            d.core.$el.on("onBeforeSlide.lg.tm", function () {
              c.removeClass("active"), c.eq(d.core.index).addClass("active");
            }),
            c.on("click.lg touchend.lg", function () {
              var b = a(this);
              setTimeout(function () {
                ((d.thumbClickable && !d.core.lgBusy) || !d.core.doCss()) &&
                  ((d.core.index = b.index()),
                  d.core.slide(d.core.index, !1, !0, !1));
              }, 50);
            }),
            d.core.$el.on("onBeforeSlide.lg.tm", function () {
              d.animateThumb(d.core.index);
            }),
            a(window).on(
              "resize.lg.thumb orientationchange.lg.thumb",
              function () {
                setTimeout(function () {
                  d.animateThumb(d.core.index),
                    (d.thumbOuterWidth = d.$thumbOuter.width());
                }, 200);
              }
            );
        }),
        (c.prototype.setTranslate = function (a) {
          this.core.$outer
            .find(".lg-thumb")
            .css({ transform: "translate3d(-" + a + "px, 0px, 0px)" });
        }),
        (c.prototype.animateThumb = function (a) {
          var b = this.core.$outer.find(".lg-thumb");
          if (this.core.s.animateThumb) {
            var c;
            switch (this.core.s.currentPagerPosition) {
              case "left":
                c = 0;
                break;
              case "middle":
                c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                break;
              case "right":
                c = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            (this.left =
              (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c),
              this.left > this.thumbTotalWidth - this.thumbOuterWidth &&
                (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
              this.left < 0 && (this.left = 0),
              this.core.lGalleryOn
                ? (b.hasClass("on") ||
                    this.core.$outer
                      .find(".lg-thumb")
                      .css("transition-duration", this.core.s.speed + "ms"),
                  this.core.doCss() ||
                    b.animate({ left: -this.left + "px" }, this.core.s.speed))
                : this.core.doCss() || b.css("left", -this.left + "px"),
              this.setTranslate(this.left);
          }
        }),
        (c.prototype.enableThumbDrag = function () {
          var b = this,
            c = 0,
            d = 0,
            e = !1,
            f = !1,
            g = 0;
          b.$thumbOuter.addClass("lg-grab"),
            b.core.$outer
              .find(".lg-thumb")
              .on("mousedown.lg.thumb", function (a) {
                b.thumbTotalWidth > b.thumbOuterWidth &&
                  (a.preventDefault(),
                  (c = a.pageX),
                  (e = !0),
                  (b.core.$outer.scrollLeft += 1),
                  (b.core.$outer.scrollLeft -= 1),
                  (b.thumbClickable = !1),
                  b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
              }),
            a(window).on("mousemove.lg.thumb", function (a) {
              e &&
                ((g = b.left),
                (f = !0),
                (d = a.pageX),
                b.$thumbOuter.addClass("lg-dragging"),
                (g -= d - c),
                g > b.thumbTotalWidth - b.thumbOuterWidth &&
                  (g = b.thumbTotalWidth - b.thumbOuterWidth),
                g < 0 && (g = 0),
                b.setTranslate(g));
            }),
            a(window).on("mouseup.lg.thumb", function () {
              f
                ? ((f = !1),
                  b.$thumbOuter.removeClass("lg-dragging"),
                  (b.left = g),
                  Math.abs(d - c) < b.core.s.swipeThreshold &&
                    (b.thumbClickable = !0))
                : (b.thumbClickable = !0),
                e &&
                  ((e = !1),
                  b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"));
            });
        }),
        (c.prototype.enableThumbSwipe = function () {
          var a = this,
            b = 0,
            c = 0,
            d = !1,
            e = 0;
          a.core.$outer.find(".lg-thumb").on("touchstart.lg", function (c) {
            a.thumbTotalWidth > a.thumbOuterWidth &&
              (c.preventDefault(),
              (b = c.originalEvent.targetTouches[0].pageX),
              (a.thumbClickable = !1));
          }),
            a.core.$outer.find(".lg-thumb").on("touchmove.lg", function (f) {
              a.thumbTotalWidth > a.thumbOuterWidth &&
                (f.preventDefault(),
                (c = f.originalEvent.targetTouches[0].pageX),
                (d = !0),
                a.$thumbOuter.addClass("lg-dragging"),
                (e = a.left),
                (e -= c - b),
                e > a.thumbTotalWidth - a.thumbOuterWidth &&
                  (e = a.thumbTotalWidth - a.thumbOuterWidth),
                e < 0 && (e = 0),
                a.setTranslate(e));
            }),
            a.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
              a.thumbTotalWidth > a.thumbOuterWidth && d
                ? ((d = !1),
                  a.$thumbOuter.removeClass("lg-dragging"),
                  Math.abs(c - b) < a.core.s.swipeThreshold &&
                    (a.thumbClickable = !0),
                  (a.left = e))
                : (a.thumbClickable = !0);
            });
        }),
        (c.prototype.toogle = function () {
          var a = this;
          a.core.s.toogleThumb &&
            (a.core.$outer.addClass("lg-can-toggle"),
            a.$thumbOuter.append(
              '<span class="lg-toogle-thumb lg-icon"></span>'
            ),
            a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
              a.core.$outer.toggleClass("lg-thumb-open");
            }));
        }),
        (c.prototype.thumbkeyPress = function () {
          var b = this;
          a(window).on("keydown.lg.thumb", function (a) {
            38 === a.keyCode
              ? (a.preventDefault(), b.core.$outer.addClass("lg-thumb-open"))
              : 40 === a.keyCode &&
                (a.preventDefault(),
                b.core.$outer.removeClass("lg-thumb-open"));
          });
        }),
        (c.prototype.destroy = function () {
          this.core.s.thumbnail &&
            this.core.$items.length > 1 &&
            (a(window).off(
              "resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"
            ),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass("lg-has-thumb"));
        }),
        (a.fn.lightGallery.modules.Thumbnail = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = b(require("jquery")))
      : b(a.jQuery);
  })(this, function (a) {
    !(function () {
      "use strict";
      function b(a, b, c, d) {
        var e = this;
        if (
          (e.core.$slide
            .eq(b)
            .find(".lg-video")
            .append(e.loadVideo(c, "lg-object", !0, b, d)),
          d)
        )
          if (e.core.s.videojs)
            try {
              videojs(
                e.core.$slide.eq(b).find(".lg-html5").get(0),
                e.core.s.videojsOptions,
                function () {
                  !e.videoLoaded && e.core.s.autoplayFirstVideo && this.play();
                }
              );
            } catch (a) {
              console.error("Make sure you have included videojs");
            }
          else
            !e.videoLoaded &&
              e.core.s.autoplayFirstVideo &&
              e.core.$slide.eq(b).find(".lg-html5").get(0).play();
      }
      function c(a, b) {
        var c = this.core.$slide.eq(b).find(".lg-video-cont");
        c.hasClass("lg-has-iframe") ||
          (c.css("max-width", this.core.s.videoMaxWidth),
          (this.videoLoaded = !0));
      }
      function d(b, c, d) {
        var e = this,
          f = e.core.$slide.eq(c),
          g = f.find(".lg-youtube").get(0),
          h = f.find(".lg-vimeo").get(0),
          i = f.find(".lg-dailymotion").get(0),
          j = f.find(".lg-vk").get(0),
          k = f.find(".lg-html5").get(0);
        if (g)
          g.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        else if (h)
          try {
            $f(h).api("pause");
          } catch (a) {
            console.error("Make sure you have included froogaloop2 js");
          }
        else if (i) i.contentWindow.postMessage("pause", "*");
        else if (k)
          if (e.core.s.videojs)
            try {
              videojs(k).pause();
            } catch (a) {
              console.error("Make sure you have included videojs");
            }
          else k.pause();
        j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
        var l;
        l = e.core.s.dynamic
          ? e.core.s.dynamicEl[d].src
          : e.core.$items.eq(d).attr("href") ||
            e.core.$items.eq(d).attr("data-src");
        var m = e.core.isVideo(l, d) || {};
        (m.youtube || m.vimeo || m.dailymotion || m.vk) &&
          e.core.$outer.addClass("lg-hide-download");
      }
      var e = {
          videoMaxWidth: "855px",
          autoplayFirstVideo: !0,
          youtubePlayerParams: !1,
          vimeoPlayerParams: !1,
          dailymotionPlayerParams: !1,
          vkPlayerParams: !1,
          videojs: !1,
          videojsOptions: {},
        },
        f = function (b) {
          return (
            (this.core = a(b).data("lightGallery")),
            (this.$el = a(b)),
            (this.core.s = a.extend({}, e, this.core.s)),
            (this.videoLoaded = !1),
            this.init(),
            this
          );
        };
      (f.prototype.init = function () {
        var e = this;
        e.core.$el.on("hasVideo.lg.tm", b.bind(this)),
          e.core.$el.on("onAferAppendSlide.lg.tm", c.bind(this)),
          e.core.doCss() &&
          e.core.$items.length > 1 &&
          (e.core.s.enableSwipe || e.core.s.enableDrag)
            ? e.core.$el.on("onSlideClick.lg.tm", function () {
                var a = e.core.$slide.eq(e.core.index);
                e.loadVideoOnclick(a);
              })
            : e.core.$slide.on("click.lg", function () {
                e.loadVideoOnclick(a(this));
              }),
          e.core.$el.on("onBeforeSlide.lg.tm", d.bind(this)),
          e.core.$el.on("onAfterSlide.lg.tm", function (a, b) {
            e.core.$slide.eq(b).removeClass("lg-video-playing");
          }),
          e.core.s.autoplayFirstVideo &&
            e.core.$el.on("onAferAppendSlide.lg.tm", function (a, b) {
              if (!e.core.lGalleryOn) {
                var c = e.core.$slide.eq(b);
                setTimeout(function () {
                  e.loadVideoOnclick(c);
                }, 100);
              }
            });
      }),
        (f.prototype.loadVideo = function (b, c, d, e, f) {
          var g = "",
            h = 1,
            i = "",
            j = this.core.isVideo(b, e) || {};
          if (
            (d &&
              (h = this.videoLoaded
                ? 0
                : this.core.s.autoplayFirstVideo
                ? 1
                : 0),
            j.youtube)
          )
            (i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1"),
              this.core.s.youtubePlayerParams &&
                (i = i + "&" + a.param(this.core.s.youtubePlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-youtube ' +
                c +
                '" width="560" height="315" src="//www.youtube.com/embed/' +
                j.youtube[1] +
                i +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (j.vimeo)
            (i = "?autoplay=" + h + "&api=1"),
              this.core.s.vimeoPlayerParams &&
                (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-vimeo ' +
                c +
                '" width="560" height="315"  src="//player.vimeo.com/video/' +
                j.vimeo[1] +
                i +
                '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
          else if (j.dailymotion)
            (i = "?wmode=opaque&autoplay=" + h + "&api=postMessage"),
              this.core.s.dailymotionPlayerParams &&
                (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-dailymotion ' +
                c +
                '" width="560" height="315" src="//www.dailymotion.com/embed/video/' +
                j.dailymotion[1] +
                i +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (j.html5) {
            var k = f.substring(0, 1);
            ("." !== k && "#" !== k) || (f = a(f).html()), (g = f);
          } else
            j.vk &&
              ((i = "&autoplay=" + h),
              this.core.s.vkPlayerParams &&
                (i = i + "&" + a.param(this.core.s.vkPlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-vk ' +
                c +
                '" width="560" height="315" src="//vk.com/video_ext.php?' +
                j.vk[1] +
                i +
                '" frameborder="0" allowfullscreen></iframe>'));
          return g;
        }),
        (f.prototype.loadVideoOnclick = function (a) {
          var b = this;
          if (
            a.find(".lg-object").hasClass("lg-has-poster") &&
            a.find(".lg-object").is(":visible")
          )
            if (a.hasClass("lg-has-video")) {
              var c = a.find(".lg-youtube").get(0),
                d = a.find(".lg-vimeo").get(0),
                e = a.find(".lg-dailymotion").get(0),
                f = a.find(".lg-html5").get(0);
              if (c)
                c.contentWindow.postMessage(
                  '{"event":"command","func":"playVideo","args":""}',
                  "*"
                );
              else if (d)
                try {
                  $f(d).api("play");
                } catch (a) {
                  console.error("Make sure you have included froogaloop2 js");
                }
              else if (e) e.contentWindow.postMessage("play", "*");
              else if (f)
                if (b.core.s.videojs)
                  try {
                    videojs(f).play();
                  } catch (a) {
                    console.error("Make sure you have included videojs");
                  }
                else f.play();
              a.addClass("lg-video-playing");
            } else {
              a.addClass("lg-video-playing lg-has-video");
              var g,
                h,
                i = function (c, d) {
                  if (
                    (a
                      .find(".lg-video")
                      .append(b.loadVideo(c, "", !1, b.core.index, d)),
                    d)
                  )
                    if (b.core.s.videojs)
                      try {
                        videojs(
                          b.core.$slide
                            .eq(b.core.index)
                            .find(".lg-html5")
                            .get(0),
                          b.core.s.videojsOptions,
                          function () {
                            this.play();
                          }
                        );
                      } catch (a) {
                        console.error("Make sure you have included videojs");
                      }
                    else
                      b.core.$slide
                        .eq(b.core.index)
                        .find(".lg-html5")
                        .get(0)
                        .play();
                };
              b.core.s.dynamic
                ? ((g = b.core.s.dynamicEl[b.core.index].src),
                  (h = b.core.s.dynamicEl[b.core.index].html),
                  i(g, h))
                : ((g =
                    b.core.$items.eq(b.core.index).attr("href") ||
                    b.core.$items.eq(b.core.index).attr("data-src")),
                  (h = b.core.$items.eq(b.core.index).attr("data-html")),
                  i(g, h));
              var j = a.find(".lg-object");
              a.find(".lg-video").append(j),
                a.find(".lg-video-object").hasClass("lg-html5") ||
                  (a.removeClass("lg-complete"),
                  a
                    .find(".lg-video-object")
                    .on("load.lg error.lg", function () {
                      a.addClass("lg-complete");
                    }));
            }
        }),
        (f.prototype.destroy = function () {
          this.videoLoaded = !1;
        }),
        (a.fn.lightGallery.modules.video = f);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = function () {
          var a = !1,
            b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
          return b && parseInt(b[2], 10) < 54 && (a = !0), a;
        },
        c = {
          scale: 1,
          zoom: !0,
          actualSize: !0,
          enableZoomAfter: 300,
          useLeftForZoom: b(),
        },
        d = function (b) {
          return (
            (this.core = a(b).data("lightGallery")),
            (this.core.s = a.extend({}, c, this.core.s)),
            this.core.s.zoom &&
              this.core.doCss() &&
              (this.init(),
              (this.zoomabletimeout = !1),
              (this.pageX = a(window).width() / 2),
              (this.pageY = a(window).height() / 2 + a(window).scrollTop())),
            this
          );
        };
      (d.prototype.init = function () {
        var b = this,
          c =
            '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
        b.core.s.actualSize &&
          (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
          b.core.s.useLeftForZoom
            ? b.core.$outer.addClass("lg-use-left-for-zoom")
            : b.core.$outer.addClass("lg-use-transition-for-zoom"),
          this.core.$outer.find(".lg-toolbar").append(c),
          b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (c, d, e) {
            var f = b.core.s.enableZoomAfter + e;
            a("body").hasClass("lg-from-hash") && e
              ? (f = 0)
              : a("body").removeClass("lg-from-hash"),
              (b.zoomabletimeout = setTimeout(function () {
                b.core.$slide.eq(d).addClass("lg-zoomable");
              }, f + 30));
          });
        var d = 1,
          e = function (c) {
            var d,
              e,
              f = b.core.$outer.find(".lg-current .lg-image"),
              g = (a(window).width() - f.prop("offsetWidth")) / 2,
              h =
                (a(window).height() - f.prop("offsetHeight")) / 2 +
                a(window).scrollTop();
            (d = b.pageX - g), (e = b.pageY - h);
            var i = (c - 1) * d,
              j = (c - 1) * e;
            f
              .css("transform", "scale3d(" + c + ", " + c + ", 1)")
              .attr("data-scale", c),
              b.core.s.useLeftForZoom
                ? f
                    .parent()
                    .css({ left: -i + "px", top: -j + "px" })
                    .attr("data-x", i)
                    .attr("data-y", j)
                : f
                    .parent()
                    .css(
                      "transform",
                      "translate3d(-" + i + "px, -" + j + "px, 0)"
                    )
                    .attr("data-x", i)
                    .attr("data-y", j);
          },
          f = function () {
            d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(),
              d < 1 && (d = 1),
              e(d);
          },
          g = function (c, e, g, h) {
            var i,
              j = e.prop("offsetWidth");
            i = b.core.s.dynamic
              ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j
              : b.core.$items.eq(g).attr("data-width") ||
                e[0].naturalWidth ||
                j;
            var k;
            b.core.$outer.hasClass("lg-zoomed")
              ? (d = 1)
              : i > j && ((k = i / j), (d = k || 2)),
              h
                ? ((b.pageX = a(window).width() / 2),
                  (b.pageY = a(window).height() / 2 + a(window).scrollTop()))
                : ((b.pageX =
                    c.pageX || c.originalEvent.targetTouches[0].pageX),
                  (b.pageY =
                    c.pageY || c.originalEvent.targetTouches[0].pageY)),
              f(),
              setTimeout(function () {
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
              }, 10);
          },
          h = !1;
        b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, c) {
          var d = b.core.$slide.eq(c).find(".lg-image");
          d.on("dblclick", function (a) {
            g(a, d, c);
          }),
            d.on("touchstart", function (a) {
              h
                ? (clearTimeout(h), (h = null), g(a, d, c))
                : (h = setTimeout(function () {
                    h = null;
                  }, 300)),
                a.preventDefault();
            });
        }),
          a(window).on(
            "resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",
            function () {
              (b.pageX = a(window).width() / 2),
                (b.pageY = a(window).height() / 2 + a(window).scrollTop()),
                e(d);
            }
          ),
          a("#lg-zoom-out").on("click.lg", function () {
            b.core.$outer.find(".lg-current .lg-image").length &&
              ((d -= b.core.s.scale), f());
          }),
          a("#lg-zoom-in").on("click.lg", function () {
            b.core.$outer.find(".lg-current .lg-image").length &&
              ((d += b.core.s.scale), f());
          }),
          a("#lg-actual-size").on("click.lg", function (a) {
            g(
              a,
              b.core.$slide.eq(b.core.index).find(".lg-image"),
              b.core.index,
              !0
            );
          }),
          b.core.$el.on("onBeforeSlide.lg.tm", function () {
            (d = 1), b.resetZoom();
          }),
          b.zoomDrag(),
          b.zoomSwipe();
      }),
        (d.prototype.resetZoom = function () {
          this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide
              .find(".lg-img-wrap")
              .removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            (this.pageX = a(window).width() / 2),
            (this.pageY = a(window).height() / 2 + a(window).scrollTop());
        }),
        (d.prototype.zoomSwipe = function () {
          var a = this,
            b = {},
            c = {},
            d = !1,
            e = !1,
            f = !1;
          a.core.$slide.on("touchstart.lg", function (c) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
              var d = a.core.$slide.eq(a.core.index).find(".lg-object");
              (f =
                d.prop("offsetHeight") * d.attr("data-scale") >
                a.core.$outer.find(".lg").height()),
                (e =
                  d.prop("offsetWidth") * d.attr("data-scale") >
                  a.core.$outer.find(".lg").width()),
                (e || f) &&
                  (c.preventDefault(),
                  (b = {
                    x: c.originalEvent.targetTouches[0].pageX,
                    y: c.originalEvent.targetTouches[0].pageY,
                  }));
            }
          }),
            a.core.$slide.on("touchmove.lg", function (g) {
              if (a.core.$outer.hasClass("lg-zoomed")) {
                var h,
                  i,
                  j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                g.preventDefault(),
                  (d = !0),
                  (c = {
                    x: g.originalEvent.targetTouches[0].pageX,
                    y: g.originalEvent.targetTouches[0].pageY,
                  }),
                  a.core.$outer.addClass("lg-zoom-dragging"),
                  (i = f
                    ? -Math.abs(j.attr("data-y")) + (c.y - b.y)
                    : -Math.abs(j.attr("data-y"))),
                  (h = e
                    ? -Math.abs(j.attr("data-x")) + (c.x - b.x)
                    : -Math.abs(j.attr("data-x"))),
                  (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) &&
                    (a.core.s.useLeftForZoom
                      ? j.css({ left: h + "px", top: i + "px" })
                      : j.css(
                          "transform",
                          "translate3d(" + h + "px, " + i + "px, 0)"
                        ));
              }
            }),
            a.core.$slide.on("touchend.lg", function () {
              a.core.$outer.hasClass("lg-zoomed") &&
                d &&
                ((d = !1),
                a.core.$outer.removeClass("lg-zoom-dragging"),
                a.touchendZoom(b, c, e, f));
            });
        }),
        (d.prototype.zoomDrag = function () {
          var b = this,
            c = {},
            d = {},
            e = !1,
            f = !1,
            g = !1,
            h = !1;
          b.core.$slide.on("mousedown.lg.zoom", function (d) {
            var f = b.core.$slide.eq(b.core.index).find(".lg-object");
            (h =
              f.prop("offsetHeight") * f.attr("data-scale") >
              b.core.$outer.find(".lg").height()),
              (g =
                f.prop("offsetWidth") * f.attr("data-scale") >
                b.core.$outer.find(".lg").width()),
              b.core.$outer.hasClass("lg-zoomed") &&
                a(d.target).hasClass("lg-object") &&
                (g || h) &&
                (d.preventDefault(),
                (c = { x: d.pageX, y: d.pageY }),
                (e = !0),
                (b.core.$outer.scrollLeft += 1),
                (b.core.$outer.scrollLeft -= 1),
                b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
          }),
            a(window).on("mousemove.lg.zoom", function (a) {
              if (e) {
                var i,
                  j,
                  k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                (f = !0),
                  (d = { x: a.pageX, y: a.pageY }),
                  b.core.$outer.addClass("lg-zoom-dragging"),
                  (j = h
                    ? -Math.abs(k.attr("data-y")) + (d.y - c.y)
                    : -Math.abs(k.attr("data-y"))),
                  (i = g
                    ? -Math.abs(k.attr("data-x")) + (d.x - c.x)
                    : -Math.abs(k.attr("data-x"))),
                  b.core.s.useLeftForZoom
                    ? k.css({ left: i + "px", top: j + "px" })
                    : k.css(
                        "transform",
                        "translate3d(" + i + "px, " + j + "px, 0)"
                      );
              }
            }),
            a(window).on("mouseup.lg.zoom", function (a) {
              e &&
                ((e = !1),
                b.core.$outer.removeClass("lg-zoom-dragging"),
                !f ||
                  (c.x === d.x && c.y === d.y) ||
                  ((d = { x: a.pageX, y: a.pageY }),
                  b.touchendZoom(c, d, g, h)),
                (f = !1)),
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
            });
        }),
        (d.prototype.touchendZoom = function (a, b, c, d) {
          var e = this,
            f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
            g = e.core.$slide.eq(e.core.index).find(".lg-object"),
            h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
            i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
            j =
              (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
            k = Math.abs(
              g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) -
                e.core.$outer.find(".lg").height() +
                j
            ),
            l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
            m = Math.abs(
              g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) -
                e.core.$outer.find(".lg").width() +
                l
            );
          (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) &&
            (d && (i <= -k ? (i = -k) : i >= -j && (i = -j)),
            c && (h <= -m ? (h = -m) : h >= -l && (h = -l)),
            d
              ? f.attr("data-y", Math.abs(i))
              : (i = -Math.abs(f.attr("data-y"))),
            c
              ? f.attr("data-x", Math.abs(h))
              : (h = -Math.abs(f.attr("data-x"))),
            e.core.s.useLeftForZoom
              ? f.css({ left: h + "px", top: i + "px" })
              : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"));
        }),
        (d.prototype.destroy = function () {
          var b = this;
          b.core.$el.off(".lg.zoom"),
            a(window).off(".lg.zoom"),
            b.core.$slide.off(".lg.zoom"),
            b.core.$el.off(".lg.tm.zoom"),
            b.resetZoom(),
            clearTimeout(b.zoomabletimeout),
            (b.zoomabletimeout = !1);
        }),
        (a.fn.lightGallery.modules.zoom = d);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = { hash: !0 },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.hash &&
              ((this.oldHash = window.location.hash), this.init()),
            this
          );
        };
      (c.prototype.init = function () {
        var b,
          c = this;
        c.core.$el.on("onAfterSlide.lg.tm", function (a, b, d) {
          history.replaceState
            ? history.replaceState(
                null,
                null,
                window.location.pathname +
                  window.location.search +
                  "#lg=" +
                  c.core.s.galleryId +
                  "&slide=" +
                  d
              )
            : (window.location.hash =
                "lg=" + c.core.s.galleryId + "&slide=" + d);
        }),
          a(window).on("hashchange.lg.hash", function () {
            b = window.location.hash;
            var a = parseInt(b.split("&slide=")[1], 10);
            b.indexOf("lg=" + c.core.s.galleryId) > -1
              ? c.core.slide(a, !1, !1)
              : c.core.lGalleryOn && c.core.destroy();
          });
      }),
        (c.prototype.destroy = function () {
          this.core.s.hash &&
            (this.oldHash &&
            this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0
              ? history.replaceState
                ? history.replaceState(null, null, this.oldHash)
                : (window.location.hash = this.oldHash)
              : history.replaceState
              ? history.replaceState(
                  null,
                  document.title,
                  window.location.pathname + window.location.search
                )
              : (window.location.hash = ""),
            this.core.$el.off(".lg.hash"));
        }),
        (a.fn.lightGallery.modules.hash = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = {
          share: !0,
          facebook: !0,
          facebookDropdownText: "Facebook",
          twitter: !0,
          twitterDropdownText: "Twitter",
          googlePlus: !0,
          googlePlusDropdownText: "GooglePlus",
          pinterest: !0,
          pinterestDropdownText: "Pinterest",
        },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.share && this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var b = this,
          c =
            '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
        (c += b.core.s.facebook
          ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
            this.core.s.facebookDropdownText +
            "</span></a></li>"
          : ""),
          (c += b.core.s.twitter
            ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.twitterDropdownText +
              "</span></a></li>"
            : ""),
          (c += b.core.s.googlePlus
            ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.googlePlusDropdownText +
              "</span></a></li>"
            : ""),
          (c += b.core.s.pinterest
            ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.pinterestDropdownText +
              "</span></a></li>"
            : ""),
          (c += "</ul></span>"),
          this.core.$outer.find(".lg-toolbar").append(c),
          this.core.$outer
            .find(".lg")
            .append('<div id="lg-dropdown-overlay"></div>'),
          a("#lg-share").on("click.lg", function () {
            b.core.$outer.toggleClass("lg-dropdown-active");
          }),
          a("#lg-dropdown-overlay").on("click.lg", function () {
            b.core.$outer.removeClass("lg-dropdown-active");
          }),
          b.core.$el.on("onAfterSlide.lg.tm", function (c, d, e) {
            setTimeout(function () {
              a("#lg-share-facebook").attr(
                "href",
                "https://www.facebook.com/sharer/sharer.php?u=" +
                  encodeURIComponent(
                    b.getSahreProps(e, "facebookShareUrl") ||
                      window.location.href
                  )
              ),
                a("#lg-share-twitter").attr(
                  "href",
                  "https://twitter.com/intent/tweet?text=" +
                    b.getSahreProps(e, "tweetText") +
                    "&url=" +
                    encodeURIComponent(
                      b.getSahreProps(e, "twitterShareUrl") ||
                        window.location.href
                    )
                ),
                a("#lg-share-googleplus").attr(
                  "href",
                  "https://plus.google.com/share?url=" +
                    encodeURIComponent(
                      b.getSahreProps(e, "googleplusShareUrl") ||
                        window.location.href
                    )
                ),
                a("#lg-share-pinterest").attr(
                  "href",
                  "http://www.pinterest.com/pin/create/button/?url=" +
                    encodeURIComponent(
                      b.getSahreProps(e, "pinterestShareUrl") ||
                        window.location.href
                    ) +
                    "&media=" +
                    encodeURIComponent(b.getSahreProps(e, "src")) +
                    "&description=" +
                    b.getSahreProps(e, "pinterestText")
                );
            }, 100);
          });
      }),
        (c.prototype.getSahreProps = function (a, b) {
          var c = "";
          if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b];
          else {
            var d = this.core.$items.eq(a).attr("href"),
              e = this.core.$items.eq(a).data(b);
            c = "src" === b ? d || e : e;
          }
          return c;
        }),
        (c.prototype.destroy = function () {}),
        (a.fn.lightGallery.modules.share = c);
    })();
  });

/*=============================================
=            14. Zoom                   =
=============================================*/

/*!
    Zoom 1.7.21
    license: MIT
    http://www.jacklmoore.com/zoom
*/
(function (o) {
  var t = {
    url: !1,
    callback: !1,
    target: !1,
    duration: 120,
    on: "mouseover",
    touch: !0,
    onZoomIn: !1,
    onZoomOut: !1,
    magnify: 1,
  };
  (o.zoom = function (t, n, e, i) {
    var u,
      c,
      a,
      r,
      m,
      l,
      s,
      f = o(t),
      h = f.css("position"),
      d = o(n);
    return (
      (t.style.position = /(absolute|fixed)/.test(h) ? h : "relative"),
      (t.style.overflow = "hidden"),
      (e.style.width = e.style.height = ""),
      o(e)
        .addClass("zoomImg")
        .css({
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: e.width * i,
          height: e.height * i,
          border: "none",
          maxWidth: "none",
          maxHeight: "none",
        })
        .appendTo(t),
      {
        init: function () {
          (c = f.outerWidth()),
            (u = f.outerHeight()),
            n === t
              ? ((r = c), (a = u))
              : ((r = d.outerWidth()), (a = d.outerHeight())),
            (m = (e.width - c) / r),
            (l = (e.height - u) / a),
            (s = d.offset());
        },
        move: function (o) {
          var t = o.pageX - s.left,
            n = o.pageY - s.top;
          (n = Math.max(Math.min(n, a), 0)),
            (t = Math.max(Math.min(t, r), 0)),
            (e.style.left = t * -m + "px"),
            (e.style.top = n * -l + "px");
        },
      }
    );
  }),
    (o.fn.zoom = function (n) {
      return this.each(function () {
        var e = o.extend({}, t, n || {}),
          i = (e.target && o(e.target)[0]) || this,
          u = this,
          c = o(u),
          a = document.createElement("img"),
          r = o(a),
          m = "mousemove.zoom",
          l = !1,
          s = !1;
        if (!e.url) {
          var f = u.querySelector("img");
          if (
            (f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src),
            !e.url)
          )
            return;
        }
        c.one(
          "zoom.destroy",
          function (o, t) {
            c.off(".zoom"),
              (i.style.position = o),
              (i.style.overflow = t),
              (a.onload = null),
              r.remove();
          }.bind(this, i.style.position, i.style.overflow)
        ),
          (a.onload = function () {
            function t(t) {
              f.init(),
                f.move(t),
                r
                  .stop()
                  .fadeTo(
                    o.support.opacity ? e.duration : 0,
                    1,
                    o.isFunction(e.onZoomIn) ? e.onZoomIn.call(a) : !1
                  );
            }
            function n() {
              r.stop().fadeTo(
                e.duration,
                0,
                o.isFunction(e.onZoomOut) ? e.onZoomOut.call(a) : !1
              );
            }
            var f = o.zoom(i, u, a, e.magnify);
            "grab" === e.on
              ? c.on("mousedown.zoom", function (e) {
                  1 === e.which &&
                    (o(document).one("mouseup.zoom", function () {
                      n(), o(document).off(m, f.move);
                    }),
                    t(e),
                    o(document).on(m, f.move),
                    e.preventDefault());
                })
              : "click" === e.on
              ? c.on("click.zoom", function (e) {
                  return l
                    ? void 0
                    : ((l = !0),
                      t(e),
                      o(document).on(m, f.move),
                      o(document).one("click.zoom", function () {
                        n(), (l = !1), o(document).off(m, f.move);
                      }),
                      !1);
                })
              : "toggle" === e.on
              ? c.on("click.zoom", function (o) {
                  l ? n() : t(o), (l = !l);
                })
              : "mouseover" === e.on &&
                (f.init(),
                c
                  .on("mouseenter.zoom", t)
                  .on("mouseleave.zoom", n)
                  .on(m, f.move)),
              e.touch &&
                c
                  .on("touchstart.zoom", function (o) {
                    o.preventDefault(),
                      s
                        ? ((s = !1), n())
                        : ((s = !0),
                          t(
                            o.originalEvent.touches[0] ||
                              o.originalEvent.changedTouches[0]
                          ));
                  })
                  .on("touchmove.zoom", function (o) {
                    o.preventDefault(),
                      f.move(
                        o.originalEvent.touches[0] ||
                          o.originalEvent.changedTouches[0]
                      );
                  })
                  .on("touchend.zoom", function (o) {
                    o.preventDefault(), s && ((s = !1), n());
                  }),
              o.isFunction(e.callback) && e.callback.call(a);
          }),
          a.setAttribute("role", "presentation"),
          (a.alt = ""),
          (a.src = e.url);
      });
    }),
    (o.fn.zoom.defaults = t);
})(window.jQuery);

/*=============================================
=            15. AjaxChimp              =
=============================================*/

(function ($) {
  "use strict";
  $.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5,
    },
    translations: { en: null },
    init: function (selector, options) {
      $(selector).ajaxChimp(options);
    },
  };
  $.fn.ajaxChimp = function (options) {
    $(this).each(function (i, elem) {
      var form = $(elem);
      var email = form.find("input[type=email]");
      var label = form.find("label[for=" + email.attr("id") + "]");
      var settings = $.extend(
        { url: form.attr("action"), language: "en" },
        options
      );
      var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
      form.attr("novalidate", "true");
      email.attr("name", "EMAIL");
      form.submit(function () {
        var msg;
        function successCallback(resp) {
          if (resp.result === "success") {
            msg = "We have sent you a confirmation email";
            label.removeClass("error").addClass("valid");
            email.removeClass("error").addClass("valid");
          } else {
            email.removeClass("valid").addClass("error");
            label.removeClass("valid").addClass("error");
            var index = -1;
            try {
              var parts = resp.msg.split(" - ", 2);
              if (parts[1] === undefined) {
                msg = resp.msg;
              } else {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                  index = parts[0];
                  msg = parts[1];
                } else {
                  index = -1;
                  msg = resp.msg;
                }
              }
            } catch (e) {
              index = -1;
              msg = resp.msg;
            }
          }
          if (
            settings.language !== "en" &&
            $.ajaxChimp.responses[msg] !== undefined &&
            $.ajaxChimp.translations &&
            $.ajaxChimp.translations[settings.language] &&
            $.ajaxChimp.translations[settings.language][
              $.ajaxChimp.responses[msg]
            ]
          ) {
            msg =
              $.ajaxChimp.translations[settings.language][
                $.ajaxChimp.responses[msg]
              ];
          }
          label.html(msg);
          label.show(2e3);
          if (settings.callback) {
            settings.callback(resp);
          }
        }
        var data = {};
        var dataArray = form.serializeArray();
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value;
        });
        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: "jsonp",
          error: function (resp, text) {
            console.log("mailchimp ajax submit error: " + text);
          },
        });
        var submitMsg = "Submitting...";
        if (
          settings.language !== "en" &&
          $.ajaxChimp.translations &&
          $.ajaxChimp.translations[settings.language] &&
          $.ajaxChimp.translations[settings.language]["submit"]
        ) {
          submitMsg = $.ajaxChimp.translations[settings.language]["submit"];
        }
        label.html(submitMsg).show(2e3);
        return false;
      });
    });
    return this;
  };
})(jQuery);

/*=============================================
=            16. Parallax              =
=============================================*/

/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!(function (t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == typeof e &&
      (delete e.refresh, delete e.render, t.extend(this, e)),
      (this.$element = t(i)),
      !this.imageSrc &&
        this.$element.is("img") &&
        (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (
      (r.length < 1 && r.push("center"),
      1 == r.length && r.push(r[0]),
      ("top" != r[0] &&
        "bottom" != r[0] &&
        "left" != r[1] &&
        "right" != r[1]) ||
        (r = [r[1], r[0]]),
      this.positionX !== s && (r[0] = this.positionX.toLowerCase()),
      this.positionY !== s && (r[1] = this.positionY.toLowerCase()),
      (h.positionX = r[0]),
      (h.positionY = r[1]),
      "left" != this.positionX &&
        "right" != this.positionX &&
        (isNaN(parseInt(this.positionX))
          ? (this.positionX = "center")
          : (this.positionX = parseInt(this.positionX))),
      "top" != this.positionY &&
        "bottom" != this.positionY &&
        (isNaN(parseInt(this.positionY))
          ? (this.positionY = "center")
          : (this.positionY = parseInt(this.positionY))),
      (this.position =
        this.positionX +
        (isNaN(this.positionX) ? "" : "px") +
        " " +
        this.positionY +
        (isNaN(this.positionY) ? "" : "px")),
      navigator.userAgent.match(/(iPod|iPhone|iPad)/))
    )
      return (
        this.imageSrc &&
          this.iosFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position,
          }),
        this
      );
    if (navigator.userAgent.match(/(Android)/))
      return (
        this.imageSrc &&
          this.androidFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position,
          }),
        this
      );
    this.$mirror = t("<div />").prependTo(this.mirrorContainer);
    var a = this.$element.find(">.parallax-slider"),
      n = !1;
    0 == a.length
      ? (this.$slider = t("<img />").prependTo(this.$mirror))
      : ((this.$slider = a.prependTo(this.$mirror)), (n = !0)),
      this.$mirror
        .addClass("parallax-mirror")
        .css({
          visibility: "hidden",
          zIndex: this.zIndex,
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
        }),
      this.$slider.addClass("parallax-slider").one("load", function () {
        (h.naturalHeight && h.naturalWidth) ||
          ((h.naturalHeight = this.naturalHeight || this.height || 1),
          (h.naturalWidth = this.naturalWidth || this.width || 1)),
          (h.aspectRatio = h.naturalWidth / h.naturalHeight),
          o.isSetup || o.setup(),
          o.sliders.push(h),
          (o.isFresh = !1),
          o.requestRender();
      }),
      n || (this.$slider[0].src = this.imageSrc),
      ((this.naturalHeight && this.naturalWidth) ||
        this.$slider[0].complete ||
        a.length > 0) &&
        this.$slider.trigger("load");
  }
  !(function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0;
      s < e.length && !i.requestAnimationFrame;
      ++s
    )
      (i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
        (i.cancelAnimationFrame =
          i[e[s] + "CancelAnimationFrame"] ||
          i[e[s] + "CancelRequestAnimationFrame"]);
    i.requestAnimationFrame ||
      (i.requestAnimationFrame = function (e) {
        var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function () {
            e(s + o);
          }, o);
        return (t = s + o), h;
      }),
      i.cancelAnimationFrame ||
        (i.cancelAnimationFrame = function (t) {
          clearTimeout(t);
        });
  })(),
    t.extend(o.prototype, {
      speed: 0.2,
      bleed: 0,
      zIndex: -100,
      iosFix: !0,
      androidFix: !0,
      position: "center",
      overScrollFix: !1,
      mirrorContainer: "body",
      refresh: function () {
        (this.boxWidth = this.$element.outerWidth()),
          (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
          (this.boxOffsetTop = this.$element.offset().top - this.bleed),
          (this.boxOffsetLeft = this.$element.offset().left),
          (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
        var t,
          i = o.winHeight,
          e = o.docHeight,
          s = Math.min(this.boxOffsetTop, e - i),
          h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0),
          r = (this.boxHeight + (s - h) * (1 - this.speed)) | 0,
          a = ((this.boxOffsetTop - s) * (1 - this.speed)) | 0;
        r * this.aspectRatio >= this.boxWidth
          ? ((this.imageWidth = (r * this.aspectRatio) | 0),
            (this.imageHeight = r),
            (this.offsetBaseTop = a),
            (t = this.imageWidth - this.boxWidth),
            "left" == this.positionX
              ? (this.offsetLeft = 0)
              : "right" == this.positionX
              ? (this.offsetLeft = -t)
              : isNaN(this.positionX)
              ? (this.offsetLeft = (-t / 2) | 0)
              : (this.offsetLeft = Math.max(this.positionX, -t)))
          : ((this.imageWidth = this.boxWidth),
            (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
            (this.offsetLeft = 0),
            (t = this.imageHeight - r),
            "top" == this.positionY
              ? (this.offsetBaseTop = a)
              : "bottom" == this.positionY
              ? (this.offsetBaseTop = a - t)
              : isNaN(this.positionY)
              ? (this.offsetBaseTop = (a - t / 2) | 0)
              : (this.offsetBaseTop = a + Math.max(this.positionY, -t)));
      },
      render: function () {
        var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
        this.boxOffsetBottom > t && this.boxOffsetTop <= s
          ? ((this.visibility = "visible"),
            (this.mirrorTop = this.boxOffsetTop - t),
            (this.mirrorLeft = this.boxOffsetLeft - i),
            (this.offsetTop =
              this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
          : (this.visibility = "hidden"),
          this.$mirror.css({
            transform:
              "translate3d(" +
              this.mirrorLeft +
              "px, " +
              (this.mirrorTop - e) +
              "px, 0px)",
            visibility: this.visibility,
            height: this.boxHeight,
            width: this.boxWidth,
          }),
          this.$slider.css({
            transform:
              "translate3d(" +
              this.offsetLeft +
              "px, " +
              this.offsetTop +
              "px, 0px)",
            position: "absolute",
            height: this.imageHeight,
            width: this.imageWidth,
            maxWidth: "none",
          });
      },
    }),
    t.extend(o, {
      scrollTop: 0,
      scrollLeft: 0,
      winHeight: 0,
      winWidth: 0,
      docHeight: 1 << 30,
      docWidth: 1 << 30,
      sliders: [],
      isReady: !1,
      isFresh: !1,
      isBusy: !1,
      setup: function () {
        function s() {
          if (p == i.pageYOffset) return i.requestAnimationFrame(s), !1;
          (p = i.pageYOffset), h.render(), i.requestAnimationFrame(s);
        }
        if (!this.isReady) {
          var h = this,
            r = t(e),
            a = t(i),
            n = function () {
              (o.winHeight = a.height()),
                (o.winWidth = a.width()),
                (o.docHeight = r.height()),
                (o.docWidth = r.width());
            },
            l = function () {
              var t = a.scrollTop(),
                i = o.docHeight - o.winHeight,
                e = o.docWidth - o.winWidth;
              (o.scrollTop = Math.max(0, Math.min(i, t))),
                (o.scrollLeft = Math.max(0, Math.min(e, a.scrollLeft()))),
                (o.overScroll = Math.max(t - i, Math.min(t, 0)));
            };
          a
            .on("resize.px.parallax load.px.parallax", function () {
              n(), h.refresh(), (o.isFresh = !1), o.requestRender();
            })
            .on("scroll.px.parallax load.px.parallax", function () {
              l(), o.requestRender();
            }),
            n(),
            l(),
            (this.isReady = !0);
          var p = -1;
          s();
        }
      },
      configure: function (i) {
        "object" == typeof i &&
          (delete i.refresh, delete i.render, t.extend(this.prototype, i));
      },
      refresh: function () {
        t.each(this.sliders, function () {
          this.refresh();
        }),
          (this.isFresh = !0);
      },
      render: function () {
        this.isFresh || this.refresh(),
          t.each(this.sliders, function () {
            this.render();
          });
      },
      requestRender: function () {
        var t = this;
        t.render(), (t.isBusy = !1);
      },
      destroy: function (e) {
        var s,
          h = t(e).data("px.parallax");
        for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)
          this.sliders[s] == h && this.sliders.splice(s, 1);
        t(e).data("px.parallax", !1),
          0 === this.sliders.length &&
            (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
            (this.isReady = !1),
            (o.isSetup = !1));
      },
    });
  var h = t.fn.parallax;
  (t.fn.parallax = function (s) {
    return this.each(function () {
      var h = t(this),
        r = "object" == typeof s && s;
      this == i || this == e || h.is("body")
        ? o.configure(r)
        : h.data("px.parallax")
        ? "object" == typeof s && t.extend(h.data("px.parallax"), r)
        : ((r = t.extend({}, h.data(), r)),
          h.data("px.parallax", new o(this, r))),
        "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
    });
  }),
    (t.fn.parallax.Constructor = o),
    (t.fn.parallax.noConflict = function () {
      return (t.fn.parallax = h), this;
    }),
    t(function () {
      t('[data-parallax="scroll"]').parallax();
    });
})(jQuery, window, document);

/*=============================================
=            17. ImagesLoaded            =
=============================================*/

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
