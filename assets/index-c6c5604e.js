(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Fr = "153",
  yn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Tn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  ho = 0,
  Jr = 1,
  fo = 2,
  Sa = 1,
  po = 2,
  Wt = 3,
  nn = 0,
  mt = 1,
  Xt = 2,
  en = 0,
  kn = 1,
  Qr = 2,
  es = 3,
  ts = 4,
  mo = 5,
  Hn = 100,
  _o = 101,
  go = 102,
  ns = 103,
  is = 104,
  vo = 200,
  xo = 201,
  Mo = 202,
  So = 203,
  Ea = 204,
  ya = 205,
  Eo = 206,
  yo = 207,
  To = 208,
  bo = 209,
  Ao = 210,
  wo = 0,
  Ro = 1,
  Co = 2,
  wr = 3,
  Lo = 4,
  Po = 5,
  Uo = 6,
  Do = 7,
  Ta = 0,
  Io = 1,
  No = 2,
  qt = 0,
  Fo = 1,
  Oo = 2,
  Bo = 3,
  zo = 4,
  Go = 5,
  ba = 300,
  Xn = 301,
  Yn = 302,
  Rr = 303,
  Cr = 304,
  Vi = 306,
  Lr = 1e3,
  Ct = 1001,
  Pr = 1002,
  ft = 1003,
  rs = 1004,
  $i = 1005,
  St = 1006,
  Ho = 1007,
  oi = 1008,
  tn = 1009,
  Vo = 1010,
  ko = 1011,
  Or = 1012,
  Aa = 1013,
  Jt = 1014,
  Qt = 1015,
  li = 1016,
  wa = 1017,
  Ra = 1018,
  mn = 1020,
  Wo = 1021,
  Lt = 1023,
  Xo = 1024,
  Yo = 1025,
  _n = 1026,
  qn = 1027,
  qo = 1028,
  Ca = 1029,
  jo = 1030,
  La = 1031,
  Pa = 1033,
  Ji = 33776,
  Qi = 33777,
  er = 33778,
  tr = 33779,
  ss = 35840,
  as = 35841,
  os = 35842,
  ls = 35843,
  Ko = 36196,
  cs = 37492,
  us = 37496,
  hs = 37808,
  ds = 37809,
  fs = 37810,
  ps = 37811,
  ms = 37812,
  _s = 37813,
  gs = 37814,
  vs = 37815,
  xs = 37816,
  Ms = 37817,
  Ss = 37818,
  Es = 37819,
  ys = 37820,
  Ts = 37821,
  nr = 36492,
  Zo = 36283,
  bs = 36284,
  As = 36285,
  ws = 36286,
  Ua = 3e3,
  gn = 3001,
  $o = 3200,
  Jo = 3201,
  Da = 0,
  Qo = 1,
  vn = "",
  Ce = "srgb",
  Ft = "srgb-linear",
  Ia = "display-p3",
  ir = 7680,
  el = 519,
  tl = 512,
  nl = 513,
  il = 514,
  rl = 515,
  sl = 516,
  al = 517,
  ol = 518,
  ll = 519,
  Rs = 35044,
  Cs = "300 es",
  Ur = 1035,
  Yt = 2e3,
  Gi = 2001;
class En {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const at = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Ls = 1234567;
const ri = Math.PI / 180,
  ci = 180 / Math.PI;
function Kn() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    at[i & 255] +
    at[(i >> 8) & 255] +
    at[(i >> 16) & 255] +
    at[(i >> 24) & 255] +
    "-" +
    at[e & 255] +
    at[(e >> 8) & 255] +
    "-" +
    at[((e >> 16) & 15) | 64] +
    at[(e >> 24) & 255] +
    "-" +
    at[(t & 63) | 128] +
    at[(t >> 8) & 255] +
    "-" +
    at[(t >> 16) & 255] +
    at[(t >> 24) & 255] +
    at[n & 255] +
    at[(n >> 8) & 255] +
    at[(n >> 16) & 255] +
    at[(n >> 24) & 255]
  ).toLowerCase();
}
function lt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Br(i, e) {
  return ((i % e) + e) % e;
}
function cl(i, e, t, n, r) {
  return n + ((i - e) * (r - n)) / (t - e);
}
function ul(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function si(i, e, t) {
  return (1 - t) * i + t * e;
}
function hl(i, e, t, n) {
  return si(i, e, 1 - Math.exp(-t * n));
}
function dl(i, e = 1) {
  return e - Math.abs(Br(i, e * 2) - e);
}
function fl(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * (3 - 2 * i));
}
function pl(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * i * (i * (i * 6 - 15) + 10));
}
function ml(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function _l(i, e) {
  return i + Math.random() * (e - i);
}
function gl(i) {
  return i * (0.5 - Math.random());
}
function vl(i) {
  i !== void 0 && (Ls = i);
  let e = (Ls += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function xl(i) {
  return i * ri;
}
function Ml(i) {
  return i * ci;
}
function Dr(i) {
  return (i & (i - 1)) === 0 && i !== 0;
}
function Sl(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function Hi(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function El(i, e, t, n, r) {
  const s = Math.cos,
    o = Math.sin,
    a = s(t / 2),
    l = o(t / 2),
    c = s((e + n) / 2),
    u = o((e + n) / 2),
    d = s((e - n) / 2),
    f = o((e - n) / 2),
    m = s((n - e) / 2),
    v = o((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(a * u, l * d, l * f, a * c);
      break;
    case "YZY":
      i.set(l * f, a * u, l * d, a * c);
      break;
    case "ZXZ":
      i.set(l * d, l * f, a * u, a * c);
      break;
    case "XZX":
      i.set(a * u, l * v, l * m, a * c);
      break;
    case "YXY":
      i.set(l * m, a * u, l * v, a * c);
      break;
    case "ZYZ":
      i.set(l * v, l * m, a * u, a * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          r
      );
  }
}
function ni(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function pt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const yl = {
  DEG2RAD: ri,
  RAD2DEG: ci,
  generateUUID: Kn,
  clamp: lt,
  euclideanModulo: Br,
  mapLinear: cl,
  inverseLerp: ul,
  lerp: si,
  damp: hl,
  pingpong: dl,
  smoothstep: fl,
  smootherstep: pl,
  randInt: ml,
  randFloat: _l,
  randFloatSpread: gl,
  seededRandom: vl,
  degToRad: xl,
  radToDeg: Ml,
  isPowerOfTwo: Dr,
  ceilPowerOfTwo: Sl,
  floorPowerOfTwo: Hi,
  setQuaternionFromProperEuler: El,
  normalize: pt,
  denormalize: ni,
};
class Le {
  constructor(e = 0, t = 0) {
    (Le.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(lt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * n - o * r + e.x), (this.y = s * r + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ie {
  constructor(e, t, n, r, s, o, a, l, c) {
    (Ie.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, o, a, l, c);
  }
  set(e, t, n, r, s, o, a, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = a),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = o),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      o = n[0],
      a = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      d = n[7],
      f = n[2],
      m = n[5],
      v = n[8],
      _ = r[0],
      p = r[3],
      h = r[6],
      A = r[1],
      S = r[4],
      T = r[7],
      y = r[2],
      C = r[5],
      L = r[8];
    return (
      (s[0] = o * _ + a * A + l * y),
      (s[3] = o * p + a * S + l * C),
      (s[6] = o * h + a * T + l * L),
      (s[1] = c * _ + u * A + d * y),
      (s[4] = c * p + u * S + d * C),
      (s[7] = c * h + u * T + d * L),
      (s[2] = f * _ + m * A + v * y),
      (s[5] = f * p + m * S + v * C),
      (s[8] = f * h + m * T + v * L),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * o * u - t * a * c - n * s * u + n * a * l + r * s * c - r * o * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      d = u * o - a * c,
      f = a * l - u * s,
      m = c * s - o * l,
      v = t * d + n * f + r * m;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / v;
    return (
      (e[0] = d * _),
      (e[1] = (r * c - u * n) * _),
      (e[2] = (a * n - r * o) * _),
      (e[3] = f * _),
      (e[4] = (u * t - r * l) * _),
      (e[5] = (r * s - a * t) * _),
      (e[6] = m * _),
      (e[7] = (n * l - c * t) * _),
      (e[8] = (o * t - n * s) * _),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * o + c * a) + o + e,
        -r * c,
        r * l,
        -r * (-c * o + l * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(rr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(rr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(rr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const rr = new Ie();
function Na(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function ui(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
const Ps = {};
function ai(i) {
  i in Ps || ((Ps[i] = !0), console.warn(i));
}
function Wn(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function sr(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const Tl = new Ie().fromArray([
    0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7,
    1e-7, 0.9105199,
  ]),
  bl = new Ie().fromArray([
    1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7,
    0, 1.0982735,
  ]);
function Al(i) {
  return i.convertSRGBToLinear().applyMatrix3(bl);
}
function wl(i) {
  return i.applyMatrix3(Tl).convertLinearToSRGB();
}
const Rl = { [Ft]: (i) => i, [Ce]: (i) => i.convertSRGBToLinear(), [Ia]: Al },
  Cl = { [Ft]: (i) => i, [Ce]: (i) => i.convertLinearToSRGB(), [Ia]: wl },
  Tt = {
    enabled: !0,
    get legacyMode() {
      return (
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
        !this.enabled
      );
    },
    set legacyMode(i) {
      console.warn(
        "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
      ),
        (this.enabled = !i);
    },
    get workingColorSpace() {
      return Ft;
    },
    set workingColorSpace(i) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (i, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return i;
      const n = Rl[e],
        r = Cl[t];
      if (n === void 0 || r === void 0)
        throw new Error(
          `Unsupported color space conversion, "${e}" to "${t}".`
        );
      return r(n(i));
    },
    fromWorkingColorSpace: function (i, e) {
      return this.convert(i, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (i, e) {
      return this.convert(i, e, this.workingColorSpace);
    },
  };
let bn;
class Fa {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      bn === void 0 && (bn = ui("canvas")),
        (bn.width = e.width),
        (bn.height = e.height);
      const n = bn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = bn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = ui("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = Wn(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Wn(t[n] / 255) * 255))
          : (t[n] = Wn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let Ll = 0;
class Oa {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: Ll++ }),
      (this.uuid = Kn()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(ar(r[o].image)) : s.push(ar(r[o]));
      } else s = ar(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ar(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? Fa.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Pl = 0;
class _t extends En {
  constructor(
    e = _t.DEFAULT_IMAGE,
    t = _t.DEFAULT_MAPPING,
    n = Ct,
    r = Ct,
    s = St,
    o = oi,
    a = Lt,
    l = tn,
    c = _t.DEFAULT_ANISOTROPY,
    u = vn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Pl++ }),
      (this.uuid = Kn()),
      (this.name = ""),
      (this.source = new Oa(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Le(0, 0)),
      (this.repeat = new Le(1, 1)),
      (this.center = new Le(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ie()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      typeof u == "string"
        ? (this.colorSpace = u)
        : (ai(
            "THREE.Texture: Property .encoding has been replaced by .colorSpace."
          ),
          (this.colorSpace = u === gn ? Ce : vn)),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== ba) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Lr:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ct:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Pr:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Lr:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ct:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Pr:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  get encoding() {
    return (
      ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      this.colorSpace === Ce ? gn : Ua
    );
  }
  set encoding(e) {
    ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      (this.colorSpace = e === gn ? Ce : vn);
  }
}
_t.DEFAULT_IMAGE = null;
_t.DEFAULT_MAPPING = ba;
_t.DEFAULT_ANISOTROPY = 1;
class st {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (st.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s),
      (this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s),
      (this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s),
      (this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      d = l[8],
      f = l[1],
      m = l[5],
      v = l[9],
      _ = l[2],
      p = l[6],
      h = l[10];
    if (
      Math.abs(u - f) < 0.01 &&
      Math.abs(d - _) < 0.01 &&
      Math.abs(v - p) < 0.01
    ) {
      if (
        Math.abs(u + f) < 0.1 &&
        Math.abs(d + _) < 0.1 &&
        Math.abs(v + p) < 0.1 &&
        Math.abs(c + m + h - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const S = (c + 1) / 2,
        T = (m + 1) / 2,
        y = (h + 1) / 2,
        C = (u + f) / 4,
        L = (d + _) / 4,
        B = (v + p) / 4;
      return (
        S > T && S > y
          ? S < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(S)), (r = C / n), (s = L / n))
          : T > y
          ? T < 0.01
            ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(T)), (n = C / r), (s = B / r))
          : y < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(y)), (n = L / s), (r = B / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let A = Math.sqrt(
      (p - v) * (p - v) + (d - _) * (d - _) + (f - u) * (f - u)
    );
    return (
      Math.abs(A) < 0.001 && (A = 1),
      (this.x = (p - v) / A),
      (this.y = (d - _) / A),
      (this.z = (f - u) / A),
      (this.w = Math.acos((c + m + h - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class xn extends En {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new st(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new st(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 &&
      (ai(
        "THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (n.colorSpace = n.encoding === gn ? Ce : vn)),
      (this.texture = new _t(
        r,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : St),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Oa(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ba extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = ft),
      (this.minFilter = ft),
      (this.wrapR = Ct),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ul extends _t {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = ft),
      (this.minFilter = ft),
      (this.wrapR = Ct),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Mn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r);
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0],
      c = n[r + 1],
      u = n[r + 2],
      d = n[r + 3];
    const f = s[o + 0],
      m = s[o + 1],
      v = s[o + 2],
      _ = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
      return;
    }
    if (a === 1) {
      (e[t + 0] = f), (e[t + 1] = m), (e[t + 2] = v), (e[t + 3] = _);
      return;
    }
    if (d !== _ || l !== f || c !== m || u !== v) {
      let p = 1 - a;
      const h = l * f + c * m + u * v + d * _,
        A = h >= 0 ? 1 : -1,
        S = 1 - h * h;
      if (S > Number.EPSILON) {
        const y = Math.sqrt(S),
          C = Math.atan2(y, h * A);
        (p = Math.sin(p * C) / y), (a = Math.sin(a * C) / y);
      }
      const T = a * A;
      if (
        ((l = l * p + f * T),
        (c = c * p + m * T),
        (u = u * p + v * T),
        (d = d * p + _ * T),
        p === 1 - a)
      ) {
        const y = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        (l *= y), (c *= y), (u *= y), (d *= y);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r],
      l = n[r + 1],
      c = n[r + 2],
      u = n[r + 3],
      d = s[o],
      f = s[o + 1],
      m = s[o + 2],
      v = s[o + 3];
    return (
      (e[t] = a * v + u * d + l * m - c * f),
      (e[t + 1] = l * v + u * f + c * d - a * m),
      (e[t + 2] = c * v + u * m + a * f - l * d),
      (e[t + 3] = u * v - a * d - l * f - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(n / 2),
      u = a(r / 2),
      d = a(s / 2),
      f = l(n / 2),
      m = l(r / 2),
      v = l(s / 2);
    switch (o) {
      case "XYZ":
        (this._x = f * u * d + c * m * v),
          (this._y = c * m * d - f * u * v),
          (this._z = c * u * v + f * m * d),
          (this._w = c * u * d - f * m * v);
        break;
      case "YXZ":
        (this._x = f * u * d + c * m * v),
          (this._y = c * m * d - f * u * v),
          (this._z = c * u * v - f * m * d),
          (this._w = c * u * d + f * m * v);
        break;
      case "ZXY":
        (this._x = f * u * d - c * m * v),
          (this._y = c * m * d + f * u * v),
          (this._z = c * u * v + f * m * d),
          (this._w = c * u * d - f * m * v);
        break;
      case "ZYX":
        (this._x = f * u * d - c * m * v),
          (this._y = c * m * d + f * u * v),
          (this._z = c * u * v - f * m * d),
          (this._w = c * u * d + f * m * v);
        break;
      case "YZX":
        (this._x = f * u * d + c * m * v),
          (this._y = c * m * d + f * u * v),
          (this._z = c * u * v - f * m * d),
          (this._w = c * u * d - f * m * v);
        break;
      case "XZY":
        (this._x = f * u * d - c * m * v),
          (this._y = c * m * d - f * u * v),
          (this._z = c * u * v + f * m * d),
          (this._w = c * u * d + f * m * v);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      d = t[10],
      f = n + a + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / m),
        (this._x = (u - l) * m),
        (this._y = (s - c) * m),
        (this._z = (o - r) * m);
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      (this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (r + o) / m),
        (this._z = (s + c) / m);
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      (this._w = (s - c) / m),
        (this._x = (r + o) / m),
        (this._y = 0.25 * m),
        (this._z = (l + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      (this._w = (o - r) / m),
        (this._x = (s + c) / m),
        (this._y = (l + u) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(lt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + o * a + r * c - s * l),
      (this._y = r * u + o * l + s * a - n * c),
      (this._z = s * u + o * c + n * l - r * a),
      (this._w = o * u - n * a - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      r = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = r), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * r + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, a),
      d = Math.sin((1 - t) * u) / c,
      f = Math.sin(t * u) / c;
    return (
      (this._w = o * d + this._w * f),
      (this._x = n * d + this._x * f),
      (this._y = r * d + this._y * f),
      (this._z = s * d + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      r = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(e = 0, t = 0, n = 0) {
    (D.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Us.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Us.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * r),
      (this.y = s[1] * t + s[4] * n + s[7] * r),
      (this.z = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o),
      (this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o),
      (this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = l * t + o * r - a * n,
      u = l * n + a * t - s * r,
      d = l * r + s * n - o * t,
      f = -s * t - o * n - a * r;
    return (
      (this.x = c * l + f * -s + u * -a - d * -o),
      (this.y = u * l + f * -o + d * -s - c * -a),
      (this.z = d * l + f * -a + c * -o - u * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r),
      (this.y = s[1] * t + s[5] * n + s[9] * r),
      (this.z = s[2] * t + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * a),
      (this.y = s * o - n * l),
      (this.z = n * a - r * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return or.copy(this).projectOnVector(e), this.sub(or);
  }
  reflect(e) {
    return this.sub(or.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(lt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const or = new D(),
  Us = new Mn();
class hi {
  constructor(
    e = new D(1 / 0, 1 / 0, 1 / 0),
    t = new D(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(zt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(zt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = zt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if ((e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0))
      e.boundingBox === null && e.computeBoundingBox(),
        An.copy(e.boundingBox),
        An.applyMatrix4(e.matrixWorld),
        this.union(An);
    else {
      const r = e.geometry;
      if (r !== void 0)
        if (t && r.attributes !== void 0 && r.attributes.position !== void 0) {
          const s = r.attributes.position;
          for (let o = 0, a = s.count; o < a; o++)
            zt.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
              this.expandByPoint(zt);
        } else
          r.boundingBox === null && r.computeBoundingBox(),
            An.copy(r.boundingBox),
            An.applyMatrix4(e.matrixWorld),
            this.union(An);
    }
    const n = e.children;
    for (let r = 0, s = n.length; r < s; r++) this.expandByObject(n[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, zt),
      zt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Jn),
      vi.subVectors(this.max, Jn),
      wn.subVectors(e.a, Jn),
      Rn.subVectors(e.b, Jn),
      Cn.subVectors(e.c, Jn),
      jt.subVectors(Rn, wn),
      Kt.subVectors(Cn, Rn),
      ln.subVectors(wn, Cn);
    let t = [
      0,
      -jt.z,
      jt.y,
      0,
      -Kt.z,
      Kt.y,
      0,
      -ln.z,
      ln.y,
      jt.z,
      0,
      -jt.x,
      Kt.z,
      0,
      -Kt.x,
      ln.z,
      0,
      -ln.x,
      -jt.y,
      jt.x,
      0,
      -Kt.y,
      Kt.x,
      0,
      -ln.y,
      ln.x,
      0,
    ];
    return !lr(t, wn, Rn, Cn, vi) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !lr(t, wn, Rn, Cn, vi))
      ? !1
      : (xi.crossVectors(jt, Kt),
        (t = [xi.x, xi.y, xi.z]),
        lr(t, wn, Rn, Cn, vi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, zt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(zt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Bt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Bt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Bt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Bt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Bt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Bt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Bt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Bt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Bt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Bt = [
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
  ],
  zt = new D(),
  An = new hi(),
  wn = new D(),
  Rn = new D(),
  Cn = new D(),
  jt = new D(),
  Kt = new D(),
  ln = new D(),
  Jn = new D(),
  vi = new D(),
  xi = new D(),
  cn = new D();
function lr(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    cn.fromArray(i, s);
    const a =
        r.x * Math.abs(cn.x) + r.y * Math.abs(cn.y) + r.z * Math.abs(cn.z),
      l = e.dot(cn),
      c = t.dot(cn),
      u = n.dot(cn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const Dl = new hi(),
  Qn = new D(),
  cr = new D();
class zr {
  constructor(e = new D(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Dl.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Qn.subVectors(e, this.center);
    const t = Qn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Qn, r / n), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (cr.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Qn.copy(e.center).add(cr)),
            this.expandByPoint(Qn.copy(e.center).sub(cr))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Gt = new D(),
  ur = new D(),
  Mi = new D(),
  Zt = new D(),
  hr = new D(),
  Si = new D(),
  dr = new D();
class Il {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Gt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Gt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Gt.copy(this.origin).addScaledVector(this.direction, t),
        Gt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    ur.copy(e).add(t).multiplyScalar(0.5),
      Mi.copy(t).sub(e).normalize(),
      Zt.copy(this.origin).sub(ur);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(Mi),
      a = Zt.dot(this.direction),
      l = -Zt.dot(Mi),
      c = Zt.lengthSq(),
      u = Math.abs(1 - o * o);
    let d, f, m, v;
    if (u > 0)
      if (((d = o * l - a), (f = o * a - l), (v = s * u), d >= 0))
        if (f >= -v)
          if (f <= v) {
            const _ = 1 / u;
            (d *= _),
              (f *= _),
              (m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * l) + c);
          } else
            (f = s),
              (d = Math.max(0, -(o * f + a))),
              (m = -d * d + f * (f + 2 * l) + c);
        else
          (f = -s),
            (d = Math.max(0, -(o * f + a))),
            (m = -d * d + f * (f + 2 * l) + c);
      else
        f <= -v
          ? ((d = Math.max(0, -(-o * s + a))),
            (f = d > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -d * d + f * (f + 2 * l) + c))
          : f <= v
          ? ((d = 0),
            (f = Math.min(Math.max(-s, -l), s)),
            (m = f * (f + 2 * l) + c))
          : ((d = Math.max(0, -(o * s + a))),
            (f = d > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (m = -d * d + f * (f + 2 * l) + c));
    else
      (f = o > 0 ? -s : s),
        (d = Math.max(0, -(o * f + a))),
        (m = -d * d + f * (f + 2 * l) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, d),
      r && r.copy(ur).addScaledVector(Mi, f),
      m
    );
  }
  intersectSphere(e, t) {
    Gt.subVectors(e.center, this.origin);
    const n = Gt.dot(this.direction),
      r = Gt.dot(Gt) - n * n,
      s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r),
      a = n - o,
      l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      d = 1 / this.direction.z,
      f = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - f.x) * c), (r = (e.max.x - f.x) * c))
        : ((n = (e.max.x - f.x) * c), (r = (e.min.x - f.x) * c)),
      u >= 0
        ? ((s = (e.min.y - f.y) * u), (o = (e.max.y - f.y) * u))
        : ((s = (e.max.y - f.y) * u), (o = (e.min.y - f.y) * u)),
      n > o ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (o < r || isNaN(r)) && (r = o),
      d >= 0
        ? ((a = (e.min.z - f.z) * d), (l = (e.max.z - f.z) * d))
        : ((a = (e.max.z - f.z) * d), (l = (e.min.z - f.z) * d)),
      n > l || a > r) ||
      ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Gt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    hr.subVectors(t, e), Si.subVectors(n, e), dr.crossVectors(hr, Si);
    let o = this.direction.dot(dr),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    Zt.subVectors(this.origin, e);
    const l = a * this.direction.dot(Si.crossVectors(Zt, Si));
    if (l < 0) return null;
    const c = a * this.direction.dot(hr.cross(Zt));
    if (c < 0 || l + c > o) return null;
    const u = -a * Zt.dot(dr);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qe {
  constructor(e, t, n, r, s, o, a, l, c, u, d, f, m, v, _, p) {
    (Qe.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, u, d, f, m, v, _, p);
  }
  set(e, t, n, r, s, o, a, l, c, u, d, f, m, v, _, p) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[4] = t),
      (h[8] = n),
      (h[12] = r),
      (h[1] = s),
      (h[5] = o),
      (h[9] = a),
      (h[13] = l),
      (h[2] = c),
      (h[6] = u),
      (h[10] = d),
      (h[14] = f),
      (h[3] = m),
      (h[7] = v),
      (h[11] = _),
      (h[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Qe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      r = 1 / Ln.setFromMatrixColumn(e, 0).length(),
      s = 1 / Ln.setFromMatrixColumn(e, 1).length(),
      o = 1 / Ln.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * u,
        m = o * d,
        v = a * u,
        _ = a * d;
      (t[0] = l * u),
        (t[4] = -l * d),
        (t[8] = c),
        (t[1] = m + v * c),
        (t[5] = f - _ * c),
        (t[9] = -a * l),
        (t[2] = _ - f * c),
        (t[6] = v + m * c),
        (t[10] = o * l);
    } else if (e.order === "YXZ") {
      const f = l * u,
        m = l * d,
        v = c * u,
        _ = c * d;
      (t[0] = f + _ * a),
        (t[4] = v * a - m),
        (t[8] = o * c),
        (t[1] = o * d),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = m * a - v),
        (t[6] = _ + f * a),
        (t[10] = o * l);
    } else if (e.order === "ZXY") {
      const f = l * u,
        m = l * d,
        v = c * u,
        _ = c * d;
      (t[0] = f - _ * a),
        (t[4] = -o * d),
        (t[8] = v + m * a),
        (t[1] = m + v * a),
        (t[5] = o * u),
        (t[9] = _ - f * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l);
    } else if (e.order === "ZYX") {
      const f = o * u,
        m = o * d,
        v = a * u,
        _ = a * d;
      (t[0] = l * u),
        (t[4] = v * c - m),
        (t[8] = f * c + _),
        (t[1] = l * d),
        (t[5] = _ * c + f),
        (t[9] = m * c - v),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l);
    } else if (e.order === "YZX") {
      const f = o * l,
        m = o * c,
        v = a * l,
        _ = a * c;
      (t[0] = l * u),
        (t[4] = _ - f * d),
        (t[8] = v * d + m),
        (t[1] = d),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = m * d + v),
        (t[10] = f - _ * d);
    } else if (e.order === "XZY") {
      const f = o * l,
        m = o * c,
        v = a * l,
        _ = a * c;
      (t[0] = l * u),
        (t[4] = -d),
        (t[8] = c * u),
        (t[1] = f * d + _),
        (t[5] = o * u),
        (t[9] = m * d - v),
        (t[2] = v * d - m),
        (t[6] = a * u),
        (t[10] = _ * d + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Nl, e, Fl);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      vt.subVectors(e, t),
      vt.lengthSq() === 0 && (vt.z = 1),
      vt.normalize(),
      $t.crossVectors(n, vt),
      $t.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (vt.x += 1e-4) : (vt.z += 1e-4),
        vt.normalize(),
        $t.crossVectors(n, vt)),
      $t.normalize(),
      Ei.crossVectors(vt, $t),
      (r[0] = $t.x),
      (r[4] = Ei.x),
      (r[8] = vt.x),
      (r[1] = $t.y),
      (r[5] = Ei.y),
      (r[9] = vt.y),
      (r[2] = $t.z),
      (r[6] = Ei.z),
      (r[10] = vt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      o = n[0],
      a = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      d = n[5],
      f = n[9],
      m = n[13],
      v = n[2],
      _ = n[6],
      p = n[10],
      h = n[14],
      A = n[3],
      S = n[7],
      T = n[11],
      y = n[15],
      C = r[0],
      L = r[4],
      B = r[8],
      x = r[12],
      w = r[1],
      q = r[5],
      ee = r[9],
      F = r[13],
      G = r[2],
      H = r[6],
      Z = r[10],
      X = r[14],
      Y = r[3],
      te = r[7],
      K = r[11],
      me = r[15];
    return (
      (s[0] = o * C + a * w + l * G + c * Y),
      (s[4] = o * L + a * q + l * H + c * te),
      (s[8] = o * B + a * ee + l * Z + c * K),
      (s[12] = o * x + a * F + l * X + c * me),
      (s[1] = u * C + d * w + f * G + m * Y),
      (s[5] = u * L + d * q + f * H + m * te),
      (s[9] = u * B + d * ee + f * Z + m * K),
      (s[13] = u * x + d * F + f * X + m * me),
      (s[2] = v * C + _ * w + p * G + h * Y),
      (s[6] = v * L + _ * q + p * H + h * te),
      (s[10] = v * B + _ * ee + p * Z + h * K),
      (s[14] = v * x + _ * F + p * X + h * me),
      (s[3] = A * C + S * w + T * G + y * Y),
      (s[7] = A * L + S * q + T * H + y * te),
      (s[11] = A * B + S * ee + T * Z + y * K),
      (s[15] = A * x + S * F + T * X + y * me),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[12],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      d = e[6],
      f = e[10],
      m = e[14],
      v = e[3],
      _ = e[7],
      p = e[11],
      h = e[15];
    return (
      v *
        (+s * l * d -
          r * c * d -
          s * a * f +
          n * c * f +
          r * a * m -
          n * l * m) +
      _ *
        (+t * l * m -
          t * c * f +
          s * o * f -
          r * o * m +
          r * c * u -
          s * l * u) +
      p *
        (+t * c * d -
          t * a * m -
          s * o * d +
          n * o * m +
          s * a * u -
          n * c * u) +
      h *
        (-r * a * u - t * l * d + t * a * f + r * o * d - n * o * f + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      d = e[9],
      f = e[10],
      m = e[11],
      v = e[12],
      _ = e[13],
      p = e[14],
      h = e[15],
      A = d * p * c - _ * f * c + _ * l * m - a * p * m - d * l * h + a * f * h,
      S = v * f * c - u * p * c - v * l * m + o * p * m + u * l * h - o * f * h,
      T = u * _ * c - v * d * c + v * a * m - o * _ * m - u * a * h + o * d * h,
      y = v * d * l - u * _ * l - v * a * f + o * _ * f + u * a * p - o * d * p,
      C = t * A + n * S + r * T + s * y;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const L = 1 / C;
    return (
      (e[0] = A * L),
      (e[1] =
        (_ * f * s -
          d * p * s -
          _ * r * m +
          n * p * m +
          d * r * h -
          n * f * h) *
        L),
      (e[2] =
        (a * p * s -
          _ * l * s +
          _ * r * c -
          n * p * c -
          a * r * h +
          n * l * h) *
        L),
      (e[3] =
        (d * l * s -
          a * f * s -
          d * r * c +
          n * f * c +
          a * r * m -
          n * l * m) *
        L),
      (e[4] = S * L),
      (e[5] =
        (u * p * s -
          v * f * s +
          v * r * m -
          t * p * m -
          u * r * h +
          t * f * h) *
        L),
      (e[6] =
        (v * l * s -
          o * p * s -
          v * r * c +
          t * p * c +
          o * r * h -
          t * l * h) *
        L),
      (e[7] =
        (o * f * s -
          u * l * s +
          u * r * c -
          t * f * c -
          o * r * m +
          t * l * m) *
        L),
      (e[8] = T * L),
      (e[9] =
        (v * d * s -
          u * _ * s -
          v * n * m +
          t * _ * m +
          u * n * h -
          t * d * h) *
        L),
      (e[10] =
        (o * _ * s -
          v * a * s +
          v * n * c -
          t * _ * c -
          o * n * h +
          t * a * h) *
        L),
      (e[11] =
        (u * a * s -
          o * d * s -
          u * n * c +
          t * d * c +
          o * n * m -
          t * a * m) *
        L),
      (e[12] = y * L),
      (e[13] =
        (u * _ * r -
          v * d * r +
          v * n * f -
          t * _ * f -
          u * n * p +
          t * d * p) *
        L),
      (e[14] =
        (v * a * r -
          o * _ * r -
          v * n * l +
          t * _ * l +
          o * n * p -
          t * a * p) *
        L),
      (e[15] =
        (o * d * r -
          u * a * r +
          u * n * l -
          t * d * l -
          o * n * f +
          t * a * f) *
        L),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = 1 - n,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      u = s * a;
    return (
      this.set(
        c * o + n,
        c * a - r * l,
        c * l + r * a,
        0,
        c * a + r * l,
        u * a + n,
        u * l - r * o,
        0,
        c * l - r * a,
        u * l + r * o,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements,
      s = t._x,
      o = t._y,
      a = t._z,
      l = t._w,
      c = s + s,
      u = o + o,
      d = a + a,
      f = s * c,
      m = s * u,
      v = s * d,
      _ = o * u,
      p = o * d,
      h = a * d,
      A = l * c,
      S = l * u,
      T = l * d,
      y = n.x,
      C = n.y,
      L = n.z;
    return (
      (r[0] = (1 - (_ + h)) * y),
      (r[1] = (m + T) * y),
      (r[2] = (v - S) * y),
      (r[3] = 0),
      (r[4] = (m - T) * C),
      (r[5] = (1 - (f + h)) * C),
      (r[6] = (p + A) * C),
      (r[7] = 0),
      (r[8] = (v + S) * L),
      (r[9] = (p - A) * L),
      (r[10] = (1 - (f + _)) * L),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Ln.set(r[0], r[1], r[2]).length();
    const o = Ln.set(r[4], r[5], r[6]).length(),
      a = Ln.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      bt.copy(this);
    const c = 1 / s,
      u = 1 / o,
      d = 1 / a;
    return (
      (bt.elements[0] *= c),
      (bt.elements[1] *= c),
      (bt.elements[2] *= c),
      (bt.elements[4] *= u),
      (bt.elements[5] *= u),
      (bt.elements[6] *= u),
      (bt.elements[8] *= d),
      (bt.elements[9] *= d),
      (bt.elements[10] *= d),
      t.setFromRotationMatrix(bt),
      (n.x = s),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, r, s, o, a = Yt) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      u = (2 * s) / (n - r),
      d = (t + e) / (t - e),
      f = (n + r) / (n - r);
    let m, v;
    if (a === Yt) (m = -(o + s) / (o - s)), (v = (-2 * o * s) / (o - s));
    else if (a === Gi) (m = -o / (o - s)), (v = (-o * s) / (o - s));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = d),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = f),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = v),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, s, o, a = Yt) {
    const l = this.elements,
      c = 1 / (t - e),
      u = 1 / (n - r),
      d = 1 / (o - s),
      f = (t + e) * c,
      m = (n + r) * u;
    let v, _;
    if (a === Yt) (v = (o + s) * d), (_ = -2 * d);
    else if (a === Gi) (v = s * d), (_ = -1 * d);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -f),
      (l[1] = 0),
      (l[5] = 2 * u),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = _),
      (l[14] = -v),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Ln = new D(),
  bt = new Qe(),
  Nl = new D(0, 0, 0),
  Fl = new D(1, 1, 1),
  $t = new D(),
  Ei = new D(),
  vt = new D(),
  Ds = new Qe(),
  Is = new Mn();
class ki {
  constructor(e = 0, t = 0, n = 0, r = ki.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      s = r[0],
      o = r[4],
      a = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      d = r[2],
      f = r[6],
      m = r[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(lt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(f, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-lt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-d, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(lt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-d, m)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-lt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(f, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(lt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-d, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-lt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(f, c)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Ds.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ds, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Is.setFromEuler(this), this.setFromQuaternion(Is, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ki.DEFAULT_ORDER = "XYZ";
class za {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Ol = 0;
const Ns = new D(),
  Pn = new Mn(),
  Ht = new Qe(),
  yi = new D(),
  ei = new D(),
  Bl = new D(),
  zl = new Mn(),
  Fs = new D(1, 0, 0),
  Os = new D(0, 1, 0),
  Bs = new D(0, 0, 1),
  Gl = { type: "added" },
  zs = { type: "removed" };
class ct extends En {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Ol++ }),
      (this.uuid = Kn()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = ct.DEFAULT_UP.clone());
    const e = new D(),
      t = new ki(),
      n = new Mn(),
      r = new D(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new Qe() },
        normalMatrix: { value: new Ie() },
      }),
      (this.matrix = new Qe()),
      (this.matrixWorld = new Qe()),
      (this.matrixAutoUpdate = ct.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new za()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Pn.setFromAxisAngle(e, t), this.quaternion.multiply(Pn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Pn.setFromAxisAngle(e, t), this.quaternion.premultiply(Pn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Fs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Os, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Bs, e);
  }
  translateOnAxis(e, t) {
    return (
      Ns.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ns.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Fs, e);
  }
  translateY(e) {
    return this.translateOnAxis(Os, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Bs, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(Ht.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? yi.copy(e) : yi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      ei.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Ht.lookAt(ei, yi, this.up)
        : Ht.lookAt(yi, ei, this.up),
      this.quaternion.setFromRotationMatrix(Ht),
      r &&
        (Ht.extractRotation(r.matrixWorld),
        Pn.setFromRotationMatrix(Ht),
        this.quaternion.premultiply(Pn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Gl))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(zs)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(zs);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Ht.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Ht.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Ht),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let r = 0, s = this.children.length; r < s; r++) {
      const o = this.children[r].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ei, e, Bl), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ei, zl, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const d = l[c];
            s(e.shapes, d);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries),
        l = o(e.materials),
        c = o(e.textures),
        u = o(e.images),
        d = o(e.shapes),
        f = o(e.skeletons),
        m = o(e.animations),
        v = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        d.length > 0 && (n.shapes = d),
        f.length > 0 && (n.skeletons = f),
        m.length > 0 && (n.animations = m),
        v.length > 0 && (n.nodes = v);
    }
    return (n.object = r), n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
ct.DEFAULT_UP = new D(0, 1, 0);
ct.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const At = new D(),
  Vt = new D(),
  fr = new D(),
  kt = new D(),
  Un = new D(),
  Dn = new D(),
  Gs = new D(),
  pr = new D(),
  mr = new D(),
  _r = new D();
let Ti = !1;
class Rt {
  constructor(e = new D(), t = new D(), n = new D()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), At.subVectors(e, t), r.cross(At);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    At.subVectors(r, t), Vt.subVectors(n, t), fr.subVectors(e, t);
    const o = At.dot(At),
      a = At.dot(Vt),
      l = At.dot(fr),
      c = Vt.dot(Vt),
      u = Vt.dot(fr),
      d = o * c - a * a;
    if (d === 0) return s.set(-2, -1, -1);
    const f = 1 / d,
      m = (c * l - a * u) * f,
      v = (o * u - a * l) * f;
    return s.set(1 - m - v, v, m);
  }
  static containsPoint(e, t, n, r) {
    return (
      this.getBarycoord(e, t, n, r, kt),
      kt.x >= 0 && kt.y >= 0 && kt.x + kt.y <= 1
    );
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return (
      Ti === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (Ti = !0)),
      this.getInterpolation(e, t, n, r, s, o, a, l)
    );
  }
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return (
      this.getBarycoord(e, t, n, r, kt),
      l.setScalar(0),
      l.addScaledVector(s, kt.x),
      l.addScaledVector(o, kt.y),
      l.addScaledVector(a, kt.z),
      l
    );
  }
  static isFrontFacing(e, t, n, r) {
    return At.subVectors(n, t), Vt.subVectors(e, t), At.cross(Vt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      At.subVectors(this.c, this.b),
      Vt.subVectors(this.a, this.b),
      At.cross(Vt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Rt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Rt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return (
      Ti === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (Ti = !0)),
      Rt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s)
    );
  }
  getInterpolation(e, t, n, r, s) {
    return Rt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Rt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Rt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let o, a;
    Un.subVectors(r, n), Dn.subVectors(s, n), pr.subVectors(e, n);
    const l = Un.dot(pr),
      c = Dn.dot(pr);
    if (l <= 0 && c <= 0) return t.copy(n);
    mr.subVectors(e, r);
    const u = Un.dot(mr),
      d = Dn.dot(mr);
    if (u >= 0 && d <= u) return t.copy(r);
    const f = l * d - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return (o = l / (l - u)), t.copy(n).addScaledVector(Un, o);
    _r.subVectors(e, s);
    const m = Un.dot(_r),
      v = Dn.dot(_r);
    if (v >= 0 && m <= v) return t.copy(s);
    const _ = m * c - l * v;
    if (_ <= 0 && c >= 0 && v <= 0)
      return (a = c / (c - v)), t.copy(n).addScaledVector(Dn, a);
    const p = u * v - m * d;
    if (p <= 0 && d - u >= 0 && m - v >= 0)
      return (
        Gs.subVectors(s, r),
        (a = (d - u) / (d - u + (m - v))),
        t.copy(r).addScaledVector(Gs, a)
      );
    const h = 1 / (p + _ + f);
    return (
      (o = _ * h),
      (a = f * h),
      t.copy(n).addScaledVector(Un, o).addScaledVector(Dn, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Hl = 0;
class di extends En {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Hl++ }),
      (this.uuid = Kn()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = kn),
      (this.side = nn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Ea),
      (this.blendDst = ya),
      (this.blendEquation = Hn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = wr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = el),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = ir),
      (this.stencilZFail = ir),
      (this.stencilZPass = ir),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
          ? r.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== kn && (n.blending = this.blending),
      this.side !== nn && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures),
        o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const Ga = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  wt = { h: 0, s: 0, l: 0 },
  bi = { h: 0, s: 0, l: 0 };
function gr(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * 6 * (2 / 3 - t)
      : i
  );
}
class He {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
        ? this.setHex(r)
        : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Ce) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Tt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = Tt.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Tt.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = Tt.workingColorSpace) {
    if (((e = Br(e, 1)), (t = lt(t, 0, 1)), (n = lt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - s;
      (this.r = gr(o, s, e + 1 / 3)),
        (this.g = gr(o, s, e)),
        (this.b = gr(o, s, e - 1 / 3));
    }
    return Tt.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Ce) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = r[1],
        a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ce) {
    const n = Ga[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Wn(e.r)), (this.g = Wn(e.g)), (this.b = Wn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = sr(e.r)), (this.g = sr(e.g)), (this.b = sr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ce) {
    return (
      Tt.fromWorkingColorSpace(ot.copy(this), e),
      Math.round(lt(ot.r * 255, 0, 255)) * 65536 +
        Math.round(lt(ot.g * 255, 0, 255)) * 256 +
        Math.round(lt(ot.b * 255, 0, 255))
    );
  }
  getHexString(e = Ce) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Tt.workingColorSpace) {
    Tt.fromWorkingColorSpace(ot.copy(this), t);
    const n = ot.r,
      r = ot.g,
      s = ot.b,
      o = Math.max(n, r, s),
      a = Math.min(n, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const d = o - a;
      switch (((c = u <= 0.5 ? d / (o + a) : d / (2 - o - a)), o)) {
        case n:
          l = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / d + 2;
          break;
        case s:
          l = (n - r) / d + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = Tt.workingColorSpace) {
    return (
      Tt.fromWorkingColorSpace(ot.copy(this), t),
      (e.r = ot.r),
      (e.g = ot.g),
      (e.b = ot.b),
      e
    );
  }
  getStyle(e = Ce) {
    Tt.fromWorkingColorSpace(ot.copy(this), e);
    const t = ot.r,
      n = ot.g,
      r = ot.b;
    return e !== Ce
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          r * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(wt),
      (wt.h += e),
      (wt.s += t),
      (wt.l += n),
      this.setHSL(wt.h, wt.s, wt.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(wt), e.getHSL(bi);
    const n = si(wt.h, bi.h, t),
      r = si(wt.s, bi.s, t),
      s = si(wt.l, bi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * r),
      (this.g = s[1] * t + s[4] * n + s[7] * r),
      (this.b = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ot = new He();
He.NAMES = Ga;
class Ha extends di {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new He(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Ta),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ze = new D(),
  Ai = new Le();
class It {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Rs),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.gpuType = Qt),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ai.fromBufferAttribute(this, t),
          Ai.applyMatrix3(e),
          this.setXY(t, Ai.x, Ai.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ze.fromBufferAttribute(this, t),
          Ze.applyMatrix3(e),
          this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t),
        Ze.applyMatrix4(e),
        this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t),
        Ze.applyNormalMatrix(e),
        this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t),
        Ze.transformDirection(e),
        this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = pt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = pt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = pt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ni(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = pt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = pt(t, this.array)), (n = pt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = pt(t, this.array)),
        (n = pt(n, this.array)),
        (r = pt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = pt(t, this.array)),
        (n = pt(n, this.array)),
        (r = pt(r, this.array)),
        (s = pt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Rs && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class Va extends It {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ka extends It {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Nt extends It {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Vl = 0;
const Mt = new Qe(),
  vr = new ct(),
  In = new D(),
  xt = new hi(),
  ti = new hi(),
  rt = new D();
class rn extends En {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Vl++ }),
      (this.uuid = Kn()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Na(e) ? ka : Va)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ie().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Mt.makeRotationFromQuaternion(e), this.applyMatrix4(Mt), this;
  }
  rotateX(e) {
    return Mt.makeRotationX(e), this.applyMatrix4(Mt), this;
  }
  rotateY(e) {
    return Mt.makeRotationY(e), this.applyMatrix4(Mt), this;
  }
  rotateZ(e) {
    return Mt.makeRotationZ(e), this.applyMatrix4(Mt), this;
  }
  translate(e, t, n) {
    return Mt.makeTranslation(e, t, n), this.applyMatrix4(Mt), this;
  }
  scale(e, t, n) {
    return Mt.makeScale(e, t, n), this.applyMatrix4(Mt), this;
  }
  lookAt(e) {
    return vr.lookAt(e), vr.updateMatrix(), this.applyMatrix4(vr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(In).negate(),
      this.translate(In.x, In.y, In.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Nt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new hi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new D(-1 / 0, -1 / 0, -1 / 0),
          new D(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          xt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (rt.addVectors(this.boundingBox.min, xt.min),
                this.boundingBox.expandByPoint(rt),
                rt.addVectors(this.boundingBox.max, xt.max),
                this.boundingBox.expandByPoint(rt))
              : (this.boundingBox.expandByPoint(xt.min),
                this.boundingBox.expandByPoint(xt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new zr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((xt.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ti.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (rt.addVectors(xt.min, ti.min),
                xt.expandByPoint(rt),
                rt.addVectors(xt.max, ti.max),
                xt.expandByPoint(rt))
              : (xt.expandByPoint(ti.min), xt.expandByPoint(ti.max));
        }
      xt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        rt.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(rt)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            rt.fromBufferAttribute(a, c),
              l && (In.fromBufferAttribute(e, c), rt.add(In)),
              (r = Math.max(r, n.distanceToSquared(rt)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      r = t.position.array,
      s = t.normal.array,
      o = t.uv.array,
      a = r.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new It(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      u = [];
    for (let w = 0; w < a; w++) (c[w] = new D()), (u[w] = new D());
    const d = new D(),
      f = new D(),
      m = new D(),
      v = new Le(),
      _ = new Le(),
      p = new Le(),
      h = new D(),
      A = new D();
    function S(w, q, ee) {
      d.fromArray(r, w * 3),
        f.fromArray(r, q * 3),
        m.fromArray(r, ee * 3),
        v.fromArray(o, w * 2),
        _.fromArray(o, q * 2),
        p.fromArray(o, ee * 2),
        f.sub(d),
        m.sub(d),
        _.sub(v),
        p.sub(v);
      const F = 1 / (_.x * p.y - p.x * _.y);
      isFinite(F) &&
        (h
          .copy(f)
          .multiplyScalar(p.y)
          .addScaledVector(m, -_.y)
          .multiplyScalar(F),
        A.copy(m)
          .multiplyScalar(_.x)
          .addScaledVector(f, -p.x)
          .multiplyScalar(F),
        c[w].add(h),
        c[q].add(h),
        c[ee].add(h),
        u[w].add(A),
        u[q].add(A),
        u[ee].add(A));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: n.length }]);
    for (let w = 0, q = T.length; w < q; ++w) {
      const ee = T[w],
        F = ee.start,
        G = ee.count;
      for (let H = F, Z = F + G; H < Z; H += 3) S(n[H + 0], n[H + 1], n[H + 2]);
    }
    const y = new D(),
      C = new D(),
      L = new D(),
      B = new D();
    function x(w) {
      L.fromArray(s, w * 3), B.copy(L);
      const q = c[w];
      y.copy(q),
        y.sub(L.multiplyScalar(L.dot(q))).normalize(),
        C.crossVectors(B, q);
      const F = C.dot(u[w]) < 0 ? -1 : 1;
      (l[w * 4] = y.x),
        (l[w * 4 + 1] = y.y),
        (l[w * 4 + 2] = y.z),
        (l[w * 4 + 3] = F);
    }
    for (let w = 0, q = T.length; w < q; ++w) {
      const ee = T[w],
        F = ee.start,
        G = ee.count;
      for (let H = F, Z = F + G; H < Z; H += 3)
        x(n[H + 0]), x(n[H + 1]), x(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new It(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const r = new D(),
        s = new D(),
        o = new D(),
        a = new D(),
        l = new D(),
        c = new D(),
        u = new D(),
        d = new D();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const v = e.getX(f + 0),
            _ = e.getX(f + 1),
            p = e.getX(f + 2);
          r.fromBufferAttribute(t, v),
            s.fromBufferAttribute(t, _),
            o.fromBufferAttribute(t, p),
            u.subVectors(o, s),
            d.subVectors(r, s),
            u.cross(d),
            a.fromBufferAttribute(n, v),
            l.fromBufferAttribute(n, _),
            c.fromBufferAttribute(n, p),
            a.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(v, a.x, a.y, a.z),
            n.setXYZ(_, l.x, l.y, l.z),
            n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          r.fromBufferAttribute(t, f + 0),
            s.fromBufferAttribute(t, f + 1),
            o.fromBufferAttribute(t, f + 2),
            u.subVectors(o, s),
            d.subVectors(r, s),
            u.cross(d),
            n.setXYZ(f + 0, u.x, u.y, u.z),
            n.setXYZ(f + 1, u.x, u.y, u.z),
            n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      rt.fromBufferAttribute(e, t),
        rt.normalize(),
        e.setXYZ(t, rt.x, rt.y, rt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        d = a.normalized,
        f = new c.constructor(l.length * u);
      let m = 0,
        v = 0;
      for (let _ = 0, p = l.length; _ < p; _++) {
        a.isInterleavedBufferAttribute
          ? (m = l[_] * a.data.stride + a.offset)
          : (m = l[_] * u);
        for (let h = 0; h < u; h++) f[v++] = c[m++];
      }
      return new It(f, u, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new rn(),
      n = this.index.array,
      r = this.attributes;
    for (const a in r) {
      const l = r[a],
        c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u],
          m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let d = 0, f = c.length; d < f; d++) {
        const m = c[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        d = s[c];
      for (let f = 0, m = d.length; f < m; f++) u.push(d[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const d = o[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Hs = new Qe(),
  un = new Il(),
  wi = new zr(),
  Vs = new D(),
  Nn = new D(),
  Fn = new D(),
  On = new D(),
  xr = new D(),
  Ri = new D(),
  Ci = new Le(),
  Li = new Le(),
  Pi = new Le(),
  ks = new D(),
  Ws = new D(),
  Xs = new D(),
  Ui = new D(),
  Di = new D();
class Dt extends ct {
  constructor(e = new rn(), t = new Ha()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      s = n.morphAttributes.position,
      o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Ri.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l],
          d = s[l];
        u !== 0 &&
          (xr.fromBufferAttribute(d, e),
          o ? Ri.addScaledVector(xr, u) : Ri.addScaledVector(xr.sub(t), u));
      }
      t.add(Ri);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      wi.copy(n.boundingSphere),
      wi.applyMatrix4(s),
      un.copy(e.ray).recast(e.near),
      !(
        wi.containsPoint(un.origin) === !1 &&
        (un.intersectSphere(wi, Vs) === null ||
          un.origin.distanceToSquared(Vs) > (e.far - e.near) ** 2)
      ) &&
        (Hs.copy(s).invert(),
        un.copy(e.ray).applyMatrix4(Hs),
        !(n.boundingBox !== null && un.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, un)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry,
      o = this.material,
      a = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      d = s.attributes.normal,
      f = s.groups,
      m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let v = 0, _ = f.length; v < _; v++) {
          const p = f[v],
            h = o[p.materialIndex],
            A = Math.max(p.start, m.start),
            S = Math.min(
              a.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let T = A, y = S; T < y; T += 3) {
            const C = a.getX(T),
              L = a.getX(T + 1),
              B = a.getX(T + 2);
            (r = Ii(this, h, e, n, c, u, d, C, L, B)),
              r &&
                ((r.faceIndex = Math.floor(T / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start),
          _ = Math.min(a.count, m.start + m.count);
        for (let p = v, h = _; p < h; p += 3) {
          const A = a.getX(p),
            S = a.getX(p + 1),
            T = a.getX(p + 2);
          (r = Ii(this, o, e, n, c, u, d, A, S, T)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let v = 0, _ = f.length; v < _; v++) {
          const p = f[v],
            h = o[p.materialIndex],
            A = Math.max(p.start, m.start),
            S = Math.min(
              l.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let T = A, y = S; T < y; T += 3) {
            const C = T,
              L = T + 1,
              B = T + 2;
            (r = Ii(this, h, e, n, c, u, d, C, L, B)),
              r &&
                ((r.faceIndex = Math.floor(T / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start),
          _ = Math.min(l.count, m.start + m.count);
        for (let p = v, h = _; p < h; p += 3) {
          const A = p,
            S = p + 1,
            T = p + 2;
          (r = Ii(this, o, e, n, c, u, d, A, S, T)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r));
        }
      }
  }
}
function kl(i, e, t, n, r, s, o, a) {
  let l;
  if (
    (e.side === mt
      ? (l = n.intersectTriangle(o, s, r, !0, a))
      : (l = n.intersectTriangle(r, s, o, e.side === nn, a)),
    l === null)
  )
    return null;
  Di.copy(a), Di.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Di);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Di.clone(), object: i };
}
function Ii(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, Nn),
    i.getVertexPosition(l, Fn),
    i.getVertexPosition(c, On);
  const u = kl(i, e, t, n, Nn, Fn, On, Ui);
  if (u) {
    r &&
      (Ci.fromBufferAttribute(r, a),
      Li.fromBufferAttribute(r, l),
      Pi.fromBufferAttribute(r, c),
      (u.uv = Rt.getInterpolation(Ui, Nn, Fn, On, Ci, Li, Pi, new Le()))),
      s &&
        (Ci.fromBufferAttribute(s, a),
        Li.fromBufferAttribute(s, l),
        Pi.fromBufferAttribute(s, c),
        (u.uv1 = Rt.getInterpolation(Ui, Nn, Fn, On, Ci, Li, Pi, new Le())),
        (u.uv2 = u.uv1)),
      o &&
        (ks.fromBufferAttribute(o, a),
        Ws.fromBufferAttribute(o, l),
        Xs.fromBufferAttribute(o, c),
        (u.normal = Rt.getInterpolation(Ui, Nn, Fn, On, ks, Ws, Xs, new D())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = { a, b: l, c, normal: new D(), materialIndex: 0 };
    Rt.getNormal(Nn, Fn, On, d.normal), (u.face = d);
  }
  return u;
}
class fi extends rn {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: o,
      });
    const a = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (o = Math.floor(o));
    const l = [],
      c = [],
      u = [],
      d = [];
    let f = 0,
      m = 0;
    v("z", "y", "x", -1, -1, n, t, e, o, s, 0),
      v("z", "y", "x", 1, -1, n, t, -e, o, s, 1),
      v("x", "z", "y", 1, 1, e, n, t, r, o, 2),
      v("x", "z", "y", 1, -1, e, n, -t, r, o, 3),
      v("x", "y", "z", 1, -1, e, t, n, r, s, 4),
      v("x", "y", "z", -1, -1, e, t, -n, r, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new Nt(c, 3)),
      this.setAttribute("normal", new Nt(u, 3)),
      this.setAttribute("uv", new Nt(d, 2));
    function v(_, p, h, A, S, T, y, C, L, B, x) {
      const w = T / L,
        q = y / B,
        ee = T / 2,
        F = y / 2,
        G = C / 2,
        H = L + 1,
        Z = B + 1;
      let X = 0,
        Y = 0;
      const te = new D();
      for (let K = 0; K < Z; K++) {
        const me = K * q - F;
        for (let N = 0; N < H; N++) {
          const $ = N * w - ee;
          (te[_] = $ * A),
            (te[p] = me * S),
            (te[h] = G),
            c.push(te.x, te.y, te.z),
            (te[_] = 0),
            (te[p] = 0),
            (te[h] = C > 0 ? 1 : -1),
            u.push(te.x, te.y, te.z),
            d.push(N / L),
            d.push(1 - K / B),
            (X += 1);
        }
      }
      for (let K = 0; K < B; K++)
        for (let me = 0; me < L; me++) {
          const N = f + me + H * K,
            $ = f + me + H * (K + 1),
            J = f + (me + 1) + H * (K + 1),
            le = f + (me + 1) + H * K;
          l.push(N, $, le), l.push($, J, le), (Y += 6);
        }
      a.addGroup(m, Y, x), (m += Y), (f += X);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new fi(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function jn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone())
        : Array.isArray(r)
        ? (e[t][n] = r.slice())
        : (e[t][n] = r);
    }
  }
  return e;
}
function dt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = jn(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Wl(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function Wa(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : Ft;
}
const Xl = { clone: jn, merge: dt };
var Yl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  ql = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Sn extends di {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Yl),
      (this.fragmentShader = ql),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = jn(e.uniforms)),
      (this.uniformsGroups = Wl(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture
        ? (t.uniforms[r] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[r] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[r] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[r] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[r] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[r] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[r] = { type: "m4", value: o.toArray() })
        : (t.uniforms[r] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Xa extends ct {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Qe()),
      (this.projectionMatrix = new Qe()),
      (this.projectionMatrixInverse = new Qe()),
      (this.coordinateSystem = Yt);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Et extends Xa {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = ci * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ri * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return ci * 2 * Math.atan(Math.tan(ri * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, r, s, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(ri * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * r) / l),
        (t -= (o.offsetY * n) / c),
        (r *= o.width / l),
        (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Bn = -90,
  zn = 1;
class jl extends ct {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null);
    const r = new Et(Bn, zn, e, t);
    (r.layers = this.layers), this.add(r);
    const s = new Et(Bn, zn, e, t);
    (s.layers = this.layers), this.add(s);
    const o = new Et(Bn, zn, e, t);
    (o.layers = this.layers), this.add(o);
    const a = new Et(Bn, zn, e, t);
    (a.layers = this.layers), this.add(a);
    const l = new Et(Bn, zn, e, t);
    (l.layers = this.layers), this.add(l);
    const c = new Et(Bn, zn, e, t);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Yt)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, -1, 0),
        a.up.set(0, 1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === Gi)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, -1, 0),
        a.up.set(0, -1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, s, o, a, l, c] = this.children,
      u = e.getRenderTarget(),
      d = e.toneMapping,
      f = e.xr.enabled;
    (e.toneMapping = qt), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, r),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, a),
      e.setRenderTarget(n, 4),
      e.render(t, l),
      (n.texture.generateMipmaps = m),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = d),
      (e.xr.enabled = f),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Ya extends _t {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Xn),
      super(e, t, n, r, s, o, a, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Kl extends xn {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    t.encoding !== void 0 &&
      (ai(
        "THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (t.colorSpace = t.encoding === gn ? Ce : vn)),
      (this.texture = new Ya(
        r,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : St);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new fi(5, 5, 5),
      s = new Sn({
        name: "CubemapFromEquirect",
        uniforms: jn(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: mt,
        blending: en,
      });
    s.uniforms.tEquirect.value = t;
    const o = new Dt(r, s),
      a = t.minFilter;
    return (
      t.minFilter === oi && (t.minFilter = St),
      new jl(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const Mr = new D(),
  Zl = new D(),
  $l = new Ie();
class dn {
  constructor(e = new D(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Mr.subVectors(n, t).cross(Zl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Mr),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || $l.getNormalMatrix(e),
      r = this.coplanarPoint(Mr).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const hn = new zr(),
  Ni = new D();
class Gr {
  constructor(
    e = new dn(),
    t = new dn(),
    n = new dn(),
    r = new dn(),
    s = new dn(),
    o = new dn()
  ) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(r),
      a[4].copy(s),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Yt) {
    const n = this.planes,
      r = e.elements,
      s = r[0],
      o = r[1],
      a = r[2],
      l = r[3],
      c = r[4],
      u = r[5],
      d = r[6],
      f = r[7],
      m = r[8],
      v = r[9],
      _ = r[10],
      p = r[11],
      h = r[12],
      A = r[13],
      S = r[14],
      T = r[15];
    if (
      (n[0].setComponents(l - s, f - c, p - m, T - h).normalize(),
      n[1].setComponents(l + s, f + c, p + m, T + h).normalize(),
      n[2].setComponents(l + o, f + u, p + v, T + A).normalize(),
      n[3].setComponents(l - o, f - u, p - v, T - A).normalize(),
      n[4].setComponents(l - a, f - d, p - _, T - S).normalize(),
      t === Yt)
    )
      n[5].setComponents(l + a, f + d, p + _, T + S).normalize();
    else if (t === Gi) n[5].setComponents(a, d, _, S).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(hn);
  }
  intersectsSprite(e) {
    return (
      hn.center.set(0, 0, 0),
      (hn.radius = 0.7071067811865476),
      hn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(hn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((Ni.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (Ni.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (Ni.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(Ni) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function qa() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(s, o) {
    t(s, o), (n = i.requestAnimationFrame(r));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function Jl(i, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function r(c, u) {
    const d = c.array,
      f = c.usage,
      m = i.createBuffer();
    i.bindBuffer(u, m), i.bufferData(u, d, f), c.onUploadCallback();
    let v;
    if (d instanceof Float32Array) v = i.FLOAT;
    else if (d instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) v = i.HALF_FLOAT;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else v = i.UNSIGNED_SHORT;
    else if (d instanceof Int16Array) v = i.SHORT;
    else if (d instanceof Uint32Array) v = i.UNSIGNED_INT;
    else if (d instanceof Int32Array) v = i.INT;
    else if (d instanceof Int8Array) v = i.BYTE;
    else if (d instanceof Uint8Array) v = i.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray) v = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + d
      );
    return {
      buffer: m,
      type: v,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function s(c, u, d) {
    const f = u.array,
      m = u.updateRange;
    i.bindBuffer(d, c),
      m.count === -1
        ? i.bufferSubData(d, 0, f)
        : (t
            ? i.bufferSubData(
                d,
                m.offset * f.BYTES_PER_ELEMENT,
                f,
                m.offset,
                m.count
              )
            : i.bufferSubData(
                d,
                m.offset * f.BYTES_PER_ELEMENT,
                f.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1)),
      u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (i.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d === void 0
      ? n.set(c, r(c, u))
      : d.version < c.version && (s(d.buffer, c, u), (d.version = c.version));
  }
  return { get: o, remove: a, update: l };
}
class Hr extends rn {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      });
    const s = e / 2,
      o = t / 2,
      a = Math.floor(n),
      l = Math.floor(r),
      c = a + 1,
      u = l + 1,
      d = e / a,
      f = t / l,
      m = [],
      v = [],
      _ = [],
      p = [];
    for (let h = 0; h < u; h++) {
      const A = h * f - o;
      for (let S = 0; S < c; S++) {
        const T = S * d - s;
        v.push(T, -A, 0), _.push(0, 0, 1), p.push(S / a), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let A = 0; A < a; A++) {
        const S = A + c * h,
          T = A + c * (h + 1),
          y = A + 1 + c * (h + 1),
          C = A + 1 + c * h;
        m.push(S, T, C), m.push(T, y, C);
      }
    this.setIndex(m),
      this.setAttribute("position", new Nt(v, 3)),
      this.setAttribute("normal", new Nt(_, 3)),
      this.setAttribute("uv", new Nt(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Hr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Ql = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  ec = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  tc = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  nc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  ic = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  rc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  sc = "vec3 transformed = vec3( position );",
  ac = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  oc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  lc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  cc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  uc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  hc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  dc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  fc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  pc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  mc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  _c = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  gc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  vc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  xc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Mc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Sc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Ec = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  yc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Tc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  bc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Ac = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  wc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Rc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Cc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Lc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Pc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Uc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Dc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Ic = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Nc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Fc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Oc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Bc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  zc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Gc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Hc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Vc = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  kc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Wc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Xc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Yc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  qc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,
  jc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Kc = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Zc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  $c = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Jc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Qc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  eu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  tu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  nu = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,
  iu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  ru = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  su = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  au = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  ou = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  lu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  cu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  uu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  hu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  du = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,
  fu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  pu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  mu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  _u = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  gu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  vu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  xu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Mu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Su = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Eu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  yu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Tu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  bu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Au = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  wu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Ru = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Cu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Lu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  Pu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Uu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Du = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Iu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Nu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Fu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Ou = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Bu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  zu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Gu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Hu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Vu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  ku = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Wu = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Xu = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Yu = `#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  qu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ju = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Ku = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Zu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  $u = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Ju = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Qu = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  eh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  th = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  nh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  ih = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  rh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  sh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  ah = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  oh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  lh = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  ch = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  uh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  hh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  dh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  fh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ph = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  mh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  _h = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  gh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  vh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  xh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Mh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Sh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Eh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  yh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Th = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  bh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Ah = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  wh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Ue = {
    alphamap_fragment: Ql,
    alphamap_pars_fragment: ec,
    alphatest_fragment: tc,
    alphatest_pars_fragment: nc,
    aomap_fragment: ic,
    aomap_pars_fragment: rc,
    begin_vertex: sc,
    beginnormal_vertex: ac,
    bsdfs: oc,
    iridescence_fragment: lc,
    bumpmap_pars_fragment: cc,
    clipping_planes_fragment: uc,
    clipping_planes_pars_fragment: hc,
    clipping_planes_pars_vertex: dc,
    clipping_planes_vertex: fc,
    color_fragment: pc,
    color_pars_fragment: mc,
    color_pars_vertex: _c,
    color_vertex: gc,
    common: vc,
    cube_uv_reflection_fragment: xc,
    defaultnormal_vertex: Mc,
    displacementmap_pars_vertex: Sc,
    displacementmap_vertex: Ec,
    emissivemap_fragment: yc,
    emissivemap_pars_fragment: Tc,
    encodings_fragment: bc,
    encodings_pars_fragment: Ac,
    envmap_fragment: wc,
    envmap_common_pars_fragment: Rc,
    envmap_pars_fragment: Cc,
    envmap_pars_vertex: Lc,
    envmap_physical_pars_fragment: Vc,
    envmap_vertex: Pc,
    fog_vertex: Uc,
    fog_pars_vertex: Dc,
    fog_fragment: Ic,
    fog_pars_fragment: Nc,
    gradientmap_pars_fragment: Fc,
    lightmap_fragment: Oc,
    lightmap_pars_fragment: Bc,
    lights_lambert_fragment: zc,
    lights_lambert_pars_fragment: Gc,
    lights_pars_begin: Hc,
    lights_toon_fragment: kc,
    lights_toon_pars_fragment: Wc,
    lights_phong_fragment: Xc,
    lights_phong_pars_fragment: Yc,
    lights_physical_fragment: qc,
    lights_physical_pars_fragment: jc,
    lights_fragment_begin: Kc,
    lights_fragment_maps: Zc,
    lights_fragment_end: $c,
    logdepthbuf_fragment: Jc,
    logdepthbuf_pars_fragment: Qc,
    logdepthbuf_pars_vertex: eu,
    logdepthbuf_vertex: tu,
    map_fragment: nu,
    map_pars_fragment: iu,
    map_particle_fragment: ru,
    map_particle_pars_fragment: su,
    metalnessmap_fragment: au,
    metalnessmap_pars_fragment: ou,
    morphcolor_vertex: lu,
    morphnormal_vertex: cu,
    morphtarget_pars_vertex: uu,
    morphtarget_vertex: hu,
    normal_fragment_begin: du,
    normal_fragment_maps: fu,
    normal_pars_fragment: pu,
    normal_pars_vertex: mu,
    normal_vertex: _u,
    normalmap_pars_fragment: gu,
    clearcoat_normal_fragment_begin: vu,
    clearcoat_normal_fragment_maps: xu,
    clearcoat_pars_fragment: Mu,
    iridescence_pars_fragment: Su,
    output_fragment: Eu,
    packing: yu,
    premultiplied_alpha_fragment: Tu,
    project_vertex: bu,
    dithering_fragment: Au,
    dithering_pars_fragment: wu,
    roughnessmap_fragment: Ru,
    roughnessmap_pars_fragment: Cu,
    shadowmap_pars_fragment: Lu,
    shadowmap_pars_vertex: Pu,
    shadowmap_vertex: Uu,
    shadowmask_pars_fragment: Du,
    skinbase_vertex: Iu,
    skinning_pars_vertex: Nu,
    skinning_vertex: Fu,
    skinnormal_vertex: Ou,
    specularmap_fragment: Bu,
    specularmap_pars_fragment: zu,
    tonemapping_fragment: Gu,
    tonemapping_pars_fragment: Hu,
    transmission_fragment: Vu,
    transmission_pars_fragment: ku,
    uv_pars_fragment: Wu,
    uv_pars_vertex: Xu,
    uv_vertex: Yu,
    worldpos_vertex: qu,
    background_vert: ju,
    background_frag: Ku,
    backgroundCube_vert: Zu,
    backgroundCube_frag: $u,
    cube_vert: Ju,
    cube_frag: Qu,
    depth_vert: eh,
    depth_frag: th,
    distanceRGBA_vert: nh,
    distanceRGBA_frag: ih,
    equirect_vert: rh,
    equirect_frag: sh,
    linedashed_vert: ah,
    linedashed_frag: oh,
    meshbasic_vert: lh,
    meshbasic_frag: ch,
    meshlambert_vert: uh,
    meshlambert_frag: hh,
    meshmatcap_vert: dh,
    meshmatcap_frag: fh,
    meshnormal_vert: ph,
    meshnormal_frag: mh,
    meshphong_vert: _h,
    meshphong_frag: gh,
    meshphysical_vert: vh,
    meshphysical_frag: xh,
    meshtoon_vert: Mh,
    meshtoon_frag: Sh,
    points_vert: Eh,
    points_frag: yh,
    shadow_vert: Th,
    shadow_frag: bh,
    sprite_vert: Ah,
    sprite_frag: wh,
  },
  se = {
    common: {
      diffuse: { value: new He(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ie() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ie() },
    },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ie() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ie() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ie() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ie() },
      normalScale: { value: new Le(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ie() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ie() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ie() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ie() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new He(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new He(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ie() },
    },
    sprite: {
      diffuse: { value: new He(16777215) },
      opacity: { value: 1 },
      center: { value: new Le(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ie() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
    },
  },
  Ut = {
    basic: {
      uniforms: dt([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.fog,
      ]),
      vertexShader: Ue.meshbasic_vert,
      fragmentShader: Ue.meshbasic_frag,
    },
    lambert: {
      uniforms: dt([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        { emissive: { value: new He(0) } },
      ]),
      vertexShader: Ue.meshlambert_vert,
      fragmentShader: Ue.meshlambert_frag,
    },
    phong: {
      uniforms: dt([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new He(0) },
          specular: { value: new He(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ue.meshphong_vert,
      fragmentShader: Ue.meshphong_frag,
    },
    standard: {
      uniforms: dt([
        se.common,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.roughnessmap,
        se.metalnessmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new He(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ue.meshphysical_vert,
      fragmentShader: Ue.meshphysical_frag,
    },
    toon: {
      uniforms: dt([
        se.common,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.gradientmap,
        se.fog,
        se.lights,
        { emissive: { value: new He(0) } },
      ]),
      vertexShader: Ue.meshtoon_vert,
      fragmentShader: Ue.meshtoon_frag,
    },
    matcap: {
      uniforms: dt([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ue.meshmatcap_vert,
      fragmentShader: Ue.meshmatcap_frag,
    },
    points: {
      uniforms: dt([se.points, se.fog]),
      vertexShader: Ue.points_vert,
      fragmentShader: Ue.points_frag,
    },
    dashed: {
      uniforms: dt([
        se.common,
        se.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ue.linedashed_vert,
      fragmentShader: Ue.linedashed_frag,
    },
    depth: {
      uniforms: dt([se.common, se.displacementmap]),
      vertexShader: Ue.depth_vert,
      fragmentShader: Ue.depth_frag,
    },
    normal: {
      uniforms: dt([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ue.meshnormal_vert,
      fragmentShader: Ue.meshnormal_frag,
    },
    sprite: {
      uniforms: dt([se.sprite, se.fog]),
      vertexShader: Ue.sprite_vert,
      fragmentShader: Ue.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ie() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ue.background_vert,
      fragmentShader: Ue.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ue.backgroundCube_vert,
      fragmentShader: Ue.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ue.cube_vert,
      fragmentShader: Ue.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ue.equirect_vert,
      fragmentShader: Ue.equirect_frag,
    },
    distanceRGBA: {
      uniforms: dt([
        se.common,
        se.displacementmap,
        {
          referencePosition: { value: new D() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ue.distanceRGBA_vert,
      fragmentShader: Ue.distanceRGBA_frag,
    },
    shadow: {
      uniforms: dt([
        se.lights,
        se.fog,
        { color: { value: new He(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ue.shadow_vert,
      fragmentShader: Ue.shadow_frag,
    },
  };
Ut.physical = {
  uniforms: dt([
    Ut.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ie() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ie() },
      clearcoatNormalScale: { value: new Le(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ie() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ie() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ie() },
      sheen: { value: 0 },
      sheenColor: { value: new He(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ie() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ie() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ie() },
      transmissionSamplerSize: { value: new Le() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ie() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new He(0) },
      specularColor: { value: new He(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ie() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ie() },
      anisotropyVector: { value: new Le() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ie() },
    },
  ]),
  vertexShader: Ue.meshphysical_vert,
  fragmentShader: Ue.meshphysical_frag,
};
const Fi = { r: 0, b: 0, g: 0 };
function Rh(i, e, t, n, r, s, o) {
  const a = new He(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    d = null,
    f = 0,
    m = null;
  function v(p, h) {
    let A = !1,
      S = h.isScene === !0 ? h.background : null;
    switch (
      (S && S.isTexture && (S = (h.backgroundBlurriness > 0 ? t : e).get(S)),
      S === null ? _(a, l) : S && S.isColor && (_(S, 1), (A = !0)),
      i.xr.getEnvironmentBlendMode())
    ) {
      case "opaque":
        A = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, o), (A = !0);
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, o), (A = !0);
        break;
    }
    (i.autoClear || A) &&
      i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil),
      S && (S.isCubeTexture || S.mapping === Vi)
        ? (u === void 0 &&
            ((u = new Dt(
              new fi(1, 1, 1),
              new Sn({
                name: "BackgroundCubeMaterial",
                uniforms: jn(Ut.backgroundCube.uniforms),
                vertexShader: Ut.backgroundCube.vertexShader,
                fragmentShader: Ut.backgroundCube.fragmentShader,
                side: mt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            u.geometry.deleteAttribute("uv"),
            (u.onBeforeRender = function (C, L, B) {
              this.matrixWorld.copyPosition(B.matrixWorld);
            }),
            Object.defineProperty(u.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(u)),
          (u.material.uniforms.envMap.value = S),
          (u.material.uniforms.flipEnvMap.value =
            S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            h.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value =
            h.backgroundIntensity),
          (u.material.toneMapped = S.colorSpace !== Ce),
          (d !== S || f !== S.version || m !== i.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (d = S),
            (f = S.version),
            (m = i.toneMapping)),
          u.layers.enableAll(),
          p.unshift(u, u.geometry, u.material, 0, 0, null))
        : S &&
          S.isTexture &&
          (c === void 0 &&
            ((c = new Dt(
              new Hr(2, 2),
              new Sn({
                name: "BackgroundMaterial",
                uniforms: jn(Ut.background.uniforms),
                vertexShader: Ut.background.vertexShader,
                fragmentShader: Ut.background.fragmentShader,
                side: nn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(c)),
          (c.material.uniforms.t2D.value = S),
          (c.material.uniforms.backgroundIntensity.value =
            h.backgroundIntensity),
          (c.material.toneMapped = S.colorSpace !== Ce),
          S.matrixAutoUpdate === !0 && S.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(S.matrix),
          (d !== S || f !== S.version || m !== i.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (d = S),
            (f = S.version),
            (m = i.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function _(p, h) {
    p.getRGB(Fi, Wa(i)), n.buffers.color.setClear(Fi.r, Fi.g, Fi.b, h, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (p, h = 1) {
      a.set(p), (l = h), _(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (p) {
      (l = p), _(a, l);
    },
    render: v,
  };
}
function Ch(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || s !== null,
    a = {},
    l = p(null);
  let c = l,
    u = !1;
  function d(G, H, Z, X, Y) {
    let te = !1;
    if (o) {
      const K = _(X, Z, H);
      c !== K && ((c = K), m(c.object)),
        (te = h(G, X, Z, Y)),
        te && A(G, X, Z, Y);
    } else {
      const K = H.wireframe === !0;
      (c.geometry !== X.id || c.program !== Z.id || c.wireframe !== K) &&
        ((c.geometry = X.id), (c.program = Z.id), (c.wireframe = K), (te = !0));
    }
    Y !== null && t.update(Y, i.ELEMENT_ARRAY_BUFFER),
      (te || u) &&
        ((u = !1),
        B(G, H, Z, X),
        Y !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer));
  }
  function f() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function m(G) {
    return n.isWebGL2 ? i.bindVertexArray(G) : s.bindVertexArrayOES(G);
  }
  function v(G) {
    return n.isWebGL2 ? i.deleteVertexArray(G) : s.deleteVertexArrayOES(G);
  }
  function _(G, H, Z) {
    const X = Z.wireframe === !0;
    let Y = a[G.id];
    Y === void 0 && ((Y = {}), (a[G.id] = Y));
    let te = Y[H.id];
    te === void 0 && ((te = {}), (Y[H.id] = te));
    let K = te[X];
    return K === void 0 && ((K = p(f())), (te[X] = K)), K;
  }
  function p(G) {
    const H = [],
      Z = [],
      X = [];
    for (let Y = 0; Y < r; Y++) (H[Y] = 0), (Z[Y] = 0), (X[Y] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: Z,
      attributeDivisors: X,
      object: G,
      attributes: {},
      index: null,
    };
  }
  function h(G, H, Z, X) {
    const Y = c.attributes,
      te = H.attributes;
    let K = 0;
    const me = Z.getAttributes();
    for (const N in me)
      if (me[N].location >= 0) {
        const J = Y[N];
        let le = te[N];
        if (
          (le === void 0 &&
            (N === "instanceMatrix" &&
              G.instanceMatrix &&
              (le = G.instanceMatrix),
            N === "instanceColor" && G.instanceColor && (le = G.instanceColor)),
          J === void 0 || J.attribute !== le || (le && J.data !== le.data))
        )
          return !0;
        K++;
      }
    return c.attributesNum !== K || c.index !== X;
  }
  function A(G, H, Z, X) {
    const Y = {},
      te = H.attributes;
    let K = 0;
    const me = Z.getAttributes();
    for (const N in me)
      if (me[N].location >= 0) {
        let J = te[N];
        J === void 0 &&
          (N === "instanceMatrix" && G.instanceMatrix && (J = G.instanceMatrix),
          N === "instanceColor" && G.instanceColor && (J = G.instanceColor));
        const le = {};
        (le.attribute = J), J && J.data && (le.data = J.data), (Y[N] = le), K++;
      }
    (c.attributes = Y), (c.attributesNum = K), (c.index = X);
  }
  function S() {
    const G = c.newAttributes;
    for (let H = 0, Z = G.length; H < Z; H++) G[H] = 0;
  }
  function T(G) {
    y(G, 0);
  }
  function y(G, H) {
    const Z = c.newAttributes,
      X = c.enabledAttributes,
      Y = c.attributeDivisors;
    (Z[G] = 1),
      X[G] === 0 && (i.enableVertexAttribArray(G), (X[G] = 1)),
      Y[G] !== H &&
        ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](G, H),
        (Y[G] = H));
  }
  function C() {
    const G = c.newAttributes,
      H = c.enabledAttributes;
    for (let Z = 0, X = H.length; Z < X; Z++)
      H[Z] !== G[Z] && (i.disableVertexAttribArray(Z), (H[Z] = 0));
  }
  function L(G, H, Z, X, Y, te, K) {
    K === !0
      ? i.vertexAttribIPointer(G, H, Z, Y, te)
      : i.vertexAttribPointer(G, H, Z, X, Y, te);
  }
  function B(G, H, Z, X) {
    if (
      n.isWebGL2 === !1 &&
      (G.isInstancedMesh || X.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    S();
    const Y = X.attributes,
      te = Z.getAttributes(),
      K = H.defaultAttributeValues;
    for (const me in te) {
      const N = te[me];
      if (N.location >= 0) {
        let $ = Y[me];
        if (
          ($ === void 0 &&
            (me === "instanceMatrix" &&
              G.instanceMatrix &&
              ($ = G.instanceMatrix),
            me === "instanceColor" && G.instanceColor && ($ = G.instanceColor)),
          $ !== void 0)
        ) {
          const J = $.normalized,
            le = $.itemSize,
            ce = t.get($);
          if (ce === void 0) continue;
          const ge = ce.buffer,
            Pe = ce.type,
            Se = ce.bytesPerElement,
            Ye =
              n.isWebGL2 === !0 &&
              (Pe === i.INT || Pe === i.UNSIGNED_INT || $.gpuType === Aa);
          if ($.isInterleavedBufferAttribute) {
            const Ne = $.data,
              U = Ne.stride,
              $e = $.offset;
            if (Ne.isInstancedInterleavedBuffer) {
              for (let ve = 0; ve < N.locationSize; ve++)
                y(N.location + ve, Ne.meshPerAttribute);
              G.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = Ne.meshPerAttribute * Ne.count);
            } else
              for (let ve = 0; ve < N.locationSize; ve++) T(N.location + ve);
            i.bindBuffer(i.ARRAY_BUFFER, ge);
            for (let ve = 0; ve < N.locationSize; ve++)
              L(
                N.location + ve,
                le / N.locationSize,
                Pe,
                J,
                U * Se,
                ($e + (le / N.locationSize) * ve) * Se,
                Ye
              );
          } else {
            if ($.isInstancedBufferAttribute) {
              for (let Ne = 0; Ne < N.locationSize; Ne++)
                y(N.location + Ne, $.meshPerAttribute);
              G.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let Ne = 0; Ne < N.locationSize; Ne++) T(N.location + Ne);
            i.bindBuffer(i.ARRAY_BUFFER, ge);
            for (let Ne = 0; Ne < N.locationSize; Ne++)
              L(
                N.location + Ne,
                le / N.locationSize,
                Pe,
                J,
                le * Se,
                (le / N.locationSize) * Ne * Se,
                Ye
              );
          }
        } else if (K !== void 0) {
          const J = K[me];
          if (J !== void 0)
            switch (J.length) {
              case 2:
                i.vertexAttrib2fv(N.location, J);
                break;
              case 3:
                i.vertexAttrib3fv(N.location, J);
                break;
              case 4:
                i.vertexAttrib4fv(N.location, J);
                break;
              default:
                i.vertexAttrib1fv(N.location, J);
            }
        }
      }
    }
    C();
  }
  function x() {
    ee();
    for (const G in a) {
      const H = a[G];
      for (const Z in H) {
        const X = H[Z];
        for (const Y in X) v(X[Y].object), delete X[Y];
        delete H[Z];
      }
      delete a[G];
    }
  }
  function w(G) {
    if (a[G.id] === void 0) return;
    const H = a[G.id];
    for (const Z in H) {
      const X = H[Z];
      for (const Y in X) v(X[Y].object), delete X[Y];
      delete H[Z];
    }
    delete a[G.id];
  }
  function q(G) {
    for (const H in a) {
      const Z = a[H];
      if (Z[G.id] === void 0) continue;
      const X = Z[G.id];
      for (const Y in X) v(X[Y].object), delete X[Y];
      delete Z[G.id];
    }
  }
  function ee() {
    F(), (u = !0), c !== l && ((c = l), m(c.object));
  }
  function F() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: d,
    reset: ee,
    resetDefaultState: F,
    dispose: x,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: q,
    initAttributes: S,
    enableAttribute: T,
    disableUnusedAttributes: C,
  };
}
function Lh(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, u) {
    i.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, d) {
    if (d === 0) return;
    let f, m;
    if (r) (f = i), (m = "drawArraysInstanced");
    else if (
      ((f = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      f === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    f[m](s, c, u, d), t.update(u, s, d);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = l);
}
function Ph(i, e, t) {
  let n;
  function r() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const L = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(L) {
    if (L === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      L = "mediump";
    }
    return L === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  const o =
    typeof WebGL2RenderingContext < "u" &&
    i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      l,
      "instead."
    ),
    (a = l));
  const c = o || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    f = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    m = i.getParameter(i.MAX_TEXTURE_SIZE),
    v = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    _ = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    h = i.getParameter(i.MAX_VARYING_VECTORS),
    A = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    S = f > 0,
    T = o || e.has("OES_texture_float"),
    y = S && T,
    C = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: v,
    maxAttributes: _,
    maxVertexUniforms: p,
    maxVaryings: h,
    maxFragmentUniforms: A,
    vertexTextures: S,
    floatFragmentTextures: T,
    floatVertexTextures: y,
    maxSamples: C,
  };
}
function Uh(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const o = new dn(),
    a = new Ie(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, f) {
      const m = d.length !== 0 || f || n !== 0 || r;
      return (r = f), (n = d.length), m;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (d, f) {
      t = u(d, f, 0);
    }),
    (this.setState = function (d, f, m) {
      const v = d.clippingPlanes,
        _ = d.clipIntersection,
        p = d.clipShadows,
        h = i.get(d);
      if (!r || v === null || v.length === 0 || (s && !p)) s ? u(null) : c();
      else {
        const A = s ? 0 : n,
          S = A * 4;
        let T = h.clippingState || null;
        (l.value = T), (T = u(v, f, S, m));
        for (let y = 0; y !== S; ++y) T[y] = t[y];
        (h.clippingState = T),
          (this.numIntersection = _ ? this.numPlanes : 0),
          (this.numPlanes += A);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(d, f, m, v) {
    const _ = d !== null ? d.length : 0;
    let p = null;
    if (_ !== 0) {
      if (((p = l.value), v !== !0 || p === null)) {
        const h = m + _ * 4,
          A = f.matrixWorldInverse;
        a.getNormalMatrix(A),
          (p === null || p.length < h) && (p = new Float32Array(h));
        for (let S = 0, T = m; S !== _; ++S, T += 4)
          o.copy(d[S]).applyMatrix4(A, a),
            o.normal.toArray(p, T),
            (p[T + 3] = o.constant);
      }
      (l.value = p), (l.needsUpdate = !0);
    }
    return (e.numPlanes = _), (e.numIntersection = 0), p;
  }
}
function Dh(i) {
  let e = new WeakMap();
  function t(o, a) {
    return a === Rr ? (o.mapping = Xn) : a === Cr && (o.mapping = Yn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Rr || a === Cr)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Kl(l.height / 2);
            return (
              c.fromEquirectangularTexture(i, o),
              e.set(o, c),
              o.addEventListener("dispose", r),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class ja extends Xa {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - e,
      o = n + e,
      a = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (o = s + c * this.view.width),
        (a -= u * this.view.offsetY),
        (l = a - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      s,
      o,
      a,
      l,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Vn = 4,
  Ys = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  pn = 20,
  Sr = new ja(),
  qs = new He();
let Er = null;
const fn = (1 + Math.sqrt(5)) / 2,
  Gn = 1 / fn,
  js = [
    new D(1, 1, 1),
    new D(-1, 1, 1),
    new D(1, 1, -1),
    new D(-1, 1, -1),
    new D(0, fn, Gn),
    new D(0, fn, -Gn),
    new D(Gn, 0, fn),
    new D(-Gn, 0, fn),
    new D(fn, Gn, 0),
    new D(-fn, Gn, 0),
  ];
class Ks {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    (Er = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Js()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = $s()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Er),
      (e.scissorTest = !1),
      Oi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Xn || e.mapping === Yn
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Er = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: St,
        minFilter: St,
        generateMipmaps: !1,
        type: li,
        format: Lt,
        colorSpace: Ft,
        depthBuffer: !1,
      },
      r = Zs(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Zs(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Ih(s)),
        (this._blurMaterial = Nh(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Dt(this._lodPlanes[0], e);
    this._renderer.compile(t, Sr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new Et(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      d = u.autoClear,
      f = u.toneMapping;
    u.getClearColor(qs), (u.toneMapping = qt), (u.autoClear = !1);
    const m = new Ha({
        name: "PMREM.Background",
        side: mt,
        depthWrite: !1,
        depthTest: !1,
      }),
      v = new Dt(new fi(), m);
    let _ = !1;
    const p = e.background;
    p
      ? p.isColor && (m.color.copy(p), (e.background = null), (_ = !0))
      : (m.color.copy(qs), (_ = !0));
    for (let h = 0; h < 6; h++) {
      const A = h % 3;
      A === 0
        ? (a.up.set(0, l[h], 0), a.lookAt(c[h], 0, 0))
        : A === 1
        ? (a.up.set(0, 0, l[h]), a.lookAt(0, c[h], 0))
        : (a.up.set(0, l[h], 0), a.lookAt(0, 0, c[h]));
      const S = this._cubeSize;
      Oi(r, A * S, h > 2 ? S : 0, S, S),
        u.setRenderTarget(r),
        _ && u.render(v, a),
        u.render(e, a);
    }
    v.geometry.dispose(),
      v.material.dispose(),
      (u.toneMapping = f),
      (u.autoClear = d),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === Xn || e.mapping === Yn;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Js()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = $s());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      o = new Dt(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Oi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, Sr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1]
        ),
        o = js[(r - 1) % js.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, r, "latitudinal", s),
      this._halfBlur(o, e, n, n, r, "longitudinal", s);
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      d = new Dt(this._lodPlanes[r], c),
      f = c.uniforms,
      m = this._sizeLods[n] - 1,
      v = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * pn - 1),
      _ = s / v,
      p = isFinite(s) ? 1 + Math.floor(u * _) : pn;
    p > pn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pn}`
      );
    const h = [];
    let A = 0;
    for (let L = 0; L < pn; ++L) {
      const B = L / _,
        x = Math.exp((-B * B) / 2);
      h.push(x), L === 0 ? (A += x) : L < p && (A += 2 * x);
    }
    for (let L = 0; L < h.length; L++) h[L] = h[L] / A;
    (f.envMap.value = e.texture),
      (f.samples.value = p),
      (f.weights.value = h),
      (f.latitudinal.value = o === "latitudinal"),
      a && (f.poleAxis.value = a);
    const { _lodMax: S } = this;
    (f.dTheta.value = v), (f.mipInt.value = S - n);
    const T = this._sizeLods[r],
      y = 3 * T * (r > S - Vn ? r - S + Vn : 0),
      C = 4 * (this._cubeSize - T);
    Oi(t, y, C, 3 * T, 2 * T), l.setRenderTarget(t), l.render(d, Sr);
  }
}
function Ih(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const s = i - Vn + 1 + Ys.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - Vn ? (l = Ys[o - i + Vn - 1]) : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2),
      u = -c,
      d = 1 + c,
      f = [u, u, d, u, d, d, u, u, d, d, u, d],
      m = 6,
      v = 6,
      _ = 3,
      p = 2,
      h = 1,
      A = new Float32Array(_ * v * m),
      S = new Float32Array(p * v * m),
      T = new Float32Array(h * v * m);
    for (let C = 0; C < m; C++) {
      const L = ((C % 3) * 2) / 3 - 1,
        B = C > 2 ? 0 : -1,
        x = [
          L,
          B,
          0,
          L + 2 / 3,
          B,
          0,
          L + 2 / 3,
          B + 1,
          0,
          L,
          B,
          0,
          L + 2 / 3,
          B + 1,
          0,
          L,
          B + 1,
          0,
        ];
      A.set(x, _ * v * C), S.set(f, p * v * C);
      const w = [C, C, C, C, C, C];
      T.set(w, h * v * C);
    }
    const y = new rn();
    y.setAttribute("position", new It(A, _)),
      y.setAttribute("uv", new It(S, p)),
      y.setAttribute("faceIndex", new It(T, h)),
      e.push(y),
      r > Vn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Zs(i, e, t) {
  const n = new xn(i, e, t);
  return (
    (n.texture.mapping = Vi),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Oi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Nh(i, e, t) {
  const n = new Float32Array(pn),
    r = new D(0, 1, 0);
  return new Sn({
    name: "SphericalGaussianBlur",
    defines: {
      n: pn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: Vr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: en,
    depthTest: !1,
    depthWrite: !1,
  });
}
function $s() {
  return new Sn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Vr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: en,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Js() {
  return new Sn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Vr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: en,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Vr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Fh(i) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Rr || l === Cr,
        u = l === Xn || l === Yn;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return (
            t === null && (t = new Ks(i)),
            (d = c ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d)),
            e.set(a, d),
            d.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const d = a.image;
            if ((c && d && d.height > 0) || (u && d && r(d))) {
              t === null && (t = new Ks(i));
              const f = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", s), f.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function Oh(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r =
          i.getExtension("WEBGL_depth_texture") ||
          i.getExtension("MOZ_WEBGL_depth_texture") ||
          i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          i.getExtension("EXT_texture_filter_anisotropic") ||
          i.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          i.getExtension("WEBGL_compressed_texture_s3tc") ||
          i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          i.getExtension("WEBGL_compressed_texture_pvrtc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return (e[n] = r), r;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        r
      );
    },
  };
}
function Bh(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const v in f.attributes) e.remove(f.attributes[v]);
    for (const v in f.morphAttributes) {
      const _ = f.morphAttributes[v];
      for (let p = 0, h = _.length; p < h; p++) e.remove(_[p]);
    }
    f.removeEventListener("dispose", o), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(d, f) {
    return (
      r[f.id] === !0 ||
        (f.addEventListener("dispose", o),
        (r[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function l(d) {
    const f = d.attributes;
    for (const v in f) e.update(f[v], i.ARRAY_BUFFER);
    const m = d.morphAttributes;
    for (const v in m) {
      const _ = m[v];
      for (let p = 0, h = _.length; p < h; p++) e.update(_[p], i.ARRAY_BUFFER);
    }
  }
  function c(d) {
    const f = [],
      m = d.index,
      v = d.attributes.position;
    let _ = 0;
    if (m !== null) {
      const A = m.array;
      _ = m.version;
      for (let S = 0, T = A.length; S < T; S += 3) {
        const y = A[S + 0],
          C = A[S + 1],
          L = A[S + 2];
        f.push(y, C, C, L, L, y);
      }
    } else {
      const A = v.array;
      _ = v.version;
      for (let S = 0, T = A.length / 3 - 1; S < T; S += 3) {
        const y = S + 0,
          C = S + 1,
          L = S + 2;
        f.push(y, C, C, L, L, y);
      }
    }
    const p = new (Na(f) ? ka : Va)(f, 1);
    p.version = _;
    const h = s.get(d);
    h && e.remove(h), s.set(d, p);
  }
  function u(d) {
    const f = s.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && c(d);
    } else c(d);
    return s.get(d);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function zh(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(f) {
    s = f;
  }
  let a, l;
  function c(f) {
    (a = f.type), (l = f.bytesPerElement);
  }
  function u(f, m) {
    i.drawElements(s, m, a, f * l), t.update(m, s, 1);
  }
  function d(f, m, v) {
    if (v === 0) return;
    let _, p;
    if (r) (_ = i), (p = "drawElementsInstanced");
    else if (
      ((_ = e.get("ANGLE_instanced_arrays")),
      (p = "drawElementsInstancedANGLE"),
      _ === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    _[p](s, m, a, f * l, v), t.update(m, s, v);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = d);
}
function Gh(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, o, a) {
    switch ((t.calls++, o)) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function Hh(i, e) {
  return i[0] - e[0];
}
function Vh(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function kh(i, e, t) {
  const n = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    o = new st(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, d) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const v =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        _ = v !== void 0 ? v.length : 0;
      let p = s.get(u);
      if (p === void 0 || p.count !== _) {
        let H = function () {
          F.dispose(), s.delete(u), u.removeEventListener("dispose", H);
        };
        var m = H;
        p !== void 0 && p.texture.dispose();
        const S = u.morphAttributes.position !== void 0,
          T = u.morphAttributes.normal !== void 0,
          y = u.morphAttributes.color !== void 0,
          C = u.morphAttributes.position || [],
          L = u.morphAttributes.normal || [],
          B = u.morphAttributes.color || [];
        let x = 0;
        S === !0 && (x = 1), T === !0 && (x = 2), y === !0 && (x = 3);
        let w = u.attributes.position.count * x,
          q = 1;
        w > e.maxTextureSize &&
          ((q = Math.ceil(w / e.maxTextureSize)), (w = e.maxTextureSize));
        const ee = new Float32Array(w * q * 4 * _),
          F = new Ba(ee, w, q, _);
        (F.type = Qt), (F.needsUpdate = !0);
        const G = x * 4;
        for (let Z = 0; Z < _; Z++) {
          const X = C[Z],
            Y = L[Z],
            te = B[Z],
            K = w * q * 4 * Z;
          for (let me = 0; me < X.count; me++) {
            const N = me * G;
            S === !0 &&
              (o.fromBufferAttribute(X, me),
              (ee[K + N + 0] = o.x),
              (ee[K + N + 1] = o.y),
              (ee[K + N + 2] = o.z),
              (ee[K + N + 3] = 0)),
              T === !0 &&
                (o.fromBufferAttribute(Y, me),
                (ee[K + N + 4] = o.x),
                (ee[K + N + 5] = o.y),
                (ee[K + N + 6] = o.z),
                (ee[K + N + 7] = 0)),
              y === !0 &&
                (o.fromBufferAttribute(te, me),
                (ee[K + N + 8] = o.x),
                (ee[K + N + 9] = o.y),
                (ee[K + N + 10] = o.z),
                (ee[K + N + 11] = te.itemSize === 4 ? o.w : 1));
          }
        }
        (p = { count: _, texture: F, size: new Le(w, q) }),
          s.set(u, p),
          u.addEventListener("dispose", H);
      }
      let h = 0;
      for (let S = 0; S < f.length; S++) h += f[S];
      const A = u.morphTargetsRelative ? 1 : 1 - h;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", A),
        d.getUniforms().setValue(i, "morphTargetInfluences", f),
        d.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t),
        d.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
    } else {
      const v = f === void 0 ? 0 : f.length;
      let _ = n[u.id];
      if (_ === void 0 || _.length !== v) {
        _ = [];
        for (let T = 0; T < v; T++) _[T] = [T, 0];
        n[u.id] = _;
      }
      for (let T = 0; T < v; T++) {
        const y = _[T];
        (y[0] = T), (y[1] = f[T]);
      }
      _.sort(Vh);
      for (let T = 0; T < 8; T++)
        T < v && _[T][1]
          ? ((a[T][0] = _[T][0]), (a[T][1] = _[T][1]))
          : ((a[T][0] = Number.MAX_SAFE_INTEGER), (a[T][1] = 0));
      a.sort(Hh);
      const p = u.morphAttributes.position,
        h = u.morphAttributes.normal;
      let A = 0;
      for (let T = 0; T < 8; T++) {
        const y = a[T],
          C = y[0],
          L = y[1];
        C !== Number.MAX_SAFE_INTEGER && L
          ? (p &&
              u.getAttribute("morphTarget" + T) !== p[C] &&
              u.setAttribute("morphTarget" + T, p[C]),
            h &&
              u.getAttribute("morphNormal" + T) !== h[C] &&
              u.setAttribute("morphNormal" + T, h[C]),
            (r[T] = L),
            (A += L))
          : (p &&
              u.hasAttribute("morphTarget" + T) === !0 &&
              u.deleteAttribute("morphTarget" + T),
            h &&
              u.hasAttribute("morphNormal" + T) === !0 &&
              u.deleteAttribute("morphNormal" + T),
            (r[T] = 0));
      }
      const S = u.morphTargetsRelative ? 1 : 1 - A;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", S),
        d.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return { update: l };
}
function Wh(i, e, t, n) {
  let r = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      d = e.get(l, u);
    return (
      r.get(d) !== c && (e.update(d), r.set(d, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", a) === !1 &&
          l.addEventListener("dispose", a),
        t.update(l.instanceMatrix, i.ARRAY_BUFFER),
        l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER)),
      d
    );
  }
  function o() {
    r = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
const Ka = new _t(),
  Za = new Ba(),
  $a = new Ul(),
  Ja = new Ya(),
  Qs = [],
  ea = [],
  ta = new Float32Array(16),
  na = new Float32Array(9),
  ia = new Float32Array(4);
function Zn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Qs[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (Qs[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), i[o].toArray(s, a);
  }
  return s;
}
function et(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function tt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Wi(i, e) {
  let t = ea[e];
  t === void 0 && ((t = new Int32Array(e)), (ea[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function Xh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function Yh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (et(t, e)) return;
    i.uniform2fv(this.addr, e), tt(t, e);
  }
}
function qh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (et(t, e)) return;
    i.uniform3fv(this.addr, e), tt(t, e);
  }
}
function jh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (et(t, e)) return;
    i.uniform4fv(this.addr, e), tt(t, e);
  }
}
function Kh(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (et(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), tt(t, e);
  } else {
    if (et(t, n)) return;
    ia.set(n), i.uniformMatrix2fv(this.addr, !1, ia), tt(t, n);
  }
}
function Zh(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (et(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), tt(t, e);
  } else {
    if (et(t, n)) return;
    na.set(n), i.uniformMatrix3fv(this.addr, !1, na), tt(t, n);
  }
}
function $h(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (et(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), tt(t, e);
  } else {
    if (et(t, n)) return;
    ta.set(n), i.uniformMatrix4fv(this.addr, !1, ta), tt(t, n);
  }
}
function Jh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function Qh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (et(t, e)) return;
    i.uniform2iv(this.addr, e), tt(t, e);
  }
}
function ed(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (et(t, e)) return;
    i.uniform3iv(this.addr, e), tt(t, e);
  }
}
function td(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (et(t, e)) return;
    i.uniform4iv(this.addr, e), tt(t, e);
  }
}
function nd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function id(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (et(t, e)) return;
    i.uniform2uiv(this.addr, e), tt(t, e);
  }
}
function rd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (et(t, e)) return;
    i.uniform3uiv(this.addr, e), tt(t, e);
  }
}
function sd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (et(t, e)) return;
    i.uniform4uiv(this.addr, e), tt(t, e);
  }
}
function ad(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2D(e || Ka, r);
}
function od(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || $a, r);
}
function ld(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || Ja, r);
}
function cd(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || Za, r);
}
function ud(i) {
  switch (i) {
    case 5126:
      return Xh;
    case 35664:
      return Yh;
    case 35665:
      return qh;
    case 35666:
      return jh;
    case 35674:
      return Kh;
    case 35675:
      return Zh;
    case 35676:
      return $h;
    case 5124:
    case 35670:
      return Jh;
    case 35667:
    case 35671:
      return Qh;
    case 35668:
    case 35672:
      return ed;
    case 35669:
    case 35673:
      return td;
    case 5125:
      return nd;
    case 36294:
      return id;
    case 36295:
      return rd;
    case 36296:
      return sd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ad;
    case 35679:
    case 36299:
    case 36307:
      return od;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ld;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return cd;
  }
}
function hd(i, e) {
  i.uniform1fv(this.addr, e);
}
function dd(i, e) {
  const t = Zn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function fd(i, e) {
  const t = Zn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function pd(i, e) {
  const t = Zn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function md(i, e) {
  const t = Zn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function _d(i, e) {
  const t = Zn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function gd(i, e) {
  const t = Zn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function vd(i, e) {
  i.uniform1iv(this.addr, e);
}
function xd(i, e) {
  i.uniform2iv(this.addr, e);
}
function Md(i, e) {
  i.uniform3iv(this.addr, e);
}
function Sd(i, e) {
  i.uniform4iv(this.addr, e);
}
function Ed(i, e) {
  i.uniform1uiv(this.addr, e);
}
function yd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Td(i, e) {
  i.uniform3uiv(this.addr, e);
}
function bd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Ad(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Wi(t, r);
  et(n, s) || (i.uniform1iv(this.addr, s), tt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || Ka, s[o]);
}
function wd(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Wi(t, r);
  et(n, s) || (i.uniform1iv(this.addr, s), tt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || $a, s[o]);
}
function Rd(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Wi(t, r);
  et(n, s) || (i.uniform1iv(this.addr, s), tt(n, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || Ja, s[o]);
}
function Cd(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Wi(t, r);
  et(n, s) || (i.uniform1iv(this.addr, s), tt(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || Za, s[o]);
}
function Ld(i) {
  switch (i) {
    case 5126:
      return hd;
    case 35664:
      return dd;
    case 35665:
      return fd;
    case 35666:
      return pd;
    case 35674:
      return md;
    case 35675:
      return _d;
    case 35676:
      return gd;
    case 5124:
    case 35670:
      return vd;
    case 35667:
    case 35671:
      return xd;
    case 35668:
    case 35672:
      return Md;
    case 35669:
    case 35673:
      return Sd;
    case 5125:
      return Ed;
    case 36294:
      return yd;
    case 36295:
      return Td;
    case 36296:
      return bd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ad;
    case 35679:
    case 36299:
    case 36307:
      return wd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Rd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Cd;
  }
}
class Pd {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = ud(t.type));
  }
}
class Ud {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Ld(t.type));
  }
}
class Dd {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const yr = /(\w+)(\])?(\[|\.)?/g;
function ra(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function Id(i, e, t) {
  const n = i.name,
    r = n.length;
  for (yr.lastIndex = 0; ; ) {
    const s = yr.exec(n),
      o = yr.lastIndex;
    let a = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === r))) {
      ra(t, c === void 0 ? new Pd(a, i, e) : new Ud(a, i, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && ((d = new Dd(a)), ra(t, d)), (t = d);
    }
  }
}
class zi {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r),
        o = e.getUniformLocation(t, s.name);
      Id(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function sa(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let Nd = 0;
function Fd(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Od(i) {
  switch (i) {
    case Ft:
      return ["Linear", "( value )"];
    case Ce:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", i),
        ["Linear", "( value )"]
      );
  }
}
function aa(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      Fd(i.getShaderSource(e), o)
    );
  } else return r;
}
function Bd(i, e) {
  const t = Od(e);
  return "vec4 " + i + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function zd(i, e) {
  let t;
  switch (e) {
    case Fo:
      t = "Linear";
      break;
    case Oo:
      t = "Reinhard";
      break;
    case Bo:
      t = "OptimizedCineon";
      break;
    case zo:
      t = "ACESFilmic";
      break;
    case Go:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function Gd(i) {
  return [
    i.extensionDerivatives ||
    i.envMapCubeUVHeight ||
    i.bumpMap ||
    i.normalMapTangentSpace ||
    i.clearcoatNormalMap ||
    i.flatShading ||
    i.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) &&
    i.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) &&
    i.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(ii).join(`
`);
}
function Hd(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Vd(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r),
      o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2),
      s.type === i.FLOAT_MAT3 && (a = 3),
      s.type === i.FLOAT_MAT4 && (a = 4),
      (t[o] = {
        type: s.type,
        location: i.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function ii(i) {
  return i !== "";
}
function oa(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function la(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const kd = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ir(i) {
  return i.replace(kd, Wd);
}
function Wd(i, e) {
  const t = Ue[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Ir(t);
}
const Xd =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ca(i) {
  return i.replace(Xd, Yd);
}
function Yd(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function ua(i) {
  let e =
    "precision " +
    i.precision +
    ` float;
precision ` +
    i.precision +
    " int;";
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function qd(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    i.shadowMapType === Sa
      ? (e = "SHADOWMAP_TYPE_PCF")
      : i.shadowMapType === po
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : i.shadowMapType === Wt && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function jd(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Xn:
      case Yn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Vi:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Kd(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Yn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Zd(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Ta:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Io:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case No:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function $d(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Jd(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = qd(t),
    c = jd(t),
    u = Kd(t),
    d = Zd(t),
    f = $d(t),
    m = t.isWebGL2 ? "" : Gd(t),
    v = Hd(s),
    _ = r.createProgram();
  let p,
    h,
    A = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
      ].filter(ii).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (h = [
        m,
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
      ].filter(ii).join(`
`)),
      h.length > 0 &&
        (h += `
`))
    : ((p = [
        ua(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(ii).join(`
`)),
      (h = [
        m,
        ua(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + d : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== qt ? "#define TONE_MAPPING" : "",
        t.toneMapping !== qt ? Ue.tonemapping_pars_fragment : "",
        t.toneMapping !== qt ? zd("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ue.encodings_pars_fragment,
        Bd("linearToOutputTexel", t.outputColorSpace),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(ii).join(`
`))),
    (o = Ir(o)),
    (o = oa(o, t)),
    (o = la(o, t)),
    (a = Ir(a)),
    (a = oa(a, t)),
    (a = la(a, t)),
    (o = ca(o)),
    (a = ca(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((A = `#version 300 es
`),
      (p =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (h =
        [
          "#define varying in",
          t.glslVersion === Cs
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Cs ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        h));
  const S = A + p + o,
    T = A + h + a,
    y = sa(r, r.VERTEX_SHADER, S),
    C = sa(r, r.FRAGMENT_SHADER, T);
  if (
    (r.attachShader(_, y),
    r.attachShader(_, C),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(_, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(_, 0, "position"),
    r.linkProgram(_),
    i.debug.checkShaderErrors)
  ) {
    const x = r.getProgramInfoLog(_).trim(),
      w = r.getShaderInfoLog(y).trim(),
      q = r.getShaderInfoLog(C).trim();
    let ee = !0,
      F = !0;
    if (r.getProgramParameter(_, r.LINK_STATUS) === !1)
      if (((ee = !1), typeof i.debug.onShaderError == "function"))
        i.debug.onShaderError(r, _, y, C);
      else {
        const G = aa(r, y, "vertex"),
          H = aa(r, C, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " +
            r.getError() +
            " - VALIDATE_STATUS " +
            r.getProgramParameter(_, r.VALIDATE_STATUS) +
            `

Program Info Log: ` +
            x +
            `
` +
            G +
            `
` +
            H
        );
      }
    else
      x !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", x)
        : (w === "" || q === "") && (F = !1);
    F &&
      (this.diagnostics = {
        runnable: ee,
        programLog: x,
        vertexShader: { log: w, prefix: p },
        fragmentShader: { log: q, prefix: h },
      });
  }
  r.deleteShader(y), r.deleteShader(C);
  let L;
  this.getUniforms = function () {
    return L === void 0 && (L = new zi(r, _)), L;
  };
  let B;
  return (
    (this.getAttributes = function () {
      return B === void 0 && (B = Vd(r, _)), B;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(_),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = Nd++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = _),
    (this.vertexShader = y),
    (this.fragmentShader = C),
    this
  );
}
let Qd = 0;
class ef {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new tf(e)), t.set(e, n)), n;
  }
}
class tf {
  constructor(e) {
    (this.id = Qd++), (this.code = e), (this.usedTimes = 0);
  }
}
function nf(i, e, t, n, r, s, o) {
  const a = new za(),
    l = new ef(),
    c = [],
    u = r.isWebGL2,
    d = r.logarithmicDepthBuffer,
    f = r.vertexTextures;
  let m = r.precision;
  const v = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function _(x) {
    return x === 0 ? "uv" : `uv${x}`;
  }
  function p(x, w, q, ee, F) {
    const G = ee.fog,
      H = F.geometry,
      Z = x.isMeshStandardMaterial ? ee.environment : null,
      X = (x.isMeshStandardMaterial ? t : e).get(x.envMap || Z),
      Y = X && X.mapping === Vi ? X.image.height : null,
      te = v[x.type];
    x.precision !== null &&
      ((m = r.getMaxPrecision(x.precision)),
      m !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const K =
        H.morphAttributes.position ||
        H.morphAttributes.normal ||
        H.morphAttributes.color,
      me = K !== void 0 ? K.length : 0;
    let N = 0;
    H.morphAttributes.position !== void 0 && (N = 1),
      H.morphAttributes.normal !== void 0 && (N = 2),
      H.morphAttributes.color !== void 0 && (N = 3);
    let $, J, le, ce;
    if (te) {
      const je = Ut[te];
      ($ = je.vertexShader), (J = je.fragmentShader);
    } else
      ($ = x.vertexShader),
        (J = x.fragmentShader),
        l.update(x),
        (le = l.getVertexShaderID(x)),
        (ce = l.getFragmentShaderID(x));
    const ge = i.getRenderTarget(),
      Pe = F.isInstancedMesh === !0,
      Se = !!x.map,
      Ye = !!x.matcap,
      Ne = !!X,
      U = !!x.aoMap,
      $e = !!x.lightMap,
      ve = !!x.bumpMap,
      we = !!x.normalMap,
      xe = !!x.displacementMap,
      Ve = !!x.emissiveMap,
      De = !!x.metalnessMap,
      be = !!x.roughnessMap,
      Ge = x.anisotropy > 0,
      Je = x.clearcoat > 0,
      nt = x.iridescence > 0,
      E = x.sheen > 0,
      g = x.transmission > 0,
      V = Ge && !!x.anisotropyMap,
      ie = Je && !!x.clearcoatMap,
      ne = Je && !!x.clearcoatNormalMap,
      b = Je && !!x.clearcoatRoughnessMap,
      j = nt && !!x.iridescenceMap,
      Q = nt && !!x.iridescenceThicknessMap,
      z = E && !!x.sheenColorMap,
      de = E && !!x.sheenRoughnessMap,
      _e = !!x.specularMap,
      pe = !!x.specularColorMap,
      fe = !!x.specularIntensityMap,
      ue = g && !!x.transmissionMap,
      Ee = g && !!x.thicknessMap,
      Oe = !!x.gradientMap,
      R = !!x.alphaMap,
      ae = x.alphaTest > 0,
      O = !!x.extensions,
      re = !!H.attributes.uv1,
      oe = !!H.attributes.uv2,
      ze = !!H.attributes.uv3;
    return {
      isWebGL2: u,
      shaderID: te,
      shaderType: x.type,
      shaderName: x.name,
      vertexShader: $,
      fragmentShader: J,
      defines: x.defines,
      customVertexShaderID: le,
      customFragmentShaderID: ce,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: Pe,
      instancingColor: Pe && F.instanceColor !== null,
      supportsVertexTextures: f,
      outputColorSpace:
        ge === null
          ? i.outputColorSpace
          : ge.isXRRenderTarget === !0
          ? ge.texture.colorSpace
          : Ft,
      map: Se,
      matcap: Ye,
      envMap: Ne,
      envMapMode: Ne && X.mapping,
      envMapCubeUVHeight: Y,
      aoMap: U,
      lightMap: $e,
      bumpMap: ve,
      normalMap: we,
      displacementMap: f && xe,
      emissiveMap: Ve,
      normalMapObjectSpace: we && x.normalMapType === Qo,
      normalMapTangentSpace: we && x.normalMapType === Da,
      metalnessMap: De,
      roughnessMap: be,
      anisotropy: Ge,
      anisotropyMap: V,
      clearcoat: Je,
      clearcoatMap: ie,
      clearcoatNormalMap: ne,
      clearcoatRoughnessMap: b,
      iridescence: nt,
      iridescenceMap: j,
      iridescenceThicknessMap: Q,
      sheen: E,
      sheenColorMap: z,
      sheenRoughnessMap: de,
      specularMap: _e,
      specularColorMap: pe,
      specularIntensityMap: fe,
      transmission: g,
      transmissionMap: ue,
      thicknessMap: Ee,
      gradientMap: Oe,
      opaque: x.transparent === !1 && x.blending === kn,
      alphaMap: R,
      alphaTest: ae,
      combine: x.combine,
      mapUv: Se && _(x.map.channel),
      aoMapUv: U && _(x.aoMap.channel),
      lightMapUv: $e && _(x.lightMap.channel),
      bumpMapUv: ve && _(x.bumpMap.channel),
      normalMapUv: we && _(x.normalMap.channel),
      displacementMapUv: xe && _(x.displacementMap.channel),
      emissiveMapUv: Ve && _(x.emissiveMap.channel),
      metalnessMapUv: De && _(x.metalnessMap.channel),
      roughnessMapUv: be && _(x.roughnessMap.channel),
      anisotropyMapUv: V && _(x.anisotropyMap.channel),
      clearcoatMapUv: ie && _(x.clearcoatMap.channel),
      clearcoatNormalMapUv: ne && _(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: b && _(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: j && _(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: Q && _(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: z && _(x.sheenColorMap.channel),
      sheenRoughnessMapUv: de && _(x.sheenRoughnessMap.channel),
      specularMapUv: _e && _(x.specularMap.channel),
      specularColorMapUv: pe && _(x.specularColorMap.channel),
      specularIntensityMapUv: fe && _(x.specularIntensityMap.channel),
      transmissionMapUv: ue && _(x.transmissionMap.channel),
      thicknessMapUv: Ee && _(x.thicknessMap.channel),
      alphaMapUv: R && _(x.alphaMap.channel),
      vertexTangents: !!H.attributes.tangent && (we || Ge),
      vertexColors: x.vertexColors,
      vertexAlphas:
        x.vertexColors === !0 &&
        !!H.attributes.color &&
        H.attributes.color.itemSize === 4,
      vertexUv1s: re,
      vertexUv2s: oe,
      vertexUv3s: ze,
      pointsUvs: F.isPoints === !0 && !!H.attributes.uv && (Se || R),
      fog: !!G,
      useFog: x.fog === !0,
      fogExp2: G && G.isFogExp2,
      flatShading: x.flatShading === !0,
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: F.isSkinnedMesh === !0,
      morphTargets: H.morphAttributes.position !== void 0,
      morphNormals: H.morphAttributes.normal !== void 0,
      morphColors: H.morphAttributes.color !== void 0,
      morphTargetsCount: me,
      morphTextureStride: N,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: i.shadowMap.enabled && q.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: x.toneMapped ? i.toneMapping : qt,
      useLegacyLights: i.useLegacyLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Xt,
      flipSided: x.side === mt,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: O && x.extensions.derivatives === !0,
      extensionFragDepth: O && x.extensions.fragDepth === !0,
      extensionDrawBuffers: O && x.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: O && x.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
  }
  function h(x) {
    const w = [];
    if (
      (x.shaderID
        ? w.push(x.shaderID)
        : (w.push(x.customVertexShaderID), w.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const q in x.defines) w.push(q), w.push(x.defines[q]);
    return (
      x.isRawShaderMaterial === !1 &&
        (A(w, x), S(w, x), w.push(i.outputColorSpace)),
      w.push(x.customProgramCacheKey),
      w.join()
    );
  }
  function A(x, w) {
    x.push(w.precision),
      x.push(w.outputColorSpace),
      x.push(w.envMapMode),
      x.push(w.envMapCubeUVHeight),
      x.push(w.mapUv),
      x.push(w.alphaMapUv),
      x.push(w.lightMapUv),
      x.push(w.aoMapUv),
      x.push(w.bumpMapUv),
      x.push(w.normalMapUv),
      x.push(w.displacementMapUv),
      x.push(w.emissiveMapUv),
      x.push(w.metalnessMapUv),
      x.push(w.roughnessMapUv),
      x.push(w.anisotropyMapUv),
      x.push(w.clearcoatMapUv),
      x.push(w.clearcoatNormalMapUv),
      x.push(w.clearcoatRoughnessMapUv),
      x.push(w.iridescenceMapUv),
      x.push(w.iridescenceThicknessMapUv),
      x.push(w.sheenColorMapUv),
      x.push(w.sheenRoughnessMapUv),
      x.push(w.specularMapUv),
      x.push(w.specularColorMapUv),
      x.push(w.specularIntensityMapUv),
      x.push(w.transmissionMapUv),
      x.push(w.thicknessMapUv),
      x.push(w.combine),
      x.push(w.fogExp2),
      x.push(w.sizeAttenuation),
      x.push(w.morphTargetsCount),
      x.push(w.morphAttributeCount),
      x.push(w.numDirLights),
      x.push(w.numPointLights),
      x.push(w.numSpotLights),
      x.push(w.numSpotLightMaps),
      x.push(w.numHemiLights),
      x.push(w.numRectAreaLights),
      x.push(w.numDirLightShadows),
      x.push(w.numPointLightShadows),
      x.push(w.numSpotLightShadows),
      x.push(w.numSpotLightShadowsWithMaps),
      x.push(w.shadowMapType),
      x.push(w.toneMapping),
      x.push(w.numClippingPlanes),
      x.push(w.numClipIntersection),
      x.push(w.depthPacking);
  }
  function S(x, w) {
    a.disableAll(),
      w.isWebGL2 && a.enable(0),
      w.supportsVertexTextures && a.enable(1),
      w.instancing && a.enable(2),
      w.instancingColor && a.enable(3),
      w.matcap && a.enable(4),
      w.envMap && a.enable(5),
      w.normalMapObjectSpace && a.enable(6),
      w.normalMapTangentSpace && a.enable(7),
      w.clearcoat && a.enable(8),
      w.iridescence && a.enable(9),
      w.alphaTest && a.enable(10),
      w.vertexColors && a.enable(11),
      w.vertexAlphas && a.enable(12),
      w.vertexUv1s && a.enable(13),
      w.vertexUv2s && a.enable(14),
      w.vertexUv3s && a.enable(15),
      w.vertexTangents && a.enable(16),
      w.anisotropy && a.enable(17),
      x.push(a.mask),
      a.disableAll(),
      w.fog && a.enable(0),
      w.useFog && a.enable(1),
      w.flatShading && a.enable(2),
      w.logarithmicDepthBuffer && a.enable(3),
      w.skinning && a.enable(4),
      w.morphTargets && a.enable(5),
      w.morphNormals && a.enable(6),
      w.morphColors && a.enable(7),
      w.premultipliedAlpha && a.enable(8),
      w.shadowMapEnabled && a.enable(9),
      w.useLegacyLights && a.enable(10),
      w.doubleSided && a.enable(11),
      w.flipSided && a.enable(12),
      w.useDepthPacking && a.enable(13),
      w.dithering && a.enable(14),
      w.transmission && a.enable(15),
      w.sheen && a.enable(16),
      w.opaque && a.enable(17),
      w.pointsUvs && a.enable(18),
      x.push(a.mask);
  }
  function T(x) {
    const w = v[x.type];
    let q;
    if (w) {
      const ee = Ut[w];
      q = Xl.clone(ee.uniforms);
    } else q = x.uniforms;
    return q;
  }
  function y(x, w) {
    let q;
    for (let ee = 0, F = c.length; ee < F; ee++) {
      const G = c[ee];
      if (G.cacheKey === w) {
        (q = G), ++q.usedTimes;
        break;
      }
    }
    return q === void 0 && ((q = new Jd(i, w, x, s)), c.push(q)), q;
  }
  function C(x) {
    if (--x.usedTimes === 0) {
      const w = c.indexOf(x);
      (c[w] = c[c.length - 1]), c.pop(), x.destroy();
    }
  }
  function L(x) {
    l.remove(x);
  }
  function B() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: T,
    acquireProgram: y,
    releaseProgram: C,
    releaseShaderCache: L,
    programs: c,
    dispose: B,
  };
}
function rf() {
  let i = new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && ((o = {}), i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: r };
}
function sf(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function ha(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function da() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function o(d, f, m, v, _, p) {
    let h = i[e];
    return (
      h === void 0
        ? ((h = {
            id: d.id,
            object: d,
            geometry: f,
            material: m,
            groupOrder: v,
            renderOrder: d.renderOrder,
            z: _,
            group: p,
          }),
          (i[e] = h))
        : ((h.id = d.id),
          (h.object = d),
          (h.geometry = f),
          (h.material = m),
          (h.groupOrder = v),
          (h.renderOrder = d.renderOrder),
          (h.z = _),
          (h.group = p)),
      e++,
      h
    );
  }
  function a(d, f, m, v, _, p) {
    const h = o(d, f, m, v, _, p);
    m.transmission > 0
      ? n.push(h)
      : m.transparent === !0
      ? r.push(h)
      : t.push(h);
  }
  function l(d, f, m, v, _, p) {
    const h = o(d, f, m, v, _, p);
    m.transmission > 0
      ? n.unshift(h)
      : m.transparent === !0
      ? r.unshift(h)
      : t.unshift(h);
  }
  function c(d, f) {
    t.length > 1 && t.sort(d || sf),
      n.length > 1 && n.sort(f || ha),
      r.length > 1 && r.sort(f || ha);
  }
  function u() {
    for (let d = e, f = i.length; d < f; d++) {
      const m = i[d];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function af() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return (
      s === void 0
        ? ((o = new da()), i.set(n, [o]))
        : r >= s.length
        ? ((o = new da()), s.push(o))
        : (o = s[r]),
      o
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function of() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new D(), color: new He() };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new He(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new D(), color: new He(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new D(), skyColor: new He(), groundColor: new He() };
          break;
        case "RectAreaLight":
          t = {
            color: new He(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function lf() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let cf = 0;
function uf(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function hf(i, e) {
  const t = new of(),
    n = lf(),
    r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let u = 0; u < 9; u++) r.probe.push(new D());
  const s = new D(),
    o = new Qe(),
    a = new Qe();
  function l(u, d) {
    let f = 0,
      m = 0,
      v = 0;
    for (let q = 0; q < 9; q++) r.probe[q].set(0, 0, 0);
    let _ = 0,
      p = 0,
      h = 0,
      A = 0,
      S = 0,
      T = 0,
      y = 0,
      C = 0,
      L = 0,
      B = 0;
    u.sort(uf);
    const x = d === !0 ? Math.PI : 1;
    for (let q = 0, ee = u.length; q < ee; q++) {
      const F = u[q],
        G = F.color,
        H = F.intensity,
        Z = F.distance,
        X = F.shadow && F.shadow.map ? F.shadow.map.texture : null;
      if (F.isAmbientLight)
        (f += G.r * H * x), (m += G.g * H * x), (v += G.b * H * x);
      else if (F.isLightProbe)
        for (let Y = 0; Y < 9; Y++)
          r.probe[Y].addScaledVector(F.sh.coefficients[Y], H);
      else if (F.isDirectionalLight) {
        const Y = t.get(F);
        if (
          (Y.color.copy(F.color).multiplyScalar(F.intensity * x), F.castShadow)
        ) {
          const te = F.shadow,
            K = n.get(F);
          (K.shadowBias = te.bias),
            (K.shadowNormalBias = te.normalBias),
            (K.shadowRadius = te.radius),
            (K.shadowMapSize = te.mapSize),
            (r.directionalShadow[_] = K),
            (r.directionalShadowMap[_] = X),
            (r.directionalShadowMatrix[_] = F.shadow.matrix),
            T++;
        }
        (r.directional[_] = Y), _++;
      } else if (F.isSpotLight) {
        const Y = t.get(F);
        Y.position.setFromMatrixPosition(F.matrixWorld),
          Y.color.copy(G).multiplyScalar(H * x),
          (Y.distance = Z),
          (Y.coneCos = Math.cos(F.angle)),
          (Y.penumbraCos = Math.cos(F.angle * (1 - F.penumbra))),
          (Y.decay = F.decay),
          (r.spot[h] = Y);
        const te = F.shadow;
        if (
          (F.map &&
            ((r.spotLightMap[L] = F.map),
            L++,
            te.updateMatrices(F),
            F.castShadow && B++),
          (r.spotLightMatrix[h] = te.matrix),
          F.castShadow)
        ) {
          const K = n.get(F);
          (K.shadowBias = te.bias),
            (K.shadowNormalBias = te.normalBias),
            (K.shadowRadius = te.radius),
            (K.shadowMapSize = te.mapSize),
            (r.spotShadow[h] = K),
            (r.spotShadowMap[h] = X),
            C++;
        }
        h++;
      } else if (F.isRectAreaLight) {
        const Y = t.get(F);
        Y.color.copy(G).multiplyScalar(H),
          Y.halfWidth.set(F.width * 0.5, 0, 0),
          Y.halfHeight.set(0, F.height * 0.5, 0),
          (r.rectArea[A] = Y),
          A++;
      } else if (F.isPointLight) {
        const Y = t.get(F);
        if (
          (Y.color.copy(F.color).multiplyScalar(F.intensity * x),
          (Y.distance = F.distance),
          (Y.decay = F.decay),
          F.castShadow)
        ) {
          const te = F.shadow,
            K = n.get(F);
          (K.shadowBias = te.bias),
            (K.shadowNormalBias = te.normalBias),
            (K.shadowRadius = te.radius),
            (K.shadowMapSize = te.mapSize),
            (K.shadowCameraNear = te.camera.near),
            (K.shadowCameraFar = te.camera.far),
            (r.pointShadow[p] = K),
            (r.pointShadowMap[p] = X),
            (r.pointShadowMatrix[p] = F.shadow.matrix),
            y++;
        }
        (r.point[p] = Y), p++;
      } else if (F.isHemisphereLight) {
        const Y = t.get(F);
        Y.skyColor.copy(F.color).multiplyScalar(H * x),
          Y.groundColor.copy(F.groundColor).multiplyScalar(H * x),
          (r.hemi[S] = Y),
          S++;
      }
    }
    A > 0 &&
      (e.isWebGL2 || i.has("OES_texture_float_linear") === !0
        ? ((r.rectAreaLTC1 = se.LTC_FLOAT_1), (r.rectAreaLTC2 = se.LTC_FLOAT_2))
        : i.has("OES_texture_half_float_linear") === !0
        ? ((r.rectAreaLTC1 = se.LTC_HALF_1), (r.rectAreaLTC2 = se.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (r.ambient[0] = f),
      (r.ambient[1] = m),
      (r.ambient[2] = v);
    const w = r.hash;
    (w.directionalLength !== _ ||
      w.pointLength !== p ||
      w.spotLength !== h ||
      w.rectAreaLength !== A ||
      w.hemiLength !== S ||
      w.numDirectionalShadows !== T ||
      w.numPointShadows !== y ||
      w.numSpotShadows !== C ||
      w.numSpotMaps !== L) &&
      ((r.directional.length = _),
      (r.spot.length = h),
      (r.rectArea.length = A),
      (r.point.length = p),
      (r.hemi.length = S),
      (r.directionalShadow.length = T),
      (r.directionalShadowMap.length = T),
      (r.pointShadow.length = y),
      (r.pointShadowMap.length = y),
      (r.spotShadow.length = C),
      (r.spotShadowMap.length = C),
      (r.directionalShadowMatrix.length = T),
      (r.pointShadowMatrix.length = y),
      (r.spotLightMatrix.length = C + L - B),
      (r.spotLightMap.length = L),
      (r.numSpotLightShadowsWithMaps = B),
      (w.directionalLength = _),
      (w.pointLength = p),
      (w.spotLength = h),
      (w.rectAreaLength = A),
      (w.hemiLength = S),
      (w.numDirectionalShadows = T),
      (w.numPointShadows = y),
      (w.numSpotShadows = C),
      (w.numSpotMaps = L),
      (r.version = cf++));
  }
  function c(u, d) {
    let f = 0,
      m = 0,
      v = 0,
      _ = 0,
      p = 0;
    const h = d.matrixWorldInverse;
    for (let A = 0, S = u.length; A < S; A++) {
      const T = u[A];
      if (T.isDirectionalLight) {
        const y = r.directional[f];
        y.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          y.direction.sub(s),
          y.direction.transformDirection(h),
          f++;
      } else if (T.isSpotLight) {
        const y = r.spot[v];
        y.position.setFromMatrixPosition(T.matrixWorld),
          y.position.applyMatrix4(h),
          y.direction.setFromMatrixPosition(T.matrixWorld),
          s.setFromMatrixPosition(T.target.matrixWorld),
          y.direction.sub(s),
          y.direction.transformDirection(h),
          v++;
      } else if (T.isRectAreaLight) {
        const y = r.rectArea[_];
        y.position.setFromMatrixPosition(T.matrixWorld),
          y.position.applyMatrix4(h),
          a.identity(),
          o.copy(T.matrixWorld),
          o.premultiply(h),
          a.extractRotation(o),
          y.halfWidth.set(T.width * 0.5, 0, 0),
          y.halfHeight.set(0, T.height * 0.5, 0),
          y.halfWidth.applyMatrix4(a),
          y.halfHeight.applyMatrix4(a),
          _++;
      } else if (T.isPointLight) {
        const y = r.point[m];
        y.position.setFromMatrixPosition(T.matrixWorld),
          y.position.applyMatrix4(h),
          m++;
      } else if (T.isHemisphereLight) {
        const y = r.hemi[p];
        y.direction.setFromMatrixPosition(T.matrixWorld),
          y.direction.transformDirection(h),
          p++;
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function fa(i, e) {
  const t = new hf(i, e),
    n = [],
    r = [];
  function s() {
    (n.length = 0), (r.length = 0);
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    r.push(d);
  }
  function l(d) {
    t.setup(n, d);
  }
  function c(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: { lightsArray: n, shadowsArray: r, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function df(i, e) {
  let t = new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return (
      a === void 0
        ? ((l = new fa(i, e)), t.set(s, [l]))
        : o >= a.length
        ? ((l = new fa(i, e)), a.push(l))
        : (l = a[o]),
      l
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: n, dispose: r };
}
class ff extends di {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = $o),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class pf extends di {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const mf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  _f = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function gf(i, e, t) {
  let n = new Gr();
  const r = new Le(),
    s = new Le(),
    o = new st(),
    a = new ff({ depthPacking: Jo }),
    l = new pf(),
    c = {},
    u = t.maxTextureSize,
    d = { [nn]: mt, [mt]: nn, [Xt]: Xt },
    f = new Sn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Le() },
        radius: { value: 4 },
      },
      vertexShader: mf,
      fragmentShader: _f,
    }),
    m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const v = new rn();
  v.setAttribute(
    "position",
    new It(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const _ = new Dt(v, f),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Sa);
  let h = this.type;
  this.render = function (y, C, L) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      y.length === 0
    )
      return;
    const B = i.getRenderTarget(),
      x = i.getActiveCubeFace(),
      w = i.getActiveMipmapLevel(),
      q = i.state;
    q.setBlending(en),
      q.buffers.color.setClear(1, 1, 1, 1),
      q.buffers.depth.setTest(!0),
      q.setScissorTest(!1);
    const ee = h !== Wt && this.type === Wt,
      F = h === Wt && this.type !== Wt;
    for (let G = 0, H = y.length; G < H; G++) {
      const Z = y[G],
        X = Z.shadow;
      if (X === void 0) {
        console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (X.autoUpdate === !1 && X.needsUpdate === !1) continue;
      r.copy(X.mapSize);
      const Y = X.getFrameExtents();
      if (
        (r.multiply(Y),
        s.copy(X.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / Y.x)),
            (r.x = s.x * Y.x),
            (X.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / Y.y)),
            (r.y = s.y * Y.y),
            (X.mapSize.y = s.y))),
        X.map === null || ee === !0 || F === !0)
      ) {
        const K = this.type !== Wt ? { minFilter: ft, magFilter: ft } : {};
        X.map !== null && X.map.dispose(),
          (X.map = new xn(r.x, r.y, K)),
          (X.map.texture.name = Z.name + ".shadowMap"),
          X.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(X.map), i.clear();
      const te = X.getViewportCount();
      for (let K = 0; K < te; K++) {
        const me = X.getViewport(K);
        o.set(s.x * me.x, s.y * me.y, s.x * me.z, s.y * me.w),
          q.viewport(o),
          X.updateMatrices(Z, K),
          (n = X.getFrustum()),
          T(C, L, X.camera, Z, this.type);
      }
      X.isPointLightShadow !== !0 && this.type === Wt && A(X, L),
        (X.needsUpdate = !1);
    }
    (h = this.type), (p.needsUpdate = !1), i.setRenderTarget(B, x, w);
  };
  function A(y, C) {
    const L = e.update(_);
    f.defines.VSM_SAMPLES !== y.blurSamples &&
      ((f.defines.VSM_SAMPLES = y.blurSamples),
      (m.defines.VSM_SAMPLES = y.blurSamples),
      (f.needsUpdate = !0),
      (m.needsUpdate = !0)),
      y.mapPass === null && (y.mapPass = new xn(r.x, r.y)),
      (f.uniforms.shadow_pass.value = y.map.texture),
      (f.uniforms.resolution.value = y.mapSize),
      (f.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.mapPass),
      i.clear(),
      i.renderBufferDirect(C, null, L, f, _, null),
      (m.uniforms.shadow_pass.value = y.mapPass.texture),
      (m.uniforms.resolution.value = y.mapSize),
      (m.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.map),
      i.clear(),
      i.renderBufferDirect(C, null, L, m, _, null);
  }
  function S(y, C, L, B) {
    let x = null;
    const w =
      L.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (w !== void 0) x = w;
    else if (
      ((x = L.isPointLight === !0 ? l : a),
      (i.localClippingEnabled &&
        C.clipShadows === !0 &&
        Array.isArray(C.clippingPlanes) &&
        C.clippingPlanes.length !== 0) ||
        (C.displacementMap && C.displacementScale !== 0) ||
        (C.alphaMap && C.alphaTest > 0) ||
        (C.map && C.alphaTest > 0))
    ) {
      const q = x.uuid,
        ee = C.uuid;
      let F = c[q];
      F === void 0 && ((F = {}), (c[q] = F));
      let G = F[ee];
      G === void 0 && ((G = x.clone()), (F[ee] = G)), (x = G);
    }
    if (
      ((x.visible = C.visible),
      (x.wireframe = C.wireframe),
      B === Wt
        ? (x.side = C.shadowSide !== null ? C.shadowSide : C.side)
        : (x.side = C.shadowSide !== null ? C.shadowSide : d[C.side]),
      (x.alphaMap = C.alphaMap),
      (x.alphaTest = C.alphaTest),
      (x.map = C.map),
      (x.clipShadows = C.clipShadows),
      (x.clippingPlanes = C.clippingPlanes),
      (x.clipIntersection = C.clipIntersection),
      (x.displacementMap = C.displacementMap),
      (x.displacementScale = C.displacementScale),
      (x.displacementBias = C.displacementBias),
      (x.wireframeLinewidth = C.wireframeLinewidth),
      (x.linewidth = C.linewidth),
      L.isPointLight === !0 && x.isMeshDistanceMaterial === !0)
    ) {
      const q = i.properties.get(x);
      q.light = L;
    }
    return x;
  }
  function T(y, C, L, B, x) {
    if (y.visible === !1) return;
    if (
      y.layers.test(C.layers) &&
      (y.isMesh || y.isLine || y.isPoints) &&
      (y.castShadow || (y.receiveShadow && x === Wt)) &&
      (!y.frustumCulled || n.intersectsObject(y))
    ) {
      y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, y.matrixWorld);
      const ee = e.update(y),
        F = y.material;
      if (Array.isArray(F)) {
        const G = ee.groups;
        for (let H = 0, Z = G.length; H < Z; H++) {
          const X = G[H],
            Y = F[X.materialIndex];
          if (Y && Y.visible) {
            const te = S(y, Y, B, x);
            i.renderBufferDirect(L, null, ee, te, y, X);
          }
        }
      } else if (F.visible) {
        const G = S(y, F, B, x);
        i.renderBufferDirect(L, null, ee, G, y, null);
      }
    }
    const q = y.children;
    for (let ee = 0, F = q.length; ee < F; ee++) T(q[ee], C, L, B, x);
  }
}
function vf(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let R = !1;
    const ae = new st();
    let O = null;
    const re = new st(0, 0, 0, 0);
    return {
      setMask: function (oe) {
        O !== oe && !R && (i.colorMask(oe, oe, oe, oe), (O = oe));
      },
      setLocked: function (oe) {
        R = oe;
      },
      setClear: function (oe, ze, We, je, sn) {
        sn === !0 && ((oe *= je), (ze *= je), (We *= je)),
          ae.set(oe, ze, We, je),
          re.equals(ae) === !1 && (i.clearColor(oe, ze, We, je), re.copy(ae));
      },
      reset: function () {
        (R = !1), (O = null), re.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let R = !1,
      ae = null,
      O = null,
      re = null;
    return {
      setTest: function (oe) {
        oe ? ge(i.DEPTH_TEST) : Pe(i.DEPTH_TEST);
      },
      setMask: function (oe) {
        ae !== oe && !R && (i.depthMask(oe), (ae = oe));
      },
      setFunc: function (oe) {
        if (O !== oe) {
          switch (oe) {
            case wo:
              i.depthFunc(i.NEVER);
              break;
            case Ro:
              i.depthFunc(i.ALWAYS);
              break;
            case Co:
              i.depthFunc(i.LESS);
              break;
            case wr:
              i.depthFunc(i.LEQUAL);
              break;
            case Lo:
              i.depthFunc(i.EQUAL);
              break;
            case Po:
              i.depthFunc(i.GEQUAL);
              break;
            case Uo:
              i.depthFunc(i.GREATER);
              break;
            case Do:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          O = oe;
        }
      },
      setLocked: function (oe) {
        R = oe;
      },
      setClear: function (oe) {
        re !== oe && (i.clearDepth(oe), (re = oe));
      },
      reset: function () {
        (R = !1), (ae = null), (O = null), (re = null);
      },
    };
  }
  function o() {
    let R = !1,
      ae = null,
      O = null,
      re = null,
      oe = null,
      ze = null,
      We = null,
      je = null,
      sn = null;
    return {
      setTest: function (Xe) {
        R || (Xe ? ge(i.STENCIL_TEST) : Pe(i.STENCIL_TEST));
      },
      setMask: function (Xe) {
        ae !== Xe && !R && (i.stencilMask(Xe), (ae = Xe));
      },
      setFunc: function (Xe, Pt, ut) {
        (O !== Xe || re !== Pt || oe !== ut) &&
          (i.stencilFunc(Xe, Pt, ut), (O = Xe), (re = Pt), (oe = ut));
      },
      setOp: function (Xe, Pt, ut) {
        (ze !== Xe || We !== Pt || je !== ut) &&
          (i.stencilOp(Xe, Pt, ut), (ze = Xe), (We = Pt), (je = ut));
      },
      setLocked: function (Xe) {
        R = Xe;
      },
      setClear: function (Xe) {
        sn !== Xe && (i.clearStencil(Xe), (sn = Xe));
      },
      reset: function () {
        (R = !1),
          (ae = null),
          (O = null),
          (re = null),
          (oe = null),
          (ze = null),
          (We = null),
          (je = null),
          (sn = null);
      },
    };
  }
  const a = new r(),
    l = new s(),
    c = new o(),
    u = new WeakMap(),
    d = new WeakMap();
  let f = {},
    m = {},
    v = new WeakMap(),
    _ = [],
    p = null,
    h = !1,
    A = null,
    S = null,
    T = null,
    y = null,
    C = null,
    L = null,
    B = null,
    x = !1,
    w = null,
    q = null,
    ee = null,
    F = null,
    G = null;
  const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Z = !1,
    X = 0;
  const Y = i.getParameter(i.VERSION);
  Y.indexOf("WebGL") !== -1
    ? ((X = parseFloat(/^WebGL (\d)/.exec(Y)[1])), (Z = X >= 1))
    : Y.indexOf("OpenGL ES") !== -1 &&
      ((X = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1])), (Z = X >= 2));
  let te = null,
    K = {};
  const me = i.getParameter(i.SCISSOR_BOX),
    N = i.getParameter(i.VIEWPORT),
    $ = new st().fromArray(me),
    J = new st().fromArray(N);
  function le(R, ae, O, re) {
    const oe = new Uint8Array(4),
      ze = i.createTexture();
    i.bindTexture(R, ze),
      i.texParameteri(R, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(R, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let We = 0; We < O; We++)
      n && (R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY)
        ? i.texImage3D(ae, 0, i.RGBA, 1, 1, re, 0, i.RGBA, i.UNSIGNED_BYTE, oe)
        : i.texImage2D(
            ae + We,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            oe
          );
    return ze;
  }
  const ce = {};
  (ce[i.TEXTURE_2D] = le(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (ce[i.TEXTURE_CUBE_MAP] = le(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    n &&
      ((ce[i.TEXTURE_2D_ARRAY] = le(
        i.TEXTURE_2D_ARRAY,
        i.TEXTURE_2D_ARRAY,
        1,
        1
      )),
      (ce[i.TEXTURE_3D] = le(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1))),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    ge(i.DEPTH_TEST),
    l.setFunc(wr),
    xe(!1),
    Ve(Jr),
    ge(i.CULL_FACE),
    ve(en);
  function ge(R) {
    f[R] !== !0 && (i.enable(R), (f[R] = !0));
  }
  function Pe(R) {
    f[R] !== !1 && (i.disable(R), (f[R] = !1));
  }
  function Se(R, ae) {
    return m[R] !== ae
      ? (i.bindFramebuffer(R, ae),
        (m[R] = ae),
        n &&
          (R === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = ae),
          R === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = ae)),
        !0)
      : !1;
  }
  function Ye(R, ae) {
    let O = _,
      re = !1;
    if (R)
      if (
        ((O = v.get(ae)),
        O === void 0 && ((O = []), v.set(ae, O)),
        R.isWebGLMultipleRenderTargets)
      ) {
        const oe = R.texture;
        if (O.length !== oe.length || O[0] !== i.COLOR_ATTACHMENT0) {
          for (let ze = 0, We = oe.length; ze < We; ze++)
            O[ze] = i.COLOR_ATTACHMENT0 + ze;
          (O.length = oe.length), (re = !0);
        }
      } else
        O[0] !== i.COLOR_ATTACHMENT0 &&
          ((O[0] = i.COLOR_ATTACHMENT0), (re = !0));
    else O[0] !== i.BACK && ((O[0] = i.BACK), (re = !0));
    re &&
      (t.isWebGL2
        ? i.drawBuffers(O)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(O));
  }
  function Ne(R) {
    return p !== R ? (i.useProgram(R), (p = R), !0) : !1;
  }
  const U = {
    [Hn]: i.FUNC_ADD,
    [_o]: i.FUNC_SUBTRACT,
    [go]: i.FUNC_REVERSE_SUBTRACT,
  };
  if (n) (U[ns] = i.MIN), (U[is] = i.MAX);
  else {
    const R = e.get("EXT_blend_minmax");
    R !== null && ((U[ns] = R.MIN_EXT), (U[is] = R.MAX_EXT));
  }
  const $e = {
    [vo]: i.ZERO,
    [xo]: i.ONE,
    [Mo]: i.SRC_COLOR,
    [Ea]: i.SRC_ALPHA,
    [Ao]: i.SRC_ALPHA_SATURATE,
    [To]: i.DST_COLOR,
    [Eo]: i.DST_ALPHA,
    [So]: i.ONE_MINUS_SRC_COLOR,
    [ya]: i.ONE_MINUS_SRC_ALPHA,
    [bo]: i.ONE_MINUS_DST_COLOR,
    [yo]: i.ONE_MINUS_DST_ALPHA,
  };
  function ve(R, ae, O, re, oe, ze, We, je) {
    if (R === en) {
      h === !0 && (Pe(i.BLEND), (h = !1));
      return;
    }
    if ((h === !1 && (ge(i.BLEND), (h = !0)), R !== mo)) {
      if (R !== A || je !== x) {
        if (
          ((S !== Hn || C !== Hn) &&
            (i.blendEquation(i.FUNC_ADD), (S = Hn), (C = Hn)),
          je)
        )
          switch (R) {
            case kn:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Qr:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case es:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ts:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        else
          switch (R) {
            case kn:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Qr:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case es:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case ts:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        (T = null), (y = null), (L = null), (B = null), (A = R), (x = je);
      }
      return;
    }
    (oe = oe || ae),
      (ze = ze || O),
      (We = We || re),
      (ae !== S || oe !== C) &&
        (i.blendEquationSeparate(U[ae], U[oe]), (S = ae), (C = oe)),
      (O !== T || re !== y || ze !== L || We !== B) &&
        (i.blendFuncSeparate($e[O], $e[re], $e[ze], $e[We]),
        (T = O),
        (y = re),
        (L = ze),
        (B = We)),
      (A = R),
      (x = !1);
  }
  function we(R, ae) {
    R.side === Xt ? Pe(i.CULL_FACE) : ge(i.CULL_FACE);
    let O = R.side === mt;
    ae && (O = !O),
      xe(O),
      R.blending === kn && R.transparent === !1
        ? ve(en)
        : ve(
            R.blending,
            R.blendEquation,
            R.blendSrc,
            R.blendDst,
            R.blendEquationAlpha,
            R.blendSrcAlpha,
            R.blendDstAlpha,
            R.premultipliedAlpha
          ),
      l.setFunc(R.depthFunc),
      l.setTest(R.depthTest),
      l.setMask(R.depthWrite),
      a.setMask(R.colorWrite);
    const re = R.stencilWrite;
    c.setTest(re),
      re &&
        (c.setMask(R.stencilWriteMask),
        c.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask),
        c.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)),
      be(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits),
      R.alphaToCoverage === !0
        ? ge(i.SAMPLE_ALPHA_TO_COVERAGE)
        : Pe(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function xe(R) {
    w !== R && (R ? i.frontFace(i.CW) : i.frontFace(i.CCW), (w = R));
  }
  function Ve(R) {
    R !== ho
      ? (ge(i.CULL_FACE),
        R !== q &&
          (R === Jr
            ? i.cullFace(i.BACK)
            : R === fo
            ? i.cullFace(i.FRONT)
            : i.cullFace(i.FRONT_AND_BACK)))
      : Pe(i.CULL_FACE),
      (q = R);
  }
  function De(R) {
    R !== ee && (Z && i.lineWidth(R), (ee = R));
  }
  function be(R, ae, O) {
    R
      ? (ge(i.POLYGON_OFFSET_FILL),
        (F !== ae || G !== O) && (i.polygonOffset(ae, O), (F = ae), (G = O)))
      : Pe(i.POLYGON_OFFSET_FILL);
  }
  function Ge(R) {
    R ? ge(i.SCISSOR_TEST) : Pe(i.SCISSOR_TEST);
  }
  function Je(R) {
    R === void 0 && (R = i.TEXTURE0 + H - 1),
      te !== R && (i.activeTexture(R), (te = R));
  }
  function nt(R, ae, O) {
    O === void 0 && (te === null ? (O = i.TEXTURE0 + H - 1) : (O = te));
    let re = K[O];
    re === void 0 && ((re = { type: void 0, texture: void 0 }), (K[O] = re)),
      (re.type !== R || re.texture !== ae) &&
        (te !== O && (i.activeTexture(O), (te = O)),
        i.bindTexture(R, ae || ce[R]),
        (re.type = R),
        (re.texture = ae));
  }
  function E() {
    const R = K[te];
    R !== void 0 &&
      R.type !== void 0 &&
      (i.bindTexture(R.type, null), (R.type = void 0), (R.texture = void 0));
  }
  function g() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function V() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ie() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ne() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function b() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function j() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Q() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function z() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function de() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function _e() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function pe(R) {
    $.equals(R) === !1 && (i.scissor(R.x, R.y, R.z, R.w), $.copy(R));
  }
  function fe(R) {
    J.equals(R) === !1 && (i.viewport(R.x, R.y, R.z, R.w), J.copy(R));
  }
  function ue(R, ae) {
    let O = d.get(ae);
    O === void 0 && ((O = new WeakMap()), d.set(ae, O));
    let re = O.get(R);
    re === void 0 && ((re = i.getUniformBlockIndex(ae, R.name)), O.set(R, re));
  }
  function Ee(R, ae) {
    const re = d.get(ae).get(R);
    u.get(ae) !== re &&
      (i.uniformBlockBinding(ae, re, R.__bindingPointIndex), u.set(ae, re));
  }
  function Oe() {
    i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      n === !0 &&
        (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null)),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (f = {}),
      (te = null),
      (K = {}),
      (m = {}),
      (v = new WeakMap()),
      (_ = []),
      (p = null),
      (h = !1),
      (A = null),
      (S = null),
      (T = null),
      (y = null),
      (C = null),
      (L = null),
      (B = null),
      (x = !1),
      (w = null),
      (q = null),
      (ee = null),
      (F = null),
      (G = null),
      $.set(0, 0, i.canvas.width, i.canvas.height),
      J.set(0, 0, i.canvas.width, i.canvas.height),
      a.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: ge,
    disable: Pe,
    bindFramebuffer: Se,
    drawBuffers: Ye,
    useProgram: Ne,
    setBlending: ve,
    setMaterial: we,
    setFlipSided: xe,
    setCullFace: Ve,
    setLineWidth: De,
    setPolygonOffset: be,
    setScissorTest: Ge,
    activeTexture: Je,
    bindTexture: nt,
    unbindTexture: E,
    compressedTexImage2D: g,
    compressedTexImage3D: V,
    texImage2D: de,
    texImage3D: _e,
    updateUBOMapping: ue,
    uniformBlockBinding: Ee,
    texStorage2D: Q,
    texStorage3D: z,
    texSubImage2D: ie,
    texSubImage3D: ne,
    compressedTexSubImage2D: b,
    compressedTexSubImage3D: j,
    scissor: pe,
    viewport: fe,
    reset: Oe,
  };
}
function xf(i, e, t, n, r, s, o) {
  const a = r.isWebGL2,
    l = r.maxTextures,
    c = r.maxCubemapSize,
    u = r.maxTextureSize,
    d = r.maxSamples,
    f = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    v = new WeakMap();
  let _;
  const p = new WeakMap();
  let h = !1;
  try {
    h =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function A(E, g) {
    return h ? new OffscreenCanvas(E, g) : ui("canvas");
  }
  function S(E, g, V, ie) {
    let ne = 1;
    if (
      ((E.width > ie || E.height > ie) &&
        (ne = ie / Math.max(E.width, E.height)),
      ne < 1 || g === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && E instanceof ImageBitmap)
      ) {
        const b = g ? Hi : Math.floor,
          j = b(ne * E.width),
          Q = b(ne * E.height);
        _ === void 0 && (_ = A(j, Q));
        const z = V ? A(j, Q) : _;
        return (
          (z.width = j),
          (z.height = Q),
          z.getContext("2d").drawImage(E, 0, 0, j, Q),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              E.width +
              "x" +
              E.height +
              ") to (" +
              j +
              "x" +
              Q +
              ")."
          ),
          z
        );
      } else
        return (
          "data" in E &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                E.width +
                "x" +
                E.height +
                ")."
            ),
          E
        );
    return E;
  }
  function T(E) {
    return Dr(E.width) && Dr(E.height);
  }
  function y(E) {
    return a
      ? !1
      : E.wrapS !== Ct ||
          E.wrapT !== Ct ||
          (E.minFilter !== ft && E.minFilter !== St);
  }
  function C(E, g) {
    return E.generateMipmaps && g && E.minFilter !== ft && E.minFilter !== St;
  }
  function L(E) {
    i.generateMipmap(E);
  }
  function B(E, g, V, ie, ne = !1) {
    if (a === !1) return g;
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          E +
          "'"
      );
    }
    let b = g;
    return (
      g === i.RED &&
        (V === i.FLOAT && (b = i.R32F),
        V === i.HALF_FLOAT && (b = i.R16F),
        V === i.UNSIGNED_BYTE && (b = i.R8)),
      g === i.RG &&
        (V === i.FLOAT && (b = i.RG32F),
        V === i.HALF_FLOAT && (b = i.RG16F),
        V === i.UNSIGNED_BYTE && (b = i.RG8)),
      g === i.RGBA &&
        (V === i.FLOAT && (b = i.RGBA32F),
        V === i.HALF_FLOAT && (b = i.RGBA16F),
        V === i.UNSIGNED_BYTE &&
          (b = ie === Ce && ne === !1 ? i.SRGB8_ALPHA8 : i.RGBA8),
        V === i.UNSIGNED_SHORT_4_4_4_4 && (b = i.RGBA4),
        V === i.UNSIGNED_SHORT_5_5_5_1 && (b = i.RGB5_A1)),
      (b === i.R16F ||
        b === i.R32F ||
        b === i.RG16F ||
        b === i.RG32F ||
        b === i.RGBA16F ||
        b === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      b
    );
  }
  function x(E, g, V) {
    return C(E, V) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== ft && E.minFilter !== St)
      ? Math.log2(Math.max(g.width, g.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
      ? E.mipmaps.length
      : E.isCompressedTexture && Array.isArray(E.image)
      ? g.mipmaps.length
      : 1;
  }
  function w(E) {
    return E === ft || E === rs || E === $i ? i.NEAREST : i.LINEAR;
  }
  function q(E) {
    const g = E.target;
    g.removeEventListener("dispose", q), F(g), g.isVideoTexture && v.delete(g);
  }
  function ee(E) {
    const g = E.target;
    g.removeEventListener("dispose", ee), H(g);
  }
  function F(E) {
    const g = n.get(E);
    if (g.__webglInit === void 0) return;
    const V = E.source,
      ie = p.get(V);
    if (ie) {
      const ne = ie[g.__cacheKey];
      ne.usedTimes--,
        ne.usedTimes === 0 && G(E),
        Object.keys(ie).length === 0 && p.delete(V);
    }
    n.remove(E);
  }
  function G(E) {
    const g = n.get(E);
    i.deleteTexture(g.__webglTexture);
    const V = E.source,
      ie = p.get(V);
    delete ie[g.__cacheKey], o.memory.textures--;
  }
  function H(E) {
    const g = E.texture,
      V = n.get(E),
      ie = n.get(g);
    if (
      (ie.__webglTexture !== void 0 &&
        (i.deleteTexture(ie.__webglTexture), o.memory.textures--),
      E.depthTexture && E.depthTexture.dispose(),
      E.isWebGLCubeRenderTarget)
    )
      for (let ne = 0; ne < 6; ne++)
        i.deleteFramebuffer(V.__webglFramebuffer[ne]),
          V.__webglDepthbuffer &&
            i.deleteRenderbuffer(V.__webglDepthbuffer[ne]);
    else {
      if (
        (i.deleteFramebuffer(V.__webglFramebuffer),
        V.__webglDepthbuffer && i.deleteRenderbuffer(V.__webglDepthbuffer),
        V.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(V.__webglMultisampledFramebuffer),
        V.__webglColorRenderbuffer)
      )
        for (let ne = 0; ne < V.__webglColorRenderbuffer.length; ne++)
          V.__webglColorRenderbuffer[ne] &&
            i.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);
      V.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(V.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let ne = 0, b = g.length; ne < b; ne++) {
        const j = n.get(g[ne]);
        j.__webglTexture &&
          (i.deleteTexture(j.__webglTexture), o.memory.textures--),
          n.remove(g[ne]);
      }
    n.remove(g), n.remove(E);
  }
  let Z = 0;
  function X() {
    Z = 0;
  }
  function Y() {
    const E = Z;
    return (
      E >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            E +
            " texture units while this GPU supports only " +
            l
        ),
      (Z += 1),
      E
    );
  }
  function te(E) {
    const g = [];
    return (
      g.push(E.wrapS),
      g.push(E.wrapT),
      g.push(E.wrapR || 0),
      g.push(E.magFilter),
      g.push(E.minFilter),
      g.push(E.anisotropy),
      g.push(E.internalFormat),
      g.push(E.format),
      g.push(E.type),
      g.push(E.generateMipmaps),
      g.push(E.premultiplyAlpha),
      g.push(E.flipY),
      g.push(E.unpackAlignment),
      g.push(E.colorSpace),
      g.join()
    );
  }
  function K(E, g) {
    const V = n.get(E);
    if (
      (E.isVideoTexture && Je(E),
      E.isRenderTargetTexture === !1 &&
        E.version > 0 &&
        V.__version !== E.version)
    ) {
      const ie = E.image;
      if (ie === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (ie.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Se(V, E, g);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, V.__webglTexture, i.TEXTURE0 + g);
  }
  function me(E, g) {
    const V = n.get(E);
    if (E.version > 0 && V.__version !== E.version) {
      Se(V, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, V.__webglTexture, i.TEXTURE0 + g);
  }
  function N(E, g) {
    const V = n.get(E);
    if (E.version > 0 && V.__version !== E.version) {
      Se(V, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, V.__webglTexture, i.TEXTURE0 + g);
  }
  function $(E, g) {
    const V = n.get(E);
    if (E.version > 0 && V.__version !== E.version) {
      Ye(V, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, V.__webglTexture, i.TEXTURE0 + g);
  }
  const J = { [Lr]: i.REPEAT, [Ct]: i.CLAMP_TO_EDGE, [Pr]: i.MIRRORED_REPEAT },
    le = {
      [ft]: i.NEAREST,
      [rs]: i.NEAREST_MIPMAP_NEAREST,
      [$i]: i.NEAREST_MIPMAP_LINEAR,
      [St]: i.LINEAR,
      [Ho]: i.LINEAR_MIPMAP_NEAREST,
      [oi]: i.LINEAR_MIPMAP_LINEAR,
    },
    ce = {
      [tl]: i.NEVER,
      [ll]: i.ALWAYS,
      [nl]: i.LESS,
      [rl]: i.LEQUAL,
      [il]: i.EQUAL,
      [ol]: i.GEQUAL,
      [sl]: i.GREATER,
      [al]: i.NOTEQUAL,
    };
  function ge(E, g, V) {
    if (
      (V
        ? (i.texParameteri(E, i.TEXTURE_WRAP_S, J[g.wrapS]),
          i.texParameteri(E, i.TEXTURE_WRAP_T, J[g.wrapT]),
          (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) &&
            i.texParameteri(E, i.TEXTURE_WRAP_R, J[g.wrapR]),
          i.texParameteri(E, i.TEXTURE_MAG_FILTER, le[g.magFilter]),
          i.texParameteri(E, i.TEXTURE_MIN_FILTER, le[g.minFilter]))
        : (i.texParameteri(E, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
          i.texParameteri(E, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
          (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) &&
            i.texParameteri(E, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE),
          (g.wrapS !== Ct || g.wrapT !== Ct) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          i.texParameteri(E, i.TEXTURE_MAG_FILTER, w(g.magFilter)),
          i.texParameteri(E, i.TEXTURE_MIN_FILTER, w(g.minFilter)),
          g.minFilter !== ft &&
            g.minFilter !== St &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      g.compareFunction &&
        (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, ce[g.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const ie = e.get("EXT_texture_filter_anisotropic");
      if (
        g.magFilter === ft ||
        (g.minFilter !== $i && g.minFilter !== oi) ||
        (g.type === Qt && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          g.type === li &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (g.anisotropy > 1 || n.get(g).__currentAnisotropy) &&
        (i.texParameterf(
          E,
          ie.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(g.anisotropy, r.getMaxAnisotropy())
        ),
        (n.get(g).__currentAnisotropy = g.anisotropy));
    }
  }
  function Pe(E, g) {
    let V = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), g.addEventListener("dispose", q));
    const ie = g.source;
    let ne = p.get(ie);
    ne === void 0 && ((ne = {}), p.set(ie, ne));
    const b = te(g);
    if (b !== E.__cacheKey) {
      ne[b] === void 0 &&
        ((ne[b] = { texture: i.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (V = !0)),
        ne[b].usedTimes++;
      const j = ne[E.__cacheKey];
      j !== void 0 && (ne[E.__cacheKey].usedTimes--, j.usedTimes === 0 && G(g)),
        (E.__cacheKey = b),
        (E.__webglTexture = ne[b].texture);
    }
    return V;
  }
  function Se(E, g, V) {
    let ie = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) &&
      (ie = i.TEXTURE_2D_ARRAY),
      g.isData3DTexture && (ie = i.TEXTURE_3D);
    const ne = Pe(E, g),
      b = g.source;
    t.bindTexture(ie, E.__webglTexture, i.TEXTURE0 + V);
    const j = n.get(b);
    if (b.version !== j.__version || ne === !0) {
      t.activeTexture(i.TEXTURE0 + V),
        i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const Q = y(g) && T(g.image) === !1;
      let z = S(g.image, Q, !1, u);
      z = nt(g, z);
      const de = T(z) || a,
        _e = s.convert(g.format, g.colorSpace);
      let pe = s.convert(g.type),
        fe = B(g.internalFormat, _e, pe, g.colorSpace);
      ge(ie, g, de);
      let ue;
      const Ee = g.mipmaps,
        Oe = a && g.isVideoTexture !== !0,
        R = j.__version === void 0 || ne === !0,
        ae = x(g, z, de);
      if (g.isDepthTexture)
        (fe = i.DEPTH_COMPONENT),
          a
            ? g.type === Qt
              ? (fe = i.DEPTH_COMPONENT32F)
              : g.type === Jt
              ? (fe = i.DEPTH_COMPONENT24)
              : g.type === mn
              ? (fe = i.DEPTH24_STENCIL8)
              : (fe = i.DEPTH_COMPONENT16)
            : g.type === Qt &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          g.format === _n &&
            fe === i.DEPTH_COMPONENT &&
            g.type !== Or &&
            g.type !== Jt &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (g.type = Jt),
            (pe = s.convert(g.type))),
          g.format === qn &&
            fe === i.DEPTH_COMPONENT &&
            ((fe = i.DEPTH_STENCIL),
            g.type !== mn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (g.type = mn),
              (pe = s.convert(g.type)))),
          R &&
            (Oe
              ? t.texStorage2D(i.TEXTURE_2D, 1, fe, z.width, z.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  fe,
                  z.width,
                  z.height,
                  0,
                  _e,
                  pe,
                  null
                ));
      else if (g.isDataTexture)
        if (Ee.length > 0 && de) {
          Oe &&
            R &&
            t.texStorage2D(i.TEXTURE_2D, ae, fe, Ee[0].width, Ee[0].height);
          for (let O = 0, re = Ee.length; O < re; O++)
            (ue = Ee[O]),
              Oe
                ? t.texSubImage2D(
                    i.TEXTURE_2D,
                    O,
                    0,
                    0,
                    ue.width,
                    ue.height,
                    _e,
                    pe,
                    ue.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    O,
                    fe,
                    ue.width,
                    ue.height,
                    0,
                    _e,
                    pe,
                    ue.data
                  );
          g.generateMipmaps = !1;
        } else
          Oe
            ? (R && t.texStorage2D(i.TEXTURE_2D, ae, fe, z.width, z.height),
              t.texSubImage2D(
                i.TEXTURE_2D,
                0,
                0,
                0,
                z.width,
                z.height,
                _e,
                pe,
                z.data
              ))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                fe,
                z.width,
                z.height,
                0,
                _e,
                pe,
                z.data
              );
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          Oe &&
            R &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              ae,
              fe,
              Ee[0].width,
              Ee[0].height,
              z.depth
            );
          for (let O = 0, re = Ee.length; O < re; O++)
            (ue = Ee[O]),
              g.format !== Lt
                ? _e !== null
                  ? Oe
                    ? t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        O,
                        0,
                        0,
                        0,
                        ue.width,
                        ue.height,
                        z.depth,
                        _e,
                        ue.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        i.TEXTURE_2D_ARRAY,
                        O,
                        fe,
                        ue.width,
                        ue.height,
                        z.depth,
                        0,
                        ue.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Oe
                ? t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    O,
                    0,
                    0,
                    0,
                    ue.width,
                    ue.height,
                    z.depth,
                    _e,
                    pe,
                    ue.data
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    O,
                    fe,
                    ue.width,
                    ue.height,
                    z.depth,
                    0,
                    _e,
                    pe,
                    ue.data
                  );
        } else {
          Oe &&
            R &&
            t.texStorage2D(i.TEXTURE_2D, ae, fe, Ee[0].width, Ee[0].height);
          for (let O = 0, re = Ee.length; O < re; O++)
            (ue = Ee[O]),
              g.format !== Lt
                ? _e !== null
                  ? Oe
                    ? t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        O,
                        0,
                        0,
                        ue.width,
                        ue.height,
                        _e,
                        ue.data
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        O,
                        fe,
                        ue.width,
                        ue.height,
                        0,
                        ue.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Oe
                ? t.texSubImage2D(
                    i.TEXTURE_2D,
                    O,
                    0,
                    0,
                    ue.width,
                    ue.height,
                    _e,
                    pe,
                    ue.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    O,
                    fe,
                    ue.width,
                    ue.height,
                    0,
                    _e,
                    pe,
                    ue.data
                  );
        }
      else if (g.isDataArrayTexture)
        Oe
          ? (R &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                ae,
                fe,
                z.width,
                z.height,
                z.depth
              ),
            t.texSubImage3D(
              i.TEXTURE_2D_ARRAY,
              0,
              0,
              0,
              0,
              z.width,
              z.height,
              z.depth,
              _e,
              pe,
              z.data
            ))
          : t.texImage3D(
              i.TEXTURE_2D_ARRAY,
              0,
              fe,
              z.width,
              z.height,
              z.depth,
              0,
              _e,
              pe,
              z.data
            );
      else if (g.isData3DTexture)
        Oe
          ? (R &&
              t.texStorage3D(i.TEXTURE_3D, ae, fe, z.width, z.height, z.depth),
            t.texSubImage3D(
              i.TEXTURE_3D,
              0,
              0,
              0,
              0,
              z.width,
              z.height,
              z.depth,
              _e,
              pe,
              z.data
            ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              fe,
              z.width,
              z.height,
              z.depth,
              0,
              _e,
              pe,
              z.data
            );
      else if (g.isFramebufferTexture) {
        if (R)
          if (Oe) t.texStorage2D(i.TEXTURE_2D, ae, fe, z.width, z.height);
          else {
            let O = z.width,
              re = z.height;
            for (let oe = 0; oe < ae; oe++)
              t.texImage2D(i.TEXTURE_2D, oe, fe, O, re, 0, _e, pe, null),
                (O >>= 1),
                (re >>= 1);
          }
      } else if (Ee.length > 0 && de) {
        Oe &&
          R &&
          t.texStorage2D(i.TEXTURE_2D, ae, fe, Ee[0].width, Ee[0].height);
        for (let O = 0, re = Ee.length; O < re; O++)
          (ue = Ee[O]),
            Oe
              ? t.texSubImage2D(i.TEXTURE_2D, O, 0, 0, _e, pe, ue)
              : t.texImage2D(i.TEXTURE_2D, O, fe, _e, pe, ue);
        g.generateMipmaps = !1;
      } else
        Oe
          ? (R && t.texStorage2D(i.TEXTURE_2D, ae, fe, z.width, z.height),
            t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _e, pe, z))
          : t.texImage2D(i.TEXTURE_2D, 0, fe, _e, pe, z);
      C(g, de) && L(ie), (j.__version = b.version), g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function Ye(E, g, V) {
    if (g.image.length !== 6) return;
    const ie = Pe(E, g),
      ne = g.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + V);
    const b = n.get(ne);
    if (ne.version !== b.__version || ie === !0) {
      t.activeTexture(i.TEXTURE0 + V),
        i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const j = g.isCompressedTexture || g.image[0].isCompressedTexture,
        Q = g.image[0] && g.image[0].isDataTexture,
        z = [];
      for (let O = 0; O < 6; O++)
        !j && !Q
          ? (z[O] = S(g.image[O], !1, !0, c))
          : (z[O] = Q ? g.image[O].image : g.image[O]),
          (z[O] = nt(g, z[O]));
      const de = z[0],
        _e = T(de) || a,
        pe = s.convert(g.format, g.colorSpace),
        fe = s.convert(g.type),
        ue = B(g.internalFormat, pe, fe, g.colorSpace),
        Ee = a && g.isVideoTexture !== !0,
        Oe = b.__version === void 0 || ie === !0;
      let R = x(g, de, _e);
      ge(i.TEXTURE_CUBE_MAP, g, _e);
      let ae;
      if (j) {
        Ee &&
          Oe &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, R, ue, de.width, de.height);
        for (let O = 0; O < 6; O++) {
          ae = z[O].mipmaps;
          for (let re = 0; re < ae.length; re++) {
            const oe = ae[re];
            g.format !== Lt
              ? pe !== null
                ? Ee
                  ? t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                      re,
                      0,
                      0,
                      oe.width,
                      oe.height,
                      pe,
                      oe.data
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                      re,
                      ue,
                      oe.width,
                      oe.height,
                      0,
                      oe.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Ee
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                  re,
                  0,
                  0,
                  oe.width,
                  oe.height,
                  pe,
                  fe,
                  oe.data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                  re,
                  ue,
                  oe.width,
                  oe.height,
                  0,
                  pe,
                  fe,
                  oe.data
                );
          }
        }
      } else {
        (ae = g.mipmaps),
          Ee &&
            Oe &&
            (ae.length > 0 && R++,
            t.texStorage2D(i.TEXTURE_CUBE_MAP, R, ue, z[0].width, z[0].height));
        for (let O = 0; O < 6; O++)
          if (Q) {
            Ee
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                  0,
                  0,
                  0,
                  z[O].width,
                  z[O].height,
                  pe,
                  fe,
                  z[O].data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                  0,
                  ue,
                  z[O].width,
                  z[O].height,
                  0,
                  pe,
                  fe,
                  z[O].data
                );
            for (let re = 0; re < ae.length; re++) {
              const ze = ae[re].image[O].image;
              Ee
                ? t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                    re + 1,
                    0,
                    0,
                    ze.width,
                    ze.height,
                    pe,
                    fe,
                    ze.data
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                    re + 1,
                    ue,
                    ze.width,
                    ze.height,
                    0,
                    pe,
                    fe,
                    ze.data
                  );
            }
          } else {
            Ee
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                  0,
                  0,
                  0,
                  pe,
                  fe,
                  z[O]
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                  0,
                  ue,
                  pe,
                  fe,
                  z[O]
                );
            for (let re = 0; re < ae.length; re++) {
              const oe = ae[re];
              Ee
                ? t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                    re + 1,
                    0,
                    0,
                    pe,
                    fe,
                    oe.image[O]
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                    re + 1,
                    ue,
                    pe,
                    fe,
                    oe.image[O]
                  );
            }
          }
      }
      C(g, _e) && L(i.TEXTURE_CUBE_MAP),
        (b.__version = ne.version),
        g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function Ne(E, g, V, ie, ne) {
    const b = s.convert(V.format, V.colorSpace),
      j = s.convert(V.type),
      Q = B(V.internalFormat, b, j, V.colorSpace);
    n.get(g).__hasExternalTextures ||
      (ne === i.TEXTURE_3D || ne === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(ne, 0, Q, g.width, g.height, g.depth, 0, b, j, null)
        : t.texImage2D(ne, 0, Q, g.width, g.height, 0, b, j, null)),
      t.bindFramebuffer(i.FRAMEBUFFER, E),
      Ge(g)
        ? f.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            ie,
            ne,
            n.get(V).__webglTexture,
            0,
            be(g)
          )
        : (ne === i.TEXTURE_2D ||
            (ne >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              ne <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(
            i.FRAMEBUFFER,
            ie,
            ne,
            n.get(V).__webglTexture,
            0
          ),
      t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function U(E, g, V) {
    if (
      (i.bindRenderbuffer(i.RENDERBUFFER, E), g.depthBuffer && !g.stencilBuffer)
    ) {
      let ie = i.DEPTH_COMPONENT16;
      if (V || Ge(g)) {
        const ne = g.depthTexture;
        ne &&
          ne.isDepthTexture &&
          (ne.type === Qt
            ? (ie = i.DEPTH_COMPONENT32F)
            : ne.type === Jt && (ie = i.DEPTH_COMPONENT24));
        const b = be(g);
        Ge(g)
          ? f.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              b,
              ie,
              g.width,
              g.height
            )
          : i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              b,
              ie,
              g.width,
              g.height
            );
      } else i.renderbufferStorage(i.RENDERBUFFER, ie, g.width, g.height);
      i.framebufferRenderbuffer(
        i.FRAMEBUFFER,
        i.DEPTH_ATTACHMENT,
        i.RENDERBUFFER,
        E
      );
    } else if (g.depthBuffer && g.stencilBuffer) {
      const ie = be(g);
      V && Ge(g) === !1
        ? i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            ie,
            i.DEPTH24_STENCIL8,
            g.width,
            g.height
          )
        : Ge(g)
        ? f.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            ie,
            i.DEPTH24_STENCIL8,
            g.width,
            g.height
          )
        : i.renderbufferStorage(
            i.RENDERBUFFER,
            i.DEPTH_STENCIL,
            g.width,
            g.height
          ),
        i.framebufferRenderbuffer(
          i.FRAMEBUFFER,
          i.DEPTH_STENCIL_ATTACHMENT,
          i.RENDERBUFFER,
          E
        );
    } else {
      const ie =
        g.isWebGLMultipleRenderTargets === !0 ? g.texture : [g.texture];
      for (let ne = 0; ne < ie.length; ne++) {
        const b = ie[ne],
          j = s.convert(b.format, b.colorSpace),
          Q = s.convert(b.type),
          z = B(b.internalFormat, j, Q, b.colorSpace),
          de = be(g);
        V && Ge(g) === !1
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              de,
              z,
              g.width,
              g.height
            )
          : Ge(g)
          ? f.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              de,
              z,
              g.width,
              g.height
            )
          : i.renderbufferStorage(i.RENDERBUFFER, z, g.width, g.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function $e(E, g) {
    if (g && g.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, E),
      !(g.depthTexture && g.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(g.depthTexture).__webglTexture ||
      g.depthTexture.image.width !== g.width ||
      g.depthTexture.image.height !== g.height) &&
      ((g.depthTexture.image.width = g.width),
      (g.depthTexture.image.height = g.height),
      (g.depthTexture.needsUpdate = !0)),
      K(g.depthTexture, 0);
    const ie = n.get(g.depthTexture).__webglTexture,
      ne = be(g);
    if (g.depthTexture.format === _n)
      Ge(g)
        ? f.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            ie,
            0,
            ne
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            ie,
            0
          );
    else if (g.depthTexture.format === qn)
      Ge(g)
        ? f.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            ie,
            0,
            ne
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            ie,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function ve(E) {
    const g = n.get(E),
      V = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (V)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      $e(g.__webglFramebuffer, E);
    } else if (V) {
      g.__webglDepthbuffer = [];
      for (let ie = 0; ie < 6; ie++)
        t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[ie]),
          (g.__webglDepthbuffer[ie] = i.createRenderbuffer()),
          U(g.__webglDepthbuffer[ie], E, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer),
        (g.__webglDepthbuffer = i.createRenderbuffer()),
        U(g.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function we(E, g, V) {
    const ie = n.get(E);
    g !== void 0 &&
      Ne(
        ie.__webglFramebuffer,
        E,
        E.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D
      ),
      V !== void 0 && ve(E);
  }
  function xe(E) {
    const g = E.texture,
      V = n.get(E),
      ie = n.get(g);
    E.addEventListener("dispose", ee),
      E.isWebGLMultipleRenderTargets !== !0 &&
        (ie.__webglTexture === void 0 &&
          (ie.__webglTexture = i.createTexture()),
        (ie.__version = g.version),
        o.memory.textures++);
    const ne = E.isWebGLCubeRenderTarget === !0,
      b = E.isWebGLMultipleRenderTargets === !0,
      j = T(E) || a;
    if (ne) {
      V.__webglFramebuffer = [];
      for (let Q = 0; Q < 6; Q++)
        V.__webglFramebuffer[Q] = i.createFramebuffer();
    } else {
      if (((V.__webglFramebuffer = i.createFramebuffer()), b))
        if (r.drawBuffers) {
          const Q = E.texture;
          for (let z = 0, de = Q.length; z < de; z++) {
            const _e = n.get(Q[z]);
            _e.__webglTexture === void 0 &&
              ((_e.__webglTexture = i.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (a && E.samples > 0 && Ge(E) === !1) {
        const Q = b ? g : [g];
        (V.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (V.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, V.__webglMultisampledFramebuffer);
        for (let z = 0; z < Q.length; z++) {
          const de = Q[z];
          (V.__webglColorRenderbuffer[z] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, V.__webglColorRenderbuffer[z]);
          const _e = s.convert(de.format, de.colorSpace),
            pe = s.convert(de.type),
            fe = B(
              de.internalFormat,
              _e,
              pe,
              de.colorSpace,
              E.isXRRenderTarget === !0
            ),
            ue = be(E);
          i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            ue,
            fe,
            E.width,
            E.height
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + z,
              i.RENDERBUFFER,
              V.__webglColorRenderbuffer[z]
            );
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null),
          E.depthBuffer &&
            ((V.__webglDepthRenderbuffer = i.createRenderbuffer()),
            U(V.__webglDepthRenderbuffer, E, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ne) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, ie.__webglTexture),
        ge(i.TEXTURE_CUBE_MAP, g, j);
      for (let Q = 0; Q < 6; Q++)
        Ne(
          V.__webglFramebuffer[Q],
          E,
          g,
          i.COLOR_ATTACHMENT0,
          i.TEXTURE_CUBE_MAP_POSITIVE_X + Q
        );
      C(g, j) && L(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (b) {
      const Q = E.texture;
      for (let z = 0, de = Q.length; z < de; z++) {
        const _e = Q[z],
          pe = n.get(_e);
        t.bindTexture(i.TEXTURE_2D, pe.__webglTexture),
          ge(i.TEXTURE_2D, _e, j),
          Ne(
            V.__webglFramebuffer,
            E,
            _e,
            i.COLOR_ATTACHMENT0 + z,
            i.TEXTURE_2D
          ),
          C(_e, j) && L(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let Q = i.TEXTURE_2D;
      (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
        (a
          ? (Q = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(Q, ie.__webglTexture),
        ge(Q, g, j),
        Ne(V.__webglFramebuffer, E, g, i.COLOR_ATTACHMENT0, Q),
        C(g, j) && L(Q),
        t.unbindTexture();
    }
    E.depthBuffer && ve(E);
  }
  function Ve(E) {
    const g = T(E) || a,
      V = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let ie = 0, ne = V.length; ie < ne; ie++) {
      const b = V[ie];
      if (C(b, g)) {
        const j = E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D,
          Q = n.get(b).__webglTexture;
        t.bindTexture(j, Q), L(j), t.unbindTexture();
      }
    }
  }
  function De(E) {
    if (a && E.samples > 0 && Ge(E) === !1) {
      const g = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture],
        V = E.width,
        ie = E.height;
      let ne = i.COLOR_BUFFER_BIT;
      const b = [],
        j = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        Q = n.get(E),
        z = E.isWebGLMultipleRenderTargets === !0;
      if (z)
        for (let de = 0; de < g.length; de++)
          t.bindFramebuffer(i.FRAMEBUFFER, Q.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + de,
              i.RENDERBUFFER,
              null
            ),
            t.bindFramebuffer(i.FRAMEBUFFER, Q.__webglFramebuffer),
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + de,
              i.TEXTURE_2D,
              null,
              0
            );
      t.bindFramebuffer(i.READ_FRAMEBUFFER, Q.__webglMultisampledFramebuffer),
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Q.__webglFramebuffer);
      for (let de = 0; de < g.length; de++) {
        b.push(i.COLOR_ATTACHMENT0 + de), E.depthBuffer && b.push(j);
        const _e =
          Q.__ignoreDepthValues !== void 0 ? Q.__ignoreDepthValues : !1;
        if (
          (_e === !1 &&
            (E.depthBuffer && (ne |= i.DEPTH_BUFFER_BIT),
            E.stencilBuffer && (ne |= i.STENCIL_BUFFER_BIT)),
          z &&
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              Q.__webglColorRenderbuffer[de]
            ),
          _e === !0 &&
            (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [j]),
            i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [j])),
          z)
        ) {
          const pe = n.get(g[de]).__webglTexture;
          i.framebufferTexture2D(
            i.DRAW_FRAMEBUFFER,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_2D,
            pe,
            0
          );
        }
        i.blitFramebuffer(0, 0, V, ie, 0, 0, V, ie, ne, i.NEAREST),
          m && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, b);
      }
      if (
        (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        z)
      )
        for (let de = 0; de < g.length; de++) {
          t.bindFramebuffer(i.FRAMEBUFFER, Q.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + de,
              i.RENDERBUFFER,
              Q.__webglColorRenderbuffer[de]
            );
          const _e = n.get(g[de]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, Q.__webglFramebuffer),
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + de,
              i.TEXTURE_2D,
              _e,
              0
            );
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Q.__webglMultisampledFramebuffer);
    }
  }
  function be(E) {
    return Math.min(d, E.samples);
  }
  function Ge(E) {
    const g = n.get(E);
    return (
      a &&
      E.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      g.__useRenderToTexture !== !1
    );
  }
  function Je(E) {
    const g = o.render.frame;
    v.get(E) !== g && (v.set(E, g), E.update());
  }
  function nt(E, g) {
    const V = E.colorSpace,
      ie = E.format,
      ne = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.format === Ur ||
        (V !== Ft &&
          V !== vn &&
          (V === Ce
            ? a === !1
              ? e.has("EXT_sRGB") === !0 && ie === Lt
                ? ((E.format = Ur),
                  (E.minFilter = St),
                  (E.generateMipmaps = !1))
                : (g = Fa.sRGBToLinear(g))
              : (ie !== Lt || ne !== tn) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                V
              ))),
      g
    );
  }
  (this.allocateTextureUnit = Y),
    (this.resetTextureUnits = X),
    (this.setTexture2D = K),
    (this.setTexture2DArray = me),
    (this.setTexture3D = N),
    (this.setTextureCube = $),
    (this.rebindTextures = we),
    (this.setupRenderTarget = xe),
    (this.updateRenderTargetMipmap = Ve),
    (this.updateMultisampleRenderTarget = De),
    (this.setupDepthRenderbuffer = ve),
    (this.setupFrameBufferTexture = Ne),
    (this.useMultisampledRTT = Ge);
}
function Mf(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = vn) {
    let a;
    if (s === tn) return i.UNSIGNED_BYTE;
    if (s === wa) return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === Ra) return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === Vo) return i.BYTE;
    if (s === ko) return i.SHORT;
    if (s === Or) return i.UNSIGNED_SHORT;
    if (s === Aa) return i.INT;
    if (s === Jt) return i.UNSIGNED_INT;
    if (s === Qt) return i.FLOAT;
    if (s === li)
      return n
        ? i.HALF_FLOAT
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Wo) return i.ALPHA;
    if (s === Lt) return i.RGBA;
    if (s === Xo) return i.LUMINANCE;
    if (s === Yo) return i.LUMINANCE_ALPHA;
    if (s === _n) return i.DEPTH_COMPONENT;
    if (s === qn) return i.DEPTH_STENCIL;
    if (s === Ur)
      return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === qo) return i.RED;
    if (s === Ca) return i.RED_INTEGER;
    if (s === jo) return i.RG;
    if (s === La) return i.RG_INTEGER;
    if (s === Pa) return i.RGBA_INTEGER;
    if (s === Ji || s === Qi || s === er || s === tr)
      if (o === Ce)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (s === Ji) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Qi) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === er) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === tr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (s === Ji) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Qi) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === er) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === tr) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === ss || s === as || s === os || s === ls)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (s === ss) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === as) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === os) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === ls) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === Ko)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === cs || s === us)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (s === cs)
          return o === Ce ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === us)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === hs ||
      s === ds ||
      s === fs ||
      s === ps ||
      s === ms ||
      s === _s ||
      s === gs ||
      s === vs ||
      s === xs ||
      s === Ms ||
      s === Ss ||
      s === Es ||
      s === ys ||
      s === Ts
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (s === hs)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === ds)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === fs)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === ps)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === ms)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === _s)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === gs)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === vs)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === xs)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Ms)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Ss)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Es)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === ys)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Ts)
          return o === Ce
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === nr)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (s === nr)
          return o === Ce
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    if (s === Zo || s === bs || s === As || s === ws)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (s === nr) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === bs) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === As) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === ws) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return s === mn
      ? n
        ? i.UNSIGNED_INT_24_8
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : i[s] !== void 0
      ? i[s]
      : null;
  }
  return { convert: r };
}
class Sf extends Et {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Bi extends ct {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Ef = { type: "move" };
class Tr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Bi()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Bi()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new D()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new D())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Bi()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new D()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new D())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const _ of e.hand.values()) {
          const p = t.getJointPose(_, n),
            h = this._getHandJoint(c, _);
          p !== null &&
            (h.matrix.fromArray(p.transform.matrix),
            h.matrix.decompose(h.position, h.rotation, h.scale),
            (h.matrixWorldNeedsUpdate = !0),
            (h.jointRadius = p.radius)),
            (h.visible = p !== null);
        }
        const u = c.joints["index-finger-tip"],
          d = c.joints["thumb-tip"],
          f = u.position.distanceTo(d.position),
          m = 0.02,
          v = 0.005;
        c.inputState.pinching && f > m + v
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            f <= m - v &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      a !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (a.matrix.fromArray(r.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          (a.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(r.linearVelocity))
            : (a.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(r.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(Ef)));
    }
    return (
      a !== null && (a.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Bi();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class yf extends _t {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : _n), u !== _n && u !== qn))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && u === _n && (n = Jt),
      n === void 0 && u === qn && (n = mn),
      super(null, r, s, o, a, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : ft),
      (this.minFilter = l !== void 0 ? l : ft),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class Tf extends En {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      s = 1,
      o = null,
      a = "local-floor",
      l = 1,
      c = null,
      u = null,
      d = null,
      f = null,
      m = null,
      v = null;
    const _ = t.getContextAttributes();
    let p = null,
      h = null;
    const A = [],
      S = [];
    let T = null;
    const y = new Et();
    y.layers.enable(1), (y.viewport = new st());
    const C = new Et();
    C.layers.enable(2), (C.viewport = new st());
    const L = [y, C],
      B = new Sf();
    B.layers.enable(1), B.layers.enable(2);
    let x = null,
      w = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getCamera = function () {}),
      (this.setUserCamera = function (N) {
        T = N;
      }),
      (this.getController = function (N) {
        let $ = A[N];
        return (
          $ === void 0 && (($ = new Tr()), (A[N] = $)), $.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (N) {
        let $ = A[N];
        return $ === void 0 && (($ = new Tr()), (A[N] = $)), $.getGripSpace();
      }),
      (this.getHand = function (N) {
        let $ = A[N];
        return $ === void 0 && (($ = new Tr()), (A[N] = $)), $.getHandSpace();
      });
    function q(N) {
      const $ = S.indexOf(N.inputSource);
      if ($ === -1) return;
      const J = A[$];
      J !== void 0 &&
        (J.update(N.inputSource, N.frame, c || o),
        J.dispatchEvent({ type: N.type, data: N.inputSource }));
    }
    function ee() {
      r.removeEventListener("select", q),
        r.removeEventListener("selectstart", q),
        r.removeEventListener("selectend", q),
        r.removeEventListener("squeeze", q),
        r.removeEventListener("squeezestart", q),
        r.removeEventListener("squeezeend", q),
        r.removeEventListener("end", ee),
        r.removeEventListener("inputsourceschange", F);
      for (let N = 0; N < A.length; N++) {
        const $ = S[N];
        $ !== null && ((S[N] = null), A[N].disconnect($));
      }
      (x = null),
        (w = null),
        e.setRenderTarget(p),
        (m = null),
        (f = null),
        (d = null),
        (r = null),
        (h = null),
        me.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (N) {
      (s = N),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (N) {
        (a = N),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (N) {
        c = N;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : m;
      }),
      (this.getBinding = function () {
        return d;
      }),
      (this.getFrame = function () {
        return v;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (N) {
        if (((r = N), r !== null)) {
          if (
            ((p = e.getRenderTarget()),
            r.addEventListener("select", q),
            r.addEventListener("selectstart", q),
            r.addEventListener("selectend", q),
            r.addEventListener("squeeze", q),
            r.addEventListener("squeezestart", q),
            r.addEventListener("squeezeend", q),
            r.addEventListener("end", ee),
            r.addEventListener("inputsourceschange", F),
            _.xrCompatible !== !0 && (await t.makeXRCompatible()),
            r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const $ = {
              antialias: r.renderState.layers === void 0 ? _.antialias : !0,
              alpha: !0,
              depth: _.depth,
              stencil: _.stencil,
              framebufferScaleFactor: s,
            };
            (m = new XRWebGLLayer(r, t, $)),
              r.updateRenderState({ baseLayer: m }),
              (h = new xn(m.framebufferWidth, m.framebufferHeight, {
                format: Lt,
                type: tn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: _.stencil,
              }));
          } else {
            let $ = null,
              J = null,
              le = null;
            _.depth &&
              ((le = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              ($ = _.stencil ? qn : _n),
              (J = _.stencil ? mn : Jt));
            const ce = {
              colorFormat: t.RGBA8,
              depthFormat: le,
              scaleFactor: s,
            };
            (d = new XRWebGLBinding(r, t)),
              (f = d.createProjectionLayer(ce)),
              r.updateRenderState({ layers: [f] }),
              (h = new xn(f.textureWidth, f.textureHeight, {
                format: Lt,
                type: tn,
                depthTexture: new yf(
                  f.textureWidth,
                  f.textureHeight,
                  J,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  $
                ),
                stencilBuffer: _.stencil,
                colorSpace: e.outputColorSpace,
                samples: _.antialias ? 4 : 0,
              }));
            const ge = e.properties.get(h);
            ge.__ignoreDepthValues = f.ignoreDepthValues;
          }
          (h.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (o = await r.requestReferenceSpace(a)),
            me.setContext(r),
            me.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      });
    function F(N) {
      for (let $ = 0; $ < N.removed.length; $++) {
        const J = N.removed[$],
          le = S.indexOf(J);
        le >= 0 && ((S[le] = null), A[le].disconnect(J));
      }
      for (let $ = 0; $ < N.added.length; $++) {
        const J = N.added[$];
        let le = S.indexOf(J);
        if (le === -1) {
          for (let ge = 0; ge < A.length; ge++)
            if (ge >= S.length) {
              S.push(J), (le = ge);
              break;
            } else if (S[ge] === null) {
              (S[ge] = J), (le = ge);
              break;
            }
          if (le === -1) break;
        }
        const ce = A[le];
        ce && ce.connect(J);
      }
    }
    const G = new D(),
      H = new D();
    function Z(N, $, J) {
      G.setFromMatrixPosition($.matrixWorld),
        H.setFromMatrixPosition(J.matrixWorld);
      const le = G.distanceTo(H),
        ce = $.projectionMatrix.elements,
        ge = J.projectionMatrix.elements,
        Pe = ce[14] / (ce[10] - 1),
        Se = ce[14] / (ce[10] + 1),
        Ye = (ce[9] + 1) / ce[5],
        Ne = (ce[9] - 1) / ce[5],
        U = (ce[8] - 1) / ce[0],
        $e = (ge[8] + 1) / ge[0],
        ve = Pe * U,
        we = Pe * $e,
        xe = le / (-U + $e),
        Ve = xe * -U;
      $.matrixWorld.decompose(N.position, N.quaternion, N.scale),
        N.translateX(Ve),
        N.translateZ(xe),
        N.matrixWorld.compose(N.position, N.quaternion, N.scale),
        N.matrixWorldInverse.copy(N.matrixWorld).invert();
      const De = Pe + xe,
        be = Se + xe,
        Ge = ve - Ve,
        Je = we + (le - Ve),
        nt = ((Ye * Se) / be) * De,
        E = ((Ne * Se) / be) * De;
      N.projectionMatrix.makePerspective(Ge, Je, nt, E, De, be),
        N.projectionMatrixInverse.copy(N.projectionMatrix).invert();
    }
    function X(N, $) {
      $ === null
        ? N.matrixWorld.copy(N.matrix)
        : N.matrixWorld.multiplyMatrices($.matrixWorld, N.matrix),
        N.matrixWorldInverse.copy(N.matrixWorld).invert();
    }
    this.updateCameraXR = function (N) {
      if (r === null) return N;
      T && (N = T),
        (B.near = C.near = y.near = N.near),
        (B.far = C.far = y.far = N.far),
        (x !== B.near || w !== B.far) &&
          (r.updateRenderState({ depthNear: B.near, depthFar: B.far }),
          (x = B.near),
          (w = B.far));
      const $ = N.parent,
        J = B.cameras;
      X(B, $);
      for (let le = 0; le < J.length; le++) X(J[le], $);
      return (
        J.length === 2
          ? Z(B, y, C)
          : B.projectionMatrix.copy(y.projectionMatrix),
        T && Y(B, $),
        B
      );
    };
    function Y(N, $) {
      const J = T;
      $ === null
        ? J.matrix.copy(N.matrixWorld)
        : (J.matrix.copy($.matrixWorld),
          J.matrix.invert(),
          J.matrix.multiply(N.matrixWorld)),
        J.matrix.decompose(J.position, J.quaternion, J.scale),
        J.updateMatrixWorld(!0);
      const le = J.children;
      for (let ce = 0, ge = le.length; ce < ge; ce++)
        le[ce].updateMatrixWorld(!0);
      J.projectionMatrix.copy(N.projectionMatrix),
        J.projectionMatrixInverse.copy(N.projectionMatrixInverse),
        J.isPerspectiveCamera &&
          ((J.fov = ci * 2 * Math.atan(1 / J.projectionMatrix.elements[5])),
          (J.zoom = 1));
    }
    (this.getFoveation = function () {
      if (!(f === null && m === null)) return l;
    }),
      (this.setFoveation = function (N) {
        (l = N),
          f !== null && (f.fixedFoveation = N),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = N);
      });
    let te = null;
    function K(N, $) {
      if (((u = $.getViewerPose(c || o)), (v = $), u !== null)) {
        const J = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(h, m.framebuffer),
          e.setRenderTarget(h));
        let le = !1;
        J.length !== B.cameras.length && ((B.cameras.length = 0), (le = !0));
        for (let ce = 0; ce < J.length; ce++) {
          const ge = J[ce];
          let Pe = null;
          if (m !== null) Pe = m.getViewport(ge);
          else {
            const Ye = d.getViewSubImage(f, ge);
            (Pe = Ye.viewport),
              ce === 0 &&
                (e.setRenderTargetTextures(
                  h,
                  Ye.colorTexture,
                  f.ignoreDepthValues ? void 0 : Ye.depthStencilTexture
                ),
                e.setRenderTarget(h));
          }
          let Se = L[ce];
          Se === void 0 &&
            ((Se = new Et()),
            Se.layers.enable(ce),
            (Se.viewport = new st()),
            (L[ce] = Se)),
            Se.matrix.fromArray(ge.transform.matrix),
            Se.matrix.decompose(Se.position, Se.quaternion, Se.scale),
            Se.projectionMatrix.fromArray(ge.projectionMatrix),
            Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),
            Se.viewport.set(Pe.x, Pe.y, Pe.width, Pe.height),
            ce === 0 &&
              (B.matrix.copy(Se.matrix),
              B.matrix.decompose(B.position, B.quaternion, B.scale)),
            le === !0 && B.cameras.push(Se);
        }
      }
      for (let J = 0; J < A.length; J++) {
        const le = S[J],
          ce = A[J];
        le !== null && ce !== void 0 && ce.update(le, $, c || o);
      }
      te && te(N, $),
        $.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: $ }),
        (v = null);
    }
    const me = new qa();
    me.setAnimationLoop(K),
      (this.setAnimationLoop = function (N) {
        te = N;
      }),
      (this.dispose = function () {});
  }
}
function bf(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, Wa(i)),
      h.isFog
        ? ((p.fogNear.value = h.near), (p.fogFar.value = h.far))
        : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, A, S, T) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial
      ? s(p, h)
      : h.isMeshToonMaterial
      ? (s(p, h), d(p, h))
      : h.isMeshPhongMaterial
      ? (s(p, h), u(p, h))
      : h.isMeshStandardMaterial
      ? (s(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, T))
      : h.isMeshMatcapMaterial
      ? (s(p, h), v(p, h))
      : h.isMeshDepthMaterial
      ? s(p, h)
      : h.isMeshDistanceMaterial
      ? (s(p, h), _(p, h))
      : h.isMeshNormalMaterial
      ? s(p, h)
      : h.isLineBasicMaterial
      ? (o(p, h), h.isLineDashedMaterial && a(p, h))
      : h.isPointsMaterial
      ? l(p, h, A, S)
      : h.isSpriteMaterial
      ? c(p, h)
      : h.isShadowMaterial
      ? (p.color.value.copy(h.color), (p.opacity.value = h.opacity))
      : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(p, h) {
    (p.opacity.value = h.opacity),
      h.color && p.diffuse.value.copy(h.color),
      h.emissive &&
        p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.bumpMap &&
        ((p.bumpMap.value = h.bumpMap),
        t(h.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = h.bumpScale),
        h.side === mt && (p.bumpScale.value *= -1)),
      h.normalMap &&
        ((p.normalMap.value = h.normalMap),
        t(h.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(h.normalScale),
        h.side === mt && p.normalScale.value.negate()),
      h.displacementMap &&
        ((p.displacementMap.value = h.displacementMap),
        t(h.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = h.displacementScale),
        (p.displacementBias.value = h.displacementBias)),
      h.emissiveMap &&
        ((p.emissiveMap.value = h.emissiveMap),
        t(h.emissiveMap, p.emissiveMapTransform)),
      h.specularMap &&
        ((p.specularMap.value = h.specularMap),
        t(h.specularMap, p.specularMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const A = e.get(h).envMap;
    if (
      (A &&
        ((p.envMap.value = A),
        (p.flipEnvMap.value =
          A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = h.reflectivity),
        (p.ior.value = h.ior),
        (p.refractionRatio.value = h.refractionRatio)),
      h.lightMap)
    ) {
      p.lightMap.value = h.lightMap;
      const S = i.useLegacyLights === !0 ? Math.PI : 1;
      (p.lightMapIntensity.value = h.lightMapIntensity * S),
        t(h.lightMap, p.lightMapTransform);
    }
    h.aoMap &&
      ((p.aoMap.value = h.aoMap),
      (p.aoMapIntensity.value = h.aoMapIntensity),
      t(h.aoMap, p.aoMapTransform));
  }
  function o(p, h) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform));
  }
  function a(p, h) {
    (p.dashSize.value = h.dashSize),
      (p.totalSize.value = h.dashSize + h.gapSize),
      (p.scale.value = h.scale);
  }
  function l(p, h, A, S) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.size.value = h.size * A),
      (p.scale.value = S * 0.5),
      h.map && ((p.map.value = h.map), t(h.map, p.uvTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.rotation.value = h.rotation),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular),
      (p.shininess.value = Math.max(h.shininess, 1e-4));
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    (p.metalness.value = h.metalness),
      h.metalnessMap &&
        ((p.metalnessMap.value = h.metalnessMap),
        t(h.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = h.roughness),
      h.roughnessMap &&
        ((p.roughnessMap.value = h.roughnessMap),
        t(h.roughnessMap, p.roughnessMapTransform)),
      e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, A) {
    (p.ior.value = h.ior),
      h.sheen > 0 &&
        (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),
        (p.sheenRoughness.value = h.sheenRoughness),
        h.sheenColorMap &&
          ((p.sheenColorMap.value = h.sheenColorMap),
          t(h.sheenColorMap, p.sheenColorMapTransform)),
        h.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = h.sheenRoughnessMap),
          t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      h.clearcoat > 0 &&
        ((p.clearcoat.value = h.clearcoat),
        (p.clearcoatRoughness.value = h.clearcoatRoughness),
        h.clearcoatMap &&
          ((p.clearcoatMap.value = h.clearcoatMap),
          t(h.clearcoatMap, p.clearcoatMapTransform)),
        h.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap),
          t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        h.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = h.clearcoatNormalMap),
          t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),
          h.side === mt && p.clearcoatNormalScale.value.negate())),
      h.iridescence > 0 &&
        ((p.iridescence.value = h.iridescence),
        (p.iridescenceIOR.value = h.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1]),
        h.iridescenceMap &&
          ((p.iridescenceMap.value = h.iridescenceMap),
          t(h.iridescenceMap, p.iridescenceMapTransform)),
        h.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = h.iridescenceThicknessMap),
          t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      h.transmission > 0 &&
        ((p.transmission.value = h.transmission),
        (p.transmissionSamplerMap.value = A.texture),
        p.transmissionSamplerSize.value.set(A.width, A.height),
        h.transmissionMap &&
          ((p.transmissionMap.value = h.transmissionMap),
          t(h.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = h.thickness),
        h.thicknessMap &&
          ((p.thicknessMap.value = h.thicknessMap),
          t(h.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = h.attenuationDistance),
        p.attenuationColor.value.copy(h.attenuationColor)),
      h.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          h.anisotropy * Math.cos(h.anisotropyRotation),
          h.anisotropy * Math.sin(h.anisotropyRotation)
        ),
        h.anisotropyMap &&
          ((p.anisotropyMap.value = h.anisotropyMap),
          t(h.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = h.specularIntensity),
      p.specularColor.value.copy(h.specularColor),
      h.specularColorMap &&
        ((p.specularColorMap.value = h.specularColorMap),
        t(h.specularColorMap, p.specularColorMapTransform)),
      h.specularIntensityMap &&
        ((p.specularIntensityMap.value = h.specularIntensityMap),
        t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function v(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function _(p, h) {
    const A = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),
      (p.nearDistance.value = A.shadow.camera.near),
      (p.farDistance.value = A.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function Af(i, e, t, n) {
  let r = {},
    s = {},
    o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(A, S) {
    const T = S.program;
    n.uniformBlockBinding(A, T);
  }
  function c(A, S) {
    let T = r[A.id];
    T === void 0 &&
      (v(A), (T = u(A)), (r[A.id] = T), A.addEventListener("dispose", p));
    const y = S.program;
    n.updateUBOMapping(A, y);
    const C = e.render.frame;
    s[A.id] !== C && (f(A), (s[A.id] = C));
  }
  function u(A) {
    const S = d();
    A.__bindingPointIndex = S;
    const T = i.createBuffer(),
      y = A.__size,
      C = A.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, T),
      i.bufferData(i.UNIFORM_BUFFER, y, C),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, S, T),
      T
    );
  }
  function d() {
    for (let A = 0; A < a; A++) if (o.indexOf(A) === -1) return o.push(A), A;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function f(A) {
    const S = r[A.id],
      T = A.uniforms,
      y = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, S);
    for (let C = 0, L = T.length; C < L; C++) {
      const B = T[C];
      if (m(B, C, y) === !0) {
        const x = B.__offset,
          w = Array.isArray(B.value) ? B.value : [B.value];
        let q = 0;
        for (let ee = 0; ee < w.length; ee++) {
          const F = w[ee],
            G = _(F);
          typeof F == "number"
            ? ((B.__data[0] = F),
              i.bufferSubData(i.UNIFORM_BUFFER, x + q, B.__data))
            : F.isMatrix3
            ? ((B.__data[0] = F.elements[0]),
              (B.__data[1] = F.elements[1]),
              (B.__data[2] = F.elements[2]),
              (B.__data[3] = F.elements[0]),
              (B.__data[4] = F.elements[3]),
              (B.__data[5] = F.elements[4]),
              (B.__data[6] = F.elements[5]),
              (B.__data[7] = F.elements[0]),
              (B.__data[8] = F.elements[6]),
              (B.__data[9] = F.elements[7]),
              (B.__data[10] = F.elements[8]),
              (B.__data[11] = F.elements[0]))
            : (F.toArray(B.__data, q),
              (q += G.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        i.bufferSubData(i.UNIFORM_BUFFER, x, B.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(A, S, T) {
    const y = A.value;
    if (T[S] === void 0) {
      if (typeof y == "number") T[S] = y;
      else {
        const C = Array.isArray(y) ? y : [y],
          L = [];
        for (let B = 0; B < C.length; B++) L.push(C[B].clone());
        T[S] = L;
      }
      return !0;
    } else if (typeof y == "number") {
      if (T[S] !== y) return (T[S] = y), !0;
    } else {
      const C = Array.isArray(T[S]) ? T[S] : [T[S]],
        L = Array.isArray(y) ? y : [y];
      for (let B = 0; B < C.length; B++) {
        const x = C[B];
        if (x.equals(L[B]) === !1) return x.copy(L[B]), !0;
      }
    }
    return !1;
  }
  function v(A) {
    const S = A.uniforms;
    let T = 0;
    const y = 16;
    let C = 0;
    for (let L = 0, B = S.length; L < B; L++) {
      const x = S[L],
        w = { boundary: 0, storage: 0 },
        q = Array.isArray(x.value) ? x.value : [x.value];
      for (let ee = 0, F = q.length; ee < F; ee++) {
        const G = q[ee],
          H = _(G);
        (w.boundary += H.boundary), (w.storage += H.storage);
      }
      if (
        ((x.__data = new Float32Array(
          w.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (x.__offset = T),
        L > 0)
      ) {
        C = T % y;
        const ee = y - C;
        C !== 0 && ee - w.boundary < 0 && ((T += y - C), (x.__offset = T));
      }
      T += w.storage;
    }
    return (
      (C = T % y), C > 0 && (T += y - C), (A.__size = T), (A.__cache = {}), this
    );
  }
  function _(A) {
    const S = { boundary: 0, storage: 0 };
    return (
      typeof A == "number"
        ? ((S.boundary = 4), (S.storage = 4))
        : A.isVector2
        ? ((S.boundary = 8), (S.storage = 8))
        : A.isVector3 || A.isColor
        ? ((S.boundary = 16), (S.storage = 12))
        : A.isVector4
        ? ((S.boundary = 16), (S.storage = 16))
        : A.isMatrix3
        ? ((S.boundary = 48), (S.storage = 48))
        : A.isMatrix4
        ? ((S.boundary = 64), (S.storage = 64))
        : A.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            A
          ),
      S
    );
  }
  function p(A) {
    const S = A.target;
    S.removeEventListener("dispose", p);
    const T = o.indexOf(S.__bindingPointIndex);
    o.splice(T, 1), i.deleteBuffer(r[S.id]), delete r[S.id], delete s[S.id];
  }
  function h() {
    for (const A in r) i.deleteBuffer(r[A]);
    (o = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: h };
}
function wf() {
  const i = ui("canvas");
  return (i.style.display = "block"), i;
}
class Qa {
  constructor(e = {}) {
    const {
      canvas: t = wf(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    n !== null ? (f = n.getContextAttributes().alpha) : (f = o);
    const m = new Uint32Array(4),
      v = new Int32Array(4);
    let _ = null,
      p = null;
    const h = [],
      A = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.outputColorSpace = Ce),
      (this.useLegacyLights = !0),
      (this.toneMapping = qt),
      (this.toneMappingExposure = 1);
    const S = this;
    let T = !1,
      y = 0,
      C = 0,
      L = null,
      B = -1,
      x = null;
    const w = new st(),
      q = new st();
    let ee = null;
    const F = new He(0);
    let G = 0,
      H = t.width,
      Z = t.height,
      X = 1,
      Y = null,
      te = null;
    const K = new st(0, 0, H, Z),
      me = new st(0, 0, H, Z);
    let N = !1;
    const $ = new Gr();
    let J = !1,
      le = !1,
      ce = null;
    const ge = new Qe(),
      Pe = new Le(),
      Se = new D(),
      Ye = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function Ne() {
      return L === null ? X : 1;
    }
    let U = n;
    function $e(M, I) {
      for (let k = 0; k < M.length; k++) {
        const P = M[k],
          W = t.getContext(P, I);
        if (W !== null) return W;
      }
      return null;
    }
    try {
      const M = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${Fr}`),
        t.addEventListener("webglcontextlost", ae, !1),
        t.addEventListener("webglcontextrestored", O, !1),
        t.addEventListener("webglcontextcreationerror", re, !1),
        U === null)
      ) {
        const I = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (S.isWebGL1Renderer === !0 && I.shift(), (U = $e(I, M)), U === null)
        )
          throw $e(I)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      U instanceof WebGLRenderingContext &&
        console.warn(
          "THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."
        ),
        U.getShaderPrecisionFormat === void 0 &&
          (U.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
    } catch (M) {
      throw (console.error("THREE.WebGLRenderer: " + M.message), M);
    }
    let ve,
      we,
      xe,
      Ve,
      De,
      be,
      Ge,
      Je,
      nt,
      E,
      g,
      V,
      ie,
      ne,
      b,
      j,
      Q,
      z,
      de,
      _e,
      pe,
      fe,
      ue,
      Ee;
    function Oe() {
      (ve = new Oh(U)),
        (we = new Ph(U, ve, e)),
        ve.init(we),
        (fe = new Mf(U, ve, we)),
        (xe = new vf(U, ve, we)),
        (Ve = new Gh(U)),
        (De = new rf()),
        (be = new xf(U, ve, xe, De, we, fe, Ve)),
        (Ge = new Dh(S)),
        (Je = new Fh(S)),
        (nt = new Jl(U, we)),
        (ue = new Ch(U, ve, nt, we)),
        (E = new Bh(U, nt, Ve, ue)),
        (g = new Wh(U, E, nt, Ve)),
        (de = new kh(U, we, be)),
        (j = new Uh(De)),
        (V = new nf(S, Ge, Je, ve, we, ue, j)),
        (ie = new bf(S, De)),
        (ne = new af()),
        (b = new df(ve, we)),
        (z = new Rh(S, Ge, Je, xe, g, f, l)),
        (Q = new gf(S, g, we)),
        (Ee = new Af(U, Ve, we, xe)),
        (_e = new Lh(U, ve, Ve, we)),
        (pe = new zh(U, ve, Ve, we)),
        (Ve.programs = V.programs),
        (S.capabilities = we),
        (S.extensions = ve),
        (S.properties = De),
        (S.renderLists = ne),
        (S.shadowMap = Q),
        (S.state = xe),
        (S.info = Ve);
    }
    Oe();
    const R = new Tf(S, U);
    (this.xr = R),
      (this.getContext = function () {
        return U;
      }),
      (this.getContextAttributes = function () {
        return U.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const M = ve.get("WEBGL_lose_context");
        M && M.loseContext();
      }),
      (this.forceContextRestore = function () {
        const M = ve.get("WEBGL_lose_context");
        M && M.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return X;
      }),
      (this.setPixelRatio = function (M) {
        M !== void 0 && ((X = M), this.setSize(H, Z, !1));
      }),
      (this.getSize = function (M) {
        return M.set(H, Z);
      }),
      (this.setSize = function (M, I, k = !0) {
        if (R.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (H = M),
          (Z = I),
          (t.width = Math.floor(M * X)),
          (t.height = Math.floor(I * X)),
          k === !0 && ((t.style.width = M + "px"), (t.style.height = I + "px")),
          this.setViewport(0, 0, M, I);
      }),
      (this.getDrawingBufferSize = function (M) {
        return M.set(H * X, Z * X).floor();
      }),
      (this.setDrawingBufferSize = function (M, I, k) {
        (H = M),
          (Z = I),
          (X = k),
          (t.width = Math.floor(M * k)),
          (t.height = Math.floor(I * k)),
          this.setViewport(0, 0, M, I);
      }),
      (this.getCurrentViewport = function (M) {
        return M.copy(w);
      }),
      (this.getViewport = function (M) {
        return M.copy(K);
      }),
      (this.setViewport = function (M, I, k, P) {
        M.isVector4 ? K.set(M.x, M.y, M.z, M.w) : K.set(M, I, k, P),
          xe.viewport(w.copy(K).multiplyScalar(X).floor());
      }),
      (this.getScissor = function (M) {
        return M.copy(me);
      }),
      (this.setScissor = function (M, I, k, P) {
        M.isVector4 ? me.set(M.x, M.y, M.z, M.w) : me.set(M, I, k, P),
          xe.scissor(q.copy(me).multiplyScalar(X).floor());
      }),
      (this.getScissorTest = function () {
        return N;
      }),
      (this.setScissorTest = function (M) {
        xe.setScissorTest((N = M));
      }),
      (this.setOpaqueSort = function (M) {
        Y = M;
      }),
      (this.setTransparentSort = function (M) {
        te = M;
      }),
      (this.getClearColor = function (M) {
        return M.copy(z.getClearColor());
      }),
      (this.setClearColor = function () {
        z.setClearColor.apply(z, arguments);
      }),
      (this.getClearAlpha = function () {
        return z.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        z.setClearAlpha.apply(z, arguments);
      }),
      (this.clear = function (M = !0, I = !0, k = !0) {
        let P = 0;
        if (M) {
          let W = !1;
          if (L !== null) {
            const he = L.texture.format;
            W = he === Pa || he === La || he === Ca;
          }
          if (W) {
            const he = L.texture.type,
              Me =
                he === tn ||
                he === Jt ||
                he === Or ||
                he === mn ||
                he === wa ||
                he === Ra,
              ye = z.getClearColor(),
              Te = z.getClearAlpha(),
              Fe = ye.r,
              Ae = ye.g,
              Re = ye.b,
              ke = De.get(L).__webglFramebuffer;
            Me
              ? ((m[0] = Fe),
                (m[1] = Ae),
                (m[2] = Re),
                (m[3] = Te),
                U.clearBufferuiv(U.COLOR, ke, m))
              : ((v[0] = Fe),
                (v[1] = Ae),
                (v[2] = Re),
                (v[3] = Te),
                U.clearBufferiv(U.COLOR, ke, v));
          } else P |= U.COLOR_BUFFER_BIT;
        }
        I && (P |= U.DEPTH_BUFFER_BIT),
          k && (P |= U.STENCIL_BUFFER_BIT),
          U.clear(P);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", ae, !1),
          t.removeEventListener("webglcontextrestored", O, !1),
          t.removeEventListener("webglcontextcreationerror", re, !1),
          ne.dispose(),
          b.dispose(),
          De.dispose(),
          Ge.dispose(),
          Je.dispose(),
          g.dispose(),
          ue.dispose(),
          Ee.dispose(),
          V.dispose(),
          R.dispose(),
          R.removeEventListener("sessionstart", Xe),
          R.removeEventListener("sessionend", Pt),
          ce && (ce.dispose(), (ce = null)),
          ut.stop();
      });
    function ae(M) {
      M.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (T = !0);
    }
    function O() {
      console.log("THREE.WebGLRenderer: Context Restored."), (T = !1);
      const M = Ve.autoReset,
        I = Q.enabled,
        k = Q.autoUpdate,
        P = Q.needsUpdate,
        W = Q.type;
      Oe(),
        (Ve.autoReset = M),
        (Q.enabled = I),
        (Q.autoUpdate = k),
        (Q.needsUpdate = P),
        (Q.type = W);
    }
    function re(M) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        M.statusMessage
      );
    }
    function oe(M) {
      const I = M.target;
      I.removeEventListener("dispose", oe), ze(I);
    }
    function ze(M) {
      We(M), De.remove(M);
    }
    function We(M) {
      const I = De.get(M).programs;
      I !== void 0 &&
        (I.forEach(function (k) {
          V.releaseProgram(k);
        }),
        M.isShaderMaterial && V.releaseShaderCache(M));
    }
    (this.renderBufferDirect = function (M, I, k, P, W, he) {
      I === null && (I = Ye);
      const Me = W.isMesh && W.matrixWorld.determinant() < 0,
        ye = oo(M, I, k, P, W);
      xe.setMaterial(P, Me);
      let Te = k.index,
        Fe = 1;
      P.wireframe === !0 && ((Te = E.getWireframeAttribute(k)), (Fe = 2));
      const Ae = k.drawRange,
        Re = k.attributes.position;
      let ke = Ae.start * Fe,
        qe = (Ae.start + Ae.count) * Fe;
      he !== null &&
        ((ke = Math.max(ke, he.start * Fe)),
        (qe = Math.min(qe, (he.start + he.count) * Fe))),
        Te !== null
          ? ((ke = Math.max(ke, 0)), (qe = Math.min(qe, Te.count)))
          : Re != null &&
            ((ke = Math.max(ke, 0)), (qe = Math.min(qe, Re.count)));
      const yt = qe - ke;
      if (yt < 0 || yt === 1 / 0) return;
      ue.setup(W, P, ye, k, Te);
      let Ot,
        Ke = _e;
      if (
        (Te !== null && ((Ot = nt.get(Te)), (Ke = pe), Ke.setIndex(Ot)),
        W.isMesh)
      )
        P.wireframe === !0
          ? (xe.setLineWidth(P.wireframeLinewidth * Ne()), Ke.setMode(U.LINES))
          : Ke.setMode(U.TRIANGLES);
      else if (W.isLine) {
        let Be = P.linewidth;
        Be === void 0 && (Be = 1),
          xe.setLineWidth(Be * Ne()),
          W.isLineSegments
            ? Ke.setMode(U.LINES)
            : W.isLineLoop
            ? Ke.setMode(U.LINE_LOOP)
            : Ke.setMode(U.LINE_STRIP);
      } else
        W.isPoints
          ? Ke.setMode(U.POINTS)
          : W.isSprite && Ke.setMode(U.TRIANGLES);
      if (W.isInstancedMesh) Ke.renderInstances(ke, yt, W.count);
      else if (k.isInstancedBufferGeometry) {
        const Be = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0,
          qi = Math.min(k.instanceCount, Be);
        Ke.renderInstances(ke, yt, qi);
      } else Ke.render(ke, yt);
    }),
      (this.compile = function (M, I) {
        function k(P, W, he) {
          P.transparent === !0 && P.side === Xt && P.forceSinglePass === !1
            ? ((P.side = mt),
              (P.needsUpdate = !0),
              gi(P, W, he),
              (P.side = nn),
              (P.needsUpdate = !0),
              gi(P, W, he),
              (P.side = Xt))
            : gi(P, W, he);
        }
        (p = b.get(M)),
          p.init(),
          A.push(p),
          M.traverseVisible(function (P) {
            P.isLight &&
              P.layers.test(I.layers) &&
              (p.pushLight(P), P.castShadow && p.pushShadow(P));
          }),
          p.setupLights(S.useLegacyLights),
          M.traverse(function (P) {
            const W = P.material;
            if (W)
              if (Array.isArray(W))
                for (let he = 0; he < W.length; he++) {
                  const Me = W[he];
                  k(Me, M, P);
                }
              else k(W, M, P);
          }),
          A.pop(),
          (p = null);
      });
    let je = null;
    function sn(M) {
      je && je(M);
    }
    function Xe() {
      ut.stop();
    }
    function Pt() {
      ut.start();
    }
    const ut = new qa();
    ut.setAnimationLoop(sn),
      typeof self < "u" && ut.setContext(self),
      (this.setAnimationLoop = function (M) {
        (je = M), R.setAnimationLoop(M), M === null ? ut.stop() : ut.start();
      }),
      R.addEventListener("sessionstart", Xe),
      R.addEventListener("sessionend", Pt),
      (this.render = function (M, I) {
        if (I !== void 0 && I.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (T === !0) return;
        M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(),
          I.parent === null &&
            I.matrixWorldAutoUpdate === !0 &&
            I.updateMatrixWorld(),
          R.enabled === !0 &&
            R.isPresenting === !0 &&
            (I = R.updateCameraXR(I)),
          M.isScene === !0 && M.onBeforeRender(S, M, I, L),
          (p = b.get(M, A.length)),
          p.init(),
          A.push(p),
          ge.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse),
          $.setFromProjectionMatrix(ge),
          (le = this.localClippingEnabled),
          (J = j.init(this.clippingPlanes, le)),
          (_ = ne.get(M, h.length)),
          _.init(),
          h.push(_),
          Yr(M, I, 0, S.sortObjects),
          _.finish(),
          S.sortObjects === !0 && _.sort(Y, te),
          J === !0 && j.beginShadows();
        const k = p.state.shadowsArray;
        if (
          (Q.render(k, M, I),
          J === !0 && j.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          this.info.render.frame++,
          z.render(_, M),
          p.setupLights(S.useLegacyLights),
          I.isArrayCamera)
        ) {
          const P = I.cameras;
          for (let W = 0, he = P.length; W < he; W++) {
            const Me = P[W];
            qr(_, M, Me, Me.viewport);
          }
        } else qr(_, M, I);
        L !== null &&
          (be.updateMultisampleRenderTarget(L), be.updateRenderTargetMipmap(L)),
          M.isScene === !0 && M.onAfterRender(S, M, I),
          ue.resetDefaultState(),
          (B = -1),
          (x = null),
          A.pop(),
          A.length > 0 ? (p = A[A.length - 1]) : (p = null),
          h.pop(),
          h.length > 0 ? (_ = h[h.length - 1]) : (_ = null);
      });
    function Yr(M, I, k, P) {
      if (M.visible === !1) return;
      if (M.layers.test(I.layers)) {
        if (M.isGroup) k = M.renderOrder;
        else if (M.isLOD) M.autoUpdate === !0 && M.update(I);
        else if (M.isLight) p.pushLight(M), M.castShadow && p.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || $.intersectsSprite(M)) {
            P && Se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);
            const Me = g.update(M),
              ye = M.material;
            ye.visible && _.push(M, Me, ye, k, Se.z, null);
          }
        } else if (
          (M.isMesh || M.isLine || M.isPoints) &&
          (!M.frustumCulled || $.intersectsObject(M))
        ) {
          M.isSkinnedMesh &&
            M.skeleton.frame !== Ve.render.frame &&
            (M.skeleton.update(), (M.skeleton.frame = Ve.render.frame));
          const Me = g.update(M),
            ye = M.material;
          if (
            (P &&
              (M.boundingSphere !== void 0
                ? (M.boundingSphere === null && M.computeBoundingSphere(),
                  Se.copy(M.boundingSphere.center))
                : (Me.boundingSphere === null && Me.computeBoundingSphere(),
                  Se.copy(Me.boundingSphere.center)),
              Se.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),
            Array.isArray(ye))
          ) {
            const Te = Me.groups;
            for (let Fe = 0, Ae = Te.length; Fe < Ae; Fe++) {
              const Re = Te[Fe],
                ke = ye[Re.materialIndex];
              ke && ke.visible && _.push(M, Me, ke, k, Se.z, Re);
            }
          } else ye.visible && _.push(M, Me, ye, k, Se.z, null);
        }
      }
      const he = M.children;
      for (let Me = 0, ye = he.length; Me < ye; Me++) Yr(he[Me], I, k, P);
    }
    function qr(M, I, k, P) {
      const W = M.opaque,
        he = M.transmissive,
        Me = M.transparent;
      p.setupLightsView(k),
        J === !0 && j.setGlobalState(S.clippingPlanes, k),
        he.length > 0 && ao(W, he, I, k),
        P && xe.viewport(w.copy(P)),
        W.length > 0 && _i(W, I, k),
        he.length > 0 && _i(he, I, k),
        Me.length > 0 && _i(Me, I, k),
        xe.buffers.depth.setTest(!0),
        xe.buffers.depth.setMask(!0),
        xe.buffers.color.setMask(!0),
        xe.setPolygonOffset(!1);
    }
    function ao(M, I, k, P) {
      const W = we.isWebGL2;
      ce === null &&
        (ce = new xn(1, 1, {
          generateMipmaps: !0,
          type: ve.has("EXT_color_buffer_half_float") ? li : tn,
          minFilter: oi,
          samples: W && a === !0 ? 4 : 0,
        })),
        S.getDrawingBufferSize(Pe),
        W ? ce.setSize(Pe.x, Pe.y) : ce.setSize(Hi(Pe.x), Hi(Pe.y));
      const he = S.getRenderTarget();
      S.setRenderTarget(ce),
        S.getClearColor(F),
        (G = S.getClearAlpha()),
        G < 1 && S.setClearColor(16777215, 0.5),
        S.clear();
      const Me = S.toneMapping;
      (S.toneMapping = qt),
        _i(M, k, P),
        be.updateMultisampleRenderTarget(ce),
        be.updateRenderTargetMipmap(ce);
      let ye = !1;
      for (let Te = 0, Fe = I.length; Te < Fe; Te++) {
        const Ae = I[Te],
          Re = Ae.object,
          ke = Ae.geometry,
          qe = Ae.material,
          yt = Ae.group;
        if (qe.side === Xt && Re.layers.test(P.layers)) {
          const Ot = qe.side;
          (qe.side = mt),
            (qe.needsUpdate = !0),
            jr(Re, k, P, ke, qe, yt),
            (qe.side = Ot),
            (qe.needsUpdate = !0),
            (ye = !0);
        }
      }
      ye === !0 &&
        (be.updateMultisampleRenderTarget(ce), be.updateRenderTargetMipmap(ce)),
        S.setRenderTarget(he),
        S.setClearColor(F, G),
        (S.toneMapping = Me);
    }
    function _i(M, I, k) {
      const P = I.isScene === !0 ? I.overrideMaterial : null;
      for (let W = 0, he = M.length; W < he; W++) {
        const Me = M[W],
          ye = Me.object,
          Te = Me.geometry,
          Fe = P === null ? Me.material : P,
          Ae = Me.group;
        ye.layers.test(k.layers) && jr(ye, I, k, Te, Fe, Ae);
      }
    }
    function jr(M, I, k, P, W, he) {
      M.onBeforeRender(S, I, k, P, W, he),
        M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, M.matrixWorld),
        M.normalMatrix.getNormalMatrix(M.modelViewMatrix),
        W.onBeforeRender(S, I, k, P, M, he),
        W.transparent === !0 && W.side === Xt && W.forceSinglePass === !1
          ? ((W.side = mt),
            (W.needsUpdate = !0),
            S.renderBufferDirect(k, I, P, W, M, he),
            (W.side = nn),
            (W.needsUpdate = !0),
            S.renderBufferDirect(k, I, P, W, M, he),
            (W.side = Xt))
          : S.renderBufferDirect(k, I, P, W, M, he),
        M.onAfterRender(S, I, k, P, W, he);
    }
    function gi(M, I, k) {
      I.isScene !== !0 && (I = Ye);
      const P = De.get(M),
        W = p.state.lights,
        he = p.state.shadowsArray,
        Me = W.state.version,
        ye = V.getParameters(M, W.state, he, I, k),
        Te = V.getProgramCacheKey(ye);
      let Fe = P.programs;
      (P.environment = M.isMeshStandardMaterial ? I.environment : null),
        (P.fog = I.fog),
        (P.envMap = (M.isMeshStandardMaterial ? Je : Ge).get(
          M.envMap || P.environment
        )),
        Fe === void 0 &&
          (M.addEventListener("dispose", oe),
          (Fe = new Map()),
          (P.programs = Fe));
      let Ae = Fe.get(Te);
      if (Ae !== void 0) {
        if (P.currentProgram === Ae && P.lightsStateVersion === Me)
          return Kr(M, ye), Ae;
      } else
        (ye.uniforms = V.getUniforms(M)),
          M.onBuild(k, ye, S),
          M.onBeforeCompile(ye, S),
          (Ae = V.acquireProgram(ye, Te)),
          Fe.set(Te, Ae),
          (P.uniforms = ye.uniforms);
      const Re = P.uniforms;
      ((!M.isShaderMaterial && !M.isRawShaderMaterial) || M.clipping === !0) &&
        (Re.clippingPlanes = j.uniform),
        Kr(M, ye),
        (P.needsLights = co(M)),
        (P.lightsStateVersion = Me),
        P.needsLights &&
          ((Re.ambientLightColor.value = W.state.ambient),
          (Re.lightProbe.value = W.state.probe),
          (Re.directionalLights.value = W.state.directional),
          (Re.directionalLightShadows.value = W.state.directionalShadow),
          (Re.spotLights.value = W.state.spot),
          (Re.spotLightShadows.value = W.state.spotShadow),
          (Re.rectAreaLights.value = W.state.rectArea),
          (Re.ltc_1.value = W.state.rectAreaLTC1),
          (Re.ltc_2.value = W.state.rectAreaLTC2),
          (Re.pointLights.value = W.state.point),
          (Re.pointLightShadows.value = W.state.pointShadow),
          (Re.hemisphereLights.value = W.state.hemi),
          (Re.directionalShadowMap.value = W.state.directionalShadowMap),
          (Re.directionalShadowMatrix.value = W.state.directionalShadowMatrix),
          (Re.spotShadowMap.value = W.state.spotShadowMap),
          (Re.spotLightMatrix.value = W.state.spotLightMatrix),
          (Re.spotLightMap.value = W.state.spotLightMap),
          (Re.pointShadowMap.value = W.state.pointShadowMap),
          (Re.pointShadowMatrix.value = W.state.pointShadowMatrix));
      const ke = Ae.getUniforms(),
        qe = zi.seqWithValue(ke.seq, Re);
      return (P.currentProgram = Ae), (P.uniformsList = qe), Ae;
    }
    function Kr(M, I) {
      const k = De.get(M);
      (k.outputColorSpace = I.outputColorSpace),
        (k.instancing = I.instancing),
        (k.skinning = I.skinning),
        (k.morphTargets = I.morphTargets),
        (k.morphNormals = I.morphNormals),
        (k.morphColors = I.morphColors),
        (k.morphTargetsCount = I.morphTargetsCount),
        (k.numClippingPlanes = I.numClippingPlanes),
        (k.numIntersection = I.numClipIntersection),
        (k.vertexAlphas = I.vertexAlphas),
        (k.vertexTangents = I.vertexTangents),
        (k.toneMapping = I.toneMapping);
    }
    function oo(M, I, k, P, W) {
      I.isScene !== !0 && (I = Ye), be.resetTextureUnits();
      const he = I.fog,
        Me = P.isMeshStandardMaterial ? I.environment : null,
        ye =
          L === null
            ? S.outputColorSpace
            : L.isXRRenderTarget === !0
            ? L.texture.colorSpace
            : Ft,
        Te = (P.isMeshStandardMaterial ? Je : Ge).get(P.envMap || Me),
        Fe =
          P.vertexColors === !0 &&
          !!k.attributes.color &&
          k.attributes.color.itemSize === 4,
        Ae = !!k.attributes.tangent && (!!P.normalMap || P.anisotropy > 0),
        Re = !!k.morphAttributes.position,
        ke = !!k.morphAttributes.normal,
        qe = !!k.morphAttributes.color,
        yt = P.toneMapped ? S.toneMapping : qt,
        Ot =
          k.morphAttributes.position ||
          k.morphAttributes.normal ||
          k.morphAttributes.color,
        Ke = Ot !== void 0 ? Ot.length : 0,
        Be = De.get(P),
        qi = p.state.lights;
      if (J === !0 && (le === !0 || M !== x)) {
        const gt = M === x && P.id === B;
        j.setState(P, M, gt);
      }
      let it = !1;
      P.version === Be.__version
        ? ((Be.needsLights && Be.lightsStateVersion !== qi.state.version) ||
            Be.outputColorSpace !== ye ||
            (W.isInstancedMesh && Be.instancing === !1) ||
            (!W.isInstancedMesh && Be.instancing === !0) ||
            (W.isSkinnedMesh && Be.skinning === !1) ||
            (!W.isSkinnedMesh && Be.skinning === !0) ||
            Be.envMap !== Te ||
            (P.fog === !0 && Be.fog !== he) ||
            (Be.numClippingPlanes !== void 0 &&
              (Be.numClippingPlanes !== j.numPlanes ||
                Be.numIntersection !== j.numIntersection)) ||
            Be.vertexAlphas !== Fe ||
            Be.vertexTangents !== Ae ||
            Be.morphTargets !== Re ||
            Be.morphNormals !== ke ||
            Be.morphColors !== qe ||
            Be.toneMapping !== yt ||
            (we.isWebGL2 === !0 && Be.morphTargetsCount !== Ke)) &&
          (it = !0)
        : ((it = !0), (Be.__version = P.version));
      let an = Be.currentProgram;
      it === !0 && (an = gi(P, I, W));
      let Zr = !1,
        $n = !1,
        ji = !1;
      const ht = an.getUniforms(),
        on = Be.uniforms;
      if (
        (xe.useProgram(an.program) && ((Zr = !0), ($n = !0), (ji = !0)),
        P.id !== B && ((B = P.id), ($n = !0)),
        Zr || x !== M)
      ) {
        if (
          (ht.setValue(U, "projectionMatrix", M.projectionMatrix),
          we.logarithmicDepthBuffer &&
            ht.setValue(
              U,
              "logDepthBufFC",
              2 / (Math.log(M.far + 1) / Math.LN2)
            ),
          x !== M && ((x = M), ($n = !0), (ji = !0)),
          P.isShaderMaterial ||
            P.isMeshPhongMaterial ||
            P.isMeshToonMaterial ||
            P.isMeshStandardMaterial ||
            P.envMap)
        ) {
          const gt = ht.map.cameraPosition;
          gt !== void 0 &&
            gt.setValue(U, Se.setFromMatrixPosition(M.matrixWorld));
        }
        (P.isMeshPhongMaterial ||
          P.isMeshToonMaterial ||
          P.isMeshLambertMaterial ||
          P.isMeshBasicMaterial ||
          P.isMeshStandardMaterial ||
          P.isShaderMaterial) &&
          ht.setValue(U, "isOrthographic", M.isOrthographicCamera === !0),
          (P.isMeshPhongMaterial ||
            P.isMeshToonMaterial ||
            P.isMeshLambertMaterial ||
            P.isMeshBasicMaterial ||
            P.isMeshStandardMaterial ||
            P.isShaderMaterial ||
            P.isShadowMaterial ||
            W.isSkinnedMesh) &&
            ht.setValue(U, "viewMatrix", M.matrixWorldInverse);
      }
      if (W.isSkinnedMesh) {
        ht.setOptional(U, W, "bindMatrix"),
          ht.setOptional(U, W, "bindMatrixInverse");
        const gt = W.skeleton;
        gt &&
          (we.floatVertexTextures
            ? (gt.boneTexture === null && gt.computeBoneTexture(),
              ht.setValue(U, "boneTexture", gt.boneTexture, be),
              ht.setValue(U, "boneTextureSize", gt.boneTextureSize))
            : console.warn(
                "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
              ));
      }
      const Ki = k.morphAttributes;
      if (
        ((Ki.position !== void 0 ||
          Ki.normal !== void 0 ||
          (Ki.color !== void 0 && we.isWebGL2 === !0)) &&
          de.update(W, k, an),
        ($n || Be.receiveShadow !== W.receiveShadow) &&
          ((Be.receiveShadow = W.receiveShadow),
          ht.setValue(U, "receiveShadow", W.receiveShadow)),
        P.isMeshGouraudMaterial &&
          P.envMap !== null &&
          ((on.envMap.value = Te),
          (on.flipEnvMap.value =
            Te.isCubeTexture && Te.isRenderTargetTexture === !1 ? -1 : 1)),
        $n &&
          (ht.setValue(U, "toneMappingExposure", S.toneMappingExposure),
          Be.needsLights && lo(on, ji),
          he && P.fog === !0 && ie.refreshFogUniforms(on, he),
          ie.refreshMaterialUniforms(on, P, X, Z, ce),
          zi.upload(U, Be.uniformsList, on, be)),
        P.isShaderMaterial &&
          P.uniformsNeedUpdate === !0 &&
          (zi.upload(U, Be.uniformsList, on, be), (P.uniformsNeedUpdate = !1)),
        P.isSpriteMaterial && ht.setValue(U, "center", W.center),
        ht.setValue(U, "modelViewMatrix", W.modelViewMatrix),
        ht.setValue(U, "normalMatrix", W.normalMatrix),
        ht.setValue(U, "modelMatrix", W.matrixWorld),
        P.isShaderMaterial || P.isRawShaderMaterial)
      ) {
        const gt = P.uniformsGroups;
        for (let Zi = 0, uo = gt.length; Zi < uo; Zi++)
          if (we.isWebGL2) {
            const $r = gt[Zi];
            Ee.update($r, an), Ee.bind($r, an);
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
            );
      }
      return an;
    }
    function lo(M, I) {
      (M.ambientLightColor.needsUpdate = I),
        (M.lightProbe.needsUpdate = I),
        (M.directionalLights.needsUpdate = I),
        (M.directionalLightShadows.needsUpdate = I),
        (M.pointLights.needsUpdate = I),
        (M.pointLightShadows.needsUpdate = I),
        (M.spotLights.needsUpdate = I),
        (M.spotLightShadows.needsUpdate = I),
        (M.rectAreaLights.needsUpdate = I),
        (M.hemisphereLights.needsUpdate = I);
    }
    function co(M) {
      return (
        M.isMeshLambertMaterial ||
        M.isMeshToonMaterial ||
        M.isMeshPhongMaterial ||
        M.isMeshStandardMaterial ||
        M.isShadowMaterial ||
        (M.isShaderMaterial && M.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return y;
    }),
      (this.getActiveMipmapLevel = function () {
        return C;
      }),
      (this.getRenderTarget = function () {
        return L;
      }),
      (this.setRenderTargetTextures = function (M, I, k) {
        (De.get(M.texture).__webglTexture = I),
          (De.get(M.depthTexture).__webglTexture = k);
        const P = De.get(M);
        (P.__hasExternalTextures = !0),
          P.__hasExternalTextures &&
            ((P.__autoAllocateDepthBuffer = k === void 0),
            P.__autoAllocateDepthBuffer ||
              (ve.has("WEBGL_multisampled_render_to_texture") === !0 &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                ),
                (P.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (M, I) {
        const k = De.get(M);
        (k.__webglFramebuffer = I), (k.__useDefaultFramebuffer = I === void 0);
      }),
      (this.setRenderTarget = function (M, I = 0, k = 0) {
        (L = M), (y = I), (C = k);
        let P = !0,
          W = null,
          he = !1,
          Me = !1;
        if (M) {
          const Te = De.get(M);
          Te.__useDefaultFramebuffer !== void 0
            ? (xe.bindFramebuffer(U.FRAMEBUFFER, null), (P = !1))
            : Te.__webglFramebuffer === void 0
            ? be.setupRenderTarget(M)
            : Te.__hasExternalTextures &&
              be.rebindTextures(
                M,
                De.get(M.texture).__webglTexture,
                De.get(M.depthTexture).__webglTexture
              );
          const Fe = M.texture;
          (Fe.isData3DTexture ||
            Fe.isDataArrayTexture ||
            Fe.isCompressedArrayTexture) &&
            (Me = !0);
          const Ae = De.get(M).__webglFramebuffer;
          M.isWebGLCubeRenderTarget
            ? ((W = Ae[I]), (he = !0))
            : we.isWebGL2 && M.samples > 0 && be.useMultisampledRTT(M) === !1
            ? (W = De.get(M).__webglMultisampledFramebuffer)
            : (W = Ae),
            w.copy(M.viewport),
            q.copy(M.scissor),
            (ee = M.scissorTest);
        } else
          w.copy(K).multiplyScalar(X).floor(),
            q.copy(me).multiplyScalar(X).floor(),
            (ee = N);
        if (
          (xe.bindFramebuffer(U.FRAMEBUFFER, W) &&
            we.drawBuffers &&
            P &&
            xe.drawBuffers(M, W),
          xe.viewport(w),
          xe.scissor(q),
          xe.setScissorTest(ee),
          he)
        ) {
          const Te = De.get(M.texture);
          U.framebufferTexture2D(
            U.FRAMEBUFFER,
            U.COLOR_ATTACHMENT0,
            U.TEXTURE_CUBE_MAP_POSITIVE_X + I,
            Te.__webglTexture,
            k
          );
        } else if (Me) {
          const Te = De.get(M.texture),
            Fe = I || 0;
          U.framebufferTextureLayer(
            U.FRAMEBUFFER,
            U.COLOR_ATTACHMENT0,
            Te.__webglTexture,
            k || 0,
            Fe
          );
        }
        B = -1;
      }),
      (this.readRenderTargetPixels = function (M, I, k, P, W, he, Me) {
        if (!(M && M.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let ye = De.get(M).__webglFramebuffer;
        if ((M.isWebGLCubeRenderTarget && Me !== void 0 && (ye = ye[Me]), ye)) {
          xe.bindFramebuffer(U.FRAMEBUFFER, ye);
          try {
            const Te = M.texture,
              Fe = Te.format,
              Ae = Te.type;
            if (
              Fe !== Lt &&
              fe.convert(Fe) !==
                U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            const Re =
              Ae === li &&
              (ve.has("EXT_color_buffer_half_float") ||
                (we.isWebGL2 && ve.has("EXT_color_buffer_float")));
            if (
              Ae !== tn &&
              fe.convert(Ae) !==
                U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                Ae === Qt &&
                (we.isWebGL2 ||
                  ve.has("OES_texture_float") ||
                  ve.has("WEBGL_color_buffer_float"))
              ) &&
              !Re
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            I >= 0 &&
              I <= M.width - P &&
              k >= 0 &&
              k <= M.height - W &&
              U.readPixels(I, k, P, W, fe.convert(Fe), fe.convert(Ae), he);
          } finally {
            const Te = L !== null ? De.get(L).__webglFramebuffer : null;
            xe.bindFramebuffer(U.FRAMEBUFFER, Te);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (M, I, k = 0) {
        const P = Math.pow(2, -k),
          W = Math.floor(I.image.width * P),
          he = Math.floor(I.image.height * P);
        be.setTexture2D(I, 0),
          U.copyTexSubImage2D(U.TEXTURE_2D, k, 0, 0, M.x, M.y, W, he),
          xe.unbindTexture();
      }),
      (this.copyTextureToTexture = function (M, I, k, P = 0) {
        const W = I.image.width,
          he = I.image.height,
          Me = fe.convert(k.format),
          ye = fe.convert(k.type);
        be.setTexture2D(k, 0),
          U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, k.flipY),
          U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, k.premultiplyAlpha),
          U.pixelStorei(U.UNPACK_ALIGNMENT, k.unpackAlignment),
          I.isDataTexture
            ? U.texSubImage2D(
                U.TEXTURE_2D,
                P,
                M.x,
                M.y,
                W,
                he,
                Me,
                ye,
                I.image.data
              )
            : I.isCompressedTexture
            ? U.compressedTexSubImage2D(
                U.TEXTURE_2D,
                P,
                M.x,
                M.y,
                I.mipmaps[0].width,
                I.mipmaps[0].height,
                Me,
                I.mipmaps[0].data
              )
            : U.texSubImage2D(U.TEXTURE_2D, P, M.x, M.y, Me, ye, I.image),
          P === 0 && k.generateMipmaps && U.generateMipmap(U.TEXTURE_2D),
          xe.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (M, I, k, P, W = 0) {
        if (S.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
          return;
        }
        const he = M.max.x - M.min.x + 1,
          Me = M.max.y - M.min.y + 1,
          ye = M.max.z - M.min.z + 1,
          Te = fe.convert(P.format),
          Fe = fe.convert(P.type);
        let Ae;
        if (P.isData3DTexture) be.setTexture3D(P, 0), (Ae = U.TEXTURE_3D);
        else if (P.isDataArrayTexture)
          be.setTexture2DArray(P, 0), (Ae = U.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, P.flipY),
          U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, P.premultiplyAlpha),
          U.pixelStorei(U.UNPACK_ALIGNMENT, P.unpackAlignment);
        const Re = U.getParameter(U.UNPACK_ROW_LENGTH),
          ke = U.getParameter(U.UNPACK_IMAGE_HEIGHT),
          qe = U.getParameter(U.UNPACK_SKIP_PIXELS),
          yt = U.getParameter(U.UNPACK_SKIP_ROWS),
          Ot = U.getParameter(U.UNPACK_SKIP_IMAGES),
          Ke = k.isCompressedTexture ? k.mipmaps[0] : k.image;
        U.pixelStorei(U.UNPACK_ROW_LENGTH, Ke.width),
          U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, Ke.height),
          U.pixelStorei(U.UNPACK_SKIP_PIXELS, M.min.x),
          U.pixelStorei(U.UNPACK_SKIP_ROWS, M.min.y),
          U.pixelStorei(U.UNPACK_SKIP_IMAGES, M.min.z),
          k.isDataTexture || k.isData3DTexture
            ? U.texSubImage3D(Ae, W, I.x, I.y, I.z, he, Me, ye, Te, Fe, Ke.data)
            : k.isCompressedArrayTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ),
              U.compressedTexSubImage3D(
                Ae,
                W,
                I.x,
                I.y,
                I.z,
                he,
                Me,
                ye,
                Te,
                Ke.data
              ))
            : U.texSubImage3D(Ae, W, I.x, I.y, I.z, he, Me, ye, Te, Fe, Ke),
          U.pixelStorei(U.UNPACK_ROW_LENGTH, Re),
          U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, ke),
          U.pixelStorei(U.UNPACK_SKIP_PIXELS, qe),
          U.pixelStorei(U.UNPACK_SKIP_ROWS, yt),
          U.pixelStorei(U.UNPACK_SKIP_IMAGES, Ot),
          W === 0 && P.generateMipmaps && U.generateMipmap(Ae),
          xe.unbindTexture();
      }),
      (this.initTexture = function (M) {
        M.isCubeTexture
          ? be.setTextureCube(M, 0)
          : M.isData3DTexture
          ? be.setTexture3D(M, 0)
          : M.isDataArrayTexture || M.isCompressedArrayTexture
          ? be.setTexture2DArray(M, 0)
          : be.setTexture2D(M, 0),
          xe.unbindTexture();
      }),
      (this.resetState = function () {
        (y = 0), (C = 0), (L = null), xe.reset(), ue.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return Yt;
  }
  get physicallyCorrectLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
      !this.useLegacyLights
    );
  }
  set physicallyCorrectLights(e) {
    console.warn(
      "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
    ),
      (this.useLegacyLights = !e);
  }
  get outputEncoding() {
    return (
      console.warn(
        "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
      ),
      this.outputColorSpace === Ce ? gn : Ua
    );
  }
  set outputEncoding(e) {
    console.warn(
      "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
    ),
      (this.outputColorSpace = e === gn ? Ce : Ft);
  }
}
class Rf extends Qa {}
Rf.prototype.isWebGL1Renderer = !0;
class Cf extends ct {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
class Xi extends rn {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    r = 0,
    s = Math.PI * 2,
    o = 0,
    a = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: r,
        phiLength: s,
        thetaStart: o,
        thetaLength: a,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const u = [],
      d = new D(),
      f = new D(),
      m = [],
      v = [],
      _ = [],
      p = [];
    for (let h = 0; h <= n; h++) {
      const A = [],
        S = h / n;
      let T = 0;
      h === 0 && o === 0
        ? (T = 0.5 / t)
        : h === n && l === Math.PI && (T = -0.5 / t);
      for (let y = 0; y <= t; y++) {
        const C = y / t;
        (d.x = -e * Math.cos(r + C * s) * Math.sin(o + S * a)),
          (d.y = e * Math.cos(o + S * a)),
          (d.z = e * Math.sin(r + C * s) * Math.sin(o + S * a)),
          v.push(d.x, d.y, d.z),
          f.copy(d).normalize(),
          _.push(f.x, f.y, f.z),
          p.push(C + T, 1 - S),
          A.push(c++);
      }
      u.push(A);
    }
    for (let h = 0; h < n; h++)
      for (let A = 0; A < t; A++) {
        const S = u[h][A + 1],
          T = u[h][A],
          y = u[h + 1][A],
          C = u[h + 1][A + 1];
        (h !== 0 || o > 0) && m.push(S, T, C),
          (h !== n - 1 || l < Math.PI) && m.push(T, y, C);
      }
    this.setIndex(m),
      this.setAttribute("position", new Nt(v, 3)),
      this.setAttribute("normal", new Nt(_, 3)),
      this.setAttribute("uv", new Nt(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Xi(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class eo extends di {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new He(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new He(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Da),
      (this.normalScale = new Le(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
const pa = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
class Lf {
  constructor(e, t, n) {
    const r = this;
    let s = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), (s = !0);
      }),
      (this.itemEnd = function (u) {
        o++,
          r.onProgress !== void 0 && r.onProgress(u, o, a),
          o === a && ((s = !1), r.onLoad !== void 0 && r.onLoad());
      }),
      (this.itemError = function (u) {
        r.onError !== void 0 && r.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, d) {
        return c.push(u, d), this;
      }),
      (this.removeHandler = function (u) {
        const d = c.indexOf(u);
        return d !== -1 && c.splice(d, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let d = 0, f = c.length; d < f; d += 2) {
          const m = c[d],
            v = c[d + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return v;
        }
        return null;
      });
  }
}
const Pf = new Lf();
class to {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Pf),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
class Uf extends to {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      o = pa.get(e);
    if (o !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), s.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = ui("img");
    function l() {
      u(), pa.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(d) {
      u(), r && r(d), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1),
        a.removeEventListener("error", c, !1);
    }
    return (
      a.addEventListener("load", l, !1),
      a.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class kr extends to {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new _t(),
      o = new Uf(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        r
      ),
      s
    );
  }
}
class Df extends ct {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new He(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const br = new Qe(),
  ma = new D(),
  _a = new D();
class If {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Le(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Qe()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Gr()),
      (this._frameExtents = new Le(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new st(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    ma.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(ma),
      _a.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(_a),
      t.updateMatrixWorld(),
      br.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(br),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(br);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class Nf extends If {
  constructor() {
    super(new ja(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class Ff extends Df {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(ct.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new ct()),
      (this.shadow = new Nf());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class ga {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(lt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Fr } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Fr));
const va = { type: "change" },
  Ar = { type: "start" },
  xa = { type: "end" };
class Of extends En {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new D()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: yn.ROTATE,
        MIDDLE: yn.DOLLY,
        RIGHT: yn.PAN,
      }),
      (this.touches = { ONE: Tn.ROTATE, TWO: Tn.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return a.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return a.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (b) {
        b.addEventListener("keydown", Ge), (this._domElementKeyEvents = b);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", Ge),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(va),
          n.update(),
          (s = r.NONE);
      }),
      (this.update = (function () {
        const b = new D(),
          j = new Mn().setFromUnitVectors(e.up, new D(0, 1, 0)),
          Q = j.clone().invert(),
          z = new D(),
          de = new Mn(),
          _e = new D(),
          pe = 2 * Math.PI;
        return function () {
          const ue = n.object.position;
          b.copy(ue).sub(n.target),
            b.applyQuaternion(j),
            a.setFromVector3(b),
            n.autoRotate && s === r.NONE && x(L()),
            n.enableDamping
              ? ((a.theta += l.theta * n.dampingFactor),
                (a.phi += l.phi * n.dampingFactor))
              : ((a.theta += l.theta), (a.phi += l.phi));
          let Ee = n.minAzimuthAngle,
            Oe = n.maxAzimuthAngle;
          return (
            isFinite(Ee) &&
              isFinite(Oe) &&
              (Ee < -Math.PI ? (Ee += pe) : Ee > Math.PI && (Ee -= pe),
              Oe < -Math.PI ? (Oe += pe) : Oe > Math.PI && (Oe -= pe),
              Ee <= Oe
                ? (a.theta = Math.max(Ee, Math.min(Oe, a.theta)))
                : (a.theta =
                    a.theta > (Ee + Oe) / 2
                      ? Math.max(Ee, a.theta)
                      : Math.min(Oe, a.theta))),
            (a.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, a.phi)
            )),
            a.makeSafe(),
            (a.radius *= c),
            (a.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, a.radius)
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            b.setFromSpherical(a),
            b.applyQuaternion(Q),
            ue.copy(n.target).add(b),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), u.set(0, 0, 0)),
            (c = 1),
            d ||
            z.distanceToSquared(n.object.position) > o ||
            8 * (1 - de.dot(n.object.quaternion)) > o ||
            _e.distanceToSquared(n.target) > 0
              ? (n.dispatchEvent(va),
                z.copy(n.object.position),
                de.copy(n.object.quaternion),
                _e.copy(n.target),
                (d = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", E),
          n.domElement.removeEventListener("pointerdown", ve),
          n.domElement.removeEventListener("pointercancel", xe),
          n.domElement.removeEventListener("wheel", be),
          n.domElement.removeEventListener("pointermove", we),
          n.domElement.removeEventListener("pointerup", xe),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", Ge),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      r = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = r.NONE;
    const o = 1e-6,
      a = new ga(),
      l = new ga();
    let c = 1;
    const u = new D();
    let d = !1;
    const f = new Le(),
      m = new Le(),
      v = new Le(),
      _ = new Le(),
      p = new Le(),
      h = new Le(),
      A = new Le(),
      S = new Le(),
      T = new Le(),
      y = [],
      C = {};
    function L() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function B() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function x(b) {
      l.theta -= b;
    }
    function w(b) {
      l.phi -= b;
    }
    const q = (function () {
        const b = new D();
        return function (Q, z) {
          b.setFromMatrixColumn(z, 0), b.multiplyScalar(-Q), u.add(b);
        };
      })(),
      ee = (function () {
        const b = new D();
        return function (Q, z) {
          n.screenSpacePanning === !0
            ? b.setFromMatrixColumn(z, 1)
            : (b.setFromMatrixColumn(z, 0), b.crossVectors(n.object.up, b)),
            b.multiplyScalar(Q),
            u.add(b);
        };
      })(),
      F = (function () {
        const b = new D();
        return function (Q, z) {
          const de = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const _e = n.object.position;
            b.copy(_e).sub(n.target);
            let pe = b.length();
            (pe *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              q((2 * Q * pe) / de.clientHeight, n.object.matrix),
              ee((2 * z * pe) / de.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (q(
                  (Q * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    de.clientWidth,
                  n.object.matrix
                ),
                ee(
                  (z * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    de.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function G(b) {
      n.object.isPerspectiveCamera
        ? (c /= b)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * b)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function H(b) {
      n.object.isPerspectiveCamera
        ? (c *= b)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / b)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function Z(b) {
      f.set(b.clientX, b.clientY);
    }
    function X(b) {
      A.set(b.clientX, b.clientY);
    }
    function Y(b) {
      _.set(b.clientX, b.clientY);
    }
    function te(b) {
      m.set(b.clientX, b.clientY),
        v.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const j = n.domElement;
      x((2 * Math.PI * v.x) / j.clientHeight),
        w((2 * Math.PI * v.y) / j.clientHeight),
        f.copy(m),
        n.update();
    }
    function K(b) {
      S.set(b.clientX, b.clientY),
        T.subVectors(S, A),
        T.y > 0 ? G(B()) : T.y < 0 && H(B()),
        A.copy(S),
        n.update();
    }
    function me(b) {
      p.set(b.clientX, b.clientY),
        h.subVectors(p, _).multiplyScalar(n.panSpeed),
        F(h.x, h.y),
        _.copy(p),
        n.update();
    }
    function N(b) {
      b.deltaY < 0 ? H(B()) : b.deltaY > 0 && G(B()), n.update();
    }
    function $(b) {
      let j = !1;
      switch (b.code) {
        case n.keys.UP:
          b.ctrlKey || b.metaKey || b.shiftKey
            ? w((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(0, n.keyPanSpeed),
            (j = !0);
          break;
        case n.keys.BOTTOM:
          b.ctrlKey || b.metaKey || b.shiftKey
            ? w((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(0, -n.keyPanSpeed),
            (j = !0);
          break;
        case n.keys.LEFT:
          b.ctrlKey || b.metaKey || b.shiftKey
            ? x((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(n.keyPanSpeed, 0),
            (j = !0);
          break;
        case n.keys.RIGHT:
          b.ctrlKey || b.metaKey || b.shiftKey
            ? x((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(-n.keyPanSpeed, 0),
            (j = !0);
          break;
      }
      j && (b.preventDefault(), n.update());
    }
    function J() {
      if (y.length === 1) f.set(y[0].pageX, y[0].pageY);
      else {
        const b = 0.5 * (y[0].pageX + y[1].pageX),
          j = 0.5 * (y[0].pageY + y[1].pageY);
        f.set(b, j);
      }
    }
    function le() {
      if (y.length === 1) _.set(y[0].pageX, y[0].pageY);
      else {
        const b = 0.5 * (y[0].pageX + y[1].pageX),
          j = 0.5 * (y[0].pageY + y[1].pageY);
        _.set(b, j);
      }
    }
    function ce() {
      const b = y[0].pageX - y[1].pageX,
        j = y[0].pageY - y[1].pageY,
        Q = Math.sqrt(b * b + j * j);
      A.set(0, Q);
    }
    function ge() {
      n.enableZoom && ce(), n.enablePan && le();
    }
    function Pe() {
      n.enableZoom && ce(), n.enableRotate && J();
    }
    function Se(b) {
      if (y.length == 1) m.set(b.pageX, b.pageY);
      else {
        const Q = ne(b),
          z = 0.5 * (b.pageX + Q.x),
          de = 0.5 * (b.pageY + Q.y);
        m.set(z, de);
      }
      v.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const j = n.domElement;
      x((2 * Math.PI * v.x) / j.clientHeight),
        w((2 * Math.PI * v.y) / j.clientHeight),
        f.copy(m);
    }
    function Ye(b) {
      if (y.length === 1) p.set(b.pageX, b.pageY);
      else {
        const j = ne(b),
          Q = 0.5 * (b.pageX + j.x),
          z = 0.5 * (b.pageY + j.y);
        p.set(Q, z);
      }
      h.subVectors(p, _).multiplyScalar(n.panSpeed), F(h.x, h.y), _.copy(p);
    }
    function Ne(b) {
      const j = ne(b),
        Q = b.pageX - j.x,
        z = b.pageY - j.y,
        de = Math.sqrt(Q * Q + z * z);
      S.set(0, de),
        T.set(0, Math.pow(S.y / A.y, n.zoomSpeed)),
        G(T.y),
        A.copy(S);
    }
    function U(b) {
      n.enableZoom && Ne(b), n.enablePan && Ye(b);
    }
    function $e(b) {
      n.enableZoom && Ne(b), n.enableRotate && Se(b);
    }
    function ve(b) {
      n.enabled !== !1 &&
        (y.length === 0 &&
          (n.domElement.setPointerCapture(b.pointerId),
          n.domElement.addEventListener("pointermove", we),
          n.domElement.addEventListener("pointerup", xe)),
        g(b),
        b.pointerType === "touch" ? Je(b) : Ve(b));
    }
    function we(b) {
      n.enabled !== !1 && (b.pointerType === "touch" ? nt(b) : De(b));
    }
    function xe(b) {
      V(b),
        y.length === 0 &&
          (n.domElement.releasePointerCapture(b.pointerId),
          n.domElement.removeEventListener("pointermove", we),
          n.domElement.removeEventListener("pointerup", xe)),
        n.dispatchEvent(xa),
        (s = r.NONE);
    }
    function Ve(b) {
      let j;
      switch (b.button) {
        case 0:
          j = n.mouseButtons.LEFT;
          break;
        case 1:
          j = n.mouseButtons.MIDDLE;
          break;
        case 2:
          j = n.mouseButtons.RIGHT;
          break;
        default:
          j = -1;
      }
      switch (j) {
        case yn.DOLLY:
          if (n.enableZoom === !1) return;
          X(b), (s = r.DOLLY);
          break;
        case yn.ROTATE:
          if (b.ctrlKey || b.metaKey || b.shiftKey) {
            if (n.enablePan === !1) return;
            Y(b), (s = r.PAN);
          } else {
            if (n.enableRotate === !1) return;
            Z(b), (s = r.ROTATE);
          }
          break;
        case yn.PAN:
          if (b.ctrlKey || b.metaKey || b.shiftKey) {
            if (n.enableRotate === !1) return;
            Z(b), (s = r.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            Y(b), (s = r.PAN);
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Ar);
    }
    function De(b) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1) return;
          te(b);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1) return;
          K(b);
          break;
        case r.PAN:
          if (n.enablePan === !1) return;
          me(b);
          break;
      }
    }
    function be(b) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== r.NONE ||
        (b.preventDefault(), n.dispatchEvent(Ar), N(b), n.dispatchEvent(xa));
    }
    function Ge(b) {
      n.enabled === !1 || n.enablePan === !1 || $(b);
    }
    function Je(b) {
      switch ((ie(b), y.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Tn.ROTATE:
              if (n.enableRotate === !1) return;
              J(), (s = r.TOUCH_ROTATE);
              break;
            case Tn.PAN:
              if (n.enablePan === !1) return;
              le(), (s = r.TOUCH_PAN);
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Tn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              ge(), (s = r.TOUCH_DOLLY_PAN);
              break;
            case Tn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              Pe(), (s = r.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Ar);
    }
    function nt(b) {
      switch ((ie(b), s)) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Se(b), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1) return;
          Ye(b), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          U(b), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          $e(b), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function E(b) {
      n.enabled !== !1 && b.preventDefault();
    }
    function g(b) {
      y.push(b);
    }
    function V(b) {
      delete C[b.pointerId];
      for (let j = 0; j < y.length; j++)
        if (y[j].pointerId == b.pointerId) {
          y.splice(j, 1);
          return;
        }
    }
    function ie(b) {
      let j = C[b.pointerId];
      j === void 0 && ((j = new Le()), (C[b.pointerId] = j)),
        j.set(b.pageX, b.pageY);
    }
    function ne(b) {
      const j = b.pointerId === y[0].pointerId ? y[1] : y[0];
      return C[j.pointerId];
    }
    n.domElement.addEventListener("contextmenu", E),
      n.domElement.addEventListener("pointerdown", ve),
      n.domElement.addEventListener("pointercancel", xe),
      n.domElement.addEventListener("wheel", be, { passive: !1 }),
      this.update();
  }
}
const Bf = [
    "New Moon",
    "Waxing Crescent",
    "First Quarter",
    "Waxing Gibbous",
    "Full Moon",
    "Waning Gibbous",
    "Last Quarter",
    "Waning Crescent",
  ],
  zf = [
    "नया चाँद/अमावस्या",
    "शुक्ल पक्ष हंसिया चांद/वर्धमान चांद",
    "पहली तिमाही/अर्द्ध चंद्र",
    "शुक्ल पक्ष कुबड़ा चांद",
    "पूर्णचंद/पूर्णिमा",
    "कृष्ण पक्ष कुबड़ा चांद",
    "अंतिम तिमाही/अर्द्ध चंद्र",
    "कृष्ण पक्ष हंसिया चांद/वर्धमान चांद",
  ],
  Gf = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
Date.prototype.getJulian = function () {
  return this / 864e5 - this.getTimezoneOffset() / 1440 + 24405875e-1;
};
function Hf(i) {
  var e = function (y) {
      return y - Math.floor(y);
    },
    t = i.getJulian(),
    n = i.getFullYear(),
    r = 3.14159265 / 180,
    s,
    o,
    a,
    l,
    c,
    u,
    d,
    f,
    m,
    v;
  (s = Math.floor((n - 1900) * 12.3685)),
    (o = (n - 1899.5) / 100),
    (a = o * o),
    (l = o * o * o),
    (c = 2415020 + 29 * s),
    (u =
      1178e-7 * a -
      155e-9 * l +
      (0.75933 + 0.53058868 * s) -
      (837e-6 * o + 335e-6 * a)),
    (d = 360 * e(s * 0.08084821133) + 359.2242 - 333e-7 * a - 347e-8 * l),
    (f = 360 * e(s * 0.07171366128) + 306.0253 + 0.0107306 * a + 1236e-8 * l),
    (m = 360 * e(s * 0.08519585128) + 21.2964 - 0.0016528 * a - 239e-8 * l);
  for (var _ = 0, p = 0; p < t; ) {
    var h = u + 1.530588 * _,
      A = (d + _ * 29.10535608) * r,
      S = (f + _ * 385.81691806) * r,
      T = (m + _ * 390.67050646) * r;
    (h -= 0.4068 * Math.sin(S) + (0.1734 - 393e-6 * o) * Math.sin(A)),
      (h += 0.0161 * Math.sin(2 * S) + 0.0104 * Math.sin(2 * T)),
      (h -= 0.0074 * Math.sin(A - S) - 0.0051 * Math.sin(A + S)),
      (h += 0.0021 * Math.sin(2 * A) + 0.001 * Math.sin(2 * T - S)),
      (h += 0.5 / 1440),
      (v = p),
      (p = c + 28 * _ + Math.floor(h)),
      _++;
  }
  return (t - v) / 29.53059;
}
var no = Hf(new Date()) * 360;
const Vf = [0, 45, 90, 135, 180, 225, 270, 315];
var Nr = Math.round(no / 45) % Vf.length;
document.title = document.title + " " + Gf[Nr];
let io = document.getElementById("curr_phase_name");
io.innerHTML =
  "<span id='english'>" +
  Bf[Nr] +
  "</span><br><span id='hindi'>" +
  zf[Nr] +
  "</span>";
console.log(io);
const pi = new Cf(),
  Yi = new Et(65, window.innerWidth / window.innerHeight, 0.1, 1e3),
  mi = new Qa({ canvas: document.querySelector("#bg") });
mi.setPixelRatio(window.devicePixelRatio);
mi.setSize(window.innerWidth, window.innerHeight);
Yi.position.set(0, 0, 80);
mi.render(pi, Yi);
const Wr = new Ff(16777215, 2);
pi.add(Wr);
const ro = new Of(Yi, mi.domElement),
  kf = new Xi(0.25, 24, 24),
  Wf = new eo({ color: 16777215, emissive: 15794073 });
function Xf() {
  const i = new Dt(kf, Wf),
    [e, t, n] = Array(3)
      .fill()
      .map(() => yl.randFloatSpread(200));
  i.position.set(e, t, n), pi.add(i);
}
Array(200).fill().forEach(Xf);
const Yf = new kr().load("./assets/lroc_color_poles_2k.png"),
  qf = new kr().load("./assets/lroc_color_poles_2k.png"),
  jf = new kr().load("assets/NormalMap.png"),
  Xr = new Dt(
    new Xi(20, 64, 64),
    new eo({ map: Yf, displacementMap: qf, normalMap: jf })
  );
function Kf(i, e) {
  return [i * Math.cos(e), i * Math.sin(e)];
}
const Zf = (no + 270) % 360,
  $f = (Zf * Math.PI) / 180,
  Ma = Kf(80, $f);
Wr.target = Xr;
Wr.position.set(Ma[0], 0, Ma[1]);
pi.add(Xr);
Xr.rotateY((270 * Math.PI) / 180);
function so() {
  requestAnimationFrame(so), ro.update(), mi.render(pi, Yi);
}
so();
function Jf() {
  ro.reset();
}
var Qf = document.getElementById("btn");
Qf.addEventListener("click", Jf);
