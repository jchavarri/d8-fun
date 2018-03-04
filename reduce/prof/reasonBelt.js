var reasonBelt = (function (exports) {
'use strict';

var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;


/*  Not a pure module */

/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

function copyAuxCont(_cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var next = /* :: */[
        cellX[0],
        /* [] */0
      ];
      prec[1] = next;
      _prec = next;
      _cellX = cellX[1];
      continue ;
      
    } else {
      return prec;
    }
  }
}

function concat$1(xs, ys) {
  if (xs) {
    var cell = /* :: */[
      xs[0],
      /* [] */0
    ];
    copyAuxCont(xs[1], cell)[1] = ys;
    return cell;
  } else {
    return ys;
  }
}

function reduceU$1(_l, _accu, f) {
  while(true) {
    var accu = _accu;
    var l = _l;
    if (l) {
      _accu = f(accu, l[0]);
      _l = l[1];
      continue ;
      
    } else {
      return accu;
    }
  }
}


/* No side effect */

/* node_std_output Not a pure module */

/* No side effect */

/* imul Not a pure module */

/* repeat Not a pure module */

/* two_ptr_32_dbl Not a pure module */

/* float_of_string Not a pure module */

/* No side effect */

var id = [0];

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}


/* No side effect */

/* not_implemented Not a pure module */

/* No side effect */

/* No side effect */

var Exit = create("Pervasives.Exit");

function string_of_int(param) {
  return "" + param;
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE


var videos = /* :: */[
  /* record */[
    /* id */65432445,
    /* title */"The Chamber"
  ],
  /* :: */[
    /* record */[
      /* id */675465,
      /* title */"Fracture"
    ],
    /* :: */[
      /* record */[
        /* id */70111470,
        /* title */"Die Hard"
      ],
      /* :: */[
        /* record */[
          /* id */654356453,
          /* title */"Bad Boys"
        ],
        /* [] */0
      ]
    ]
  ]
];


/* No side effect */

/* No side effect */

function height(n) {
  if (n !== null) {
    return n.h;
  } else {
    return 0;
  }
}

function create$1(l, x, d, r) {
  var hl = height(l);
  var hr = height(r);
  return {
          left: l,
          key: x,
          value: d,
          right: r,
          h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function singleton(x, d) {
  return {
          left: null,
          key: x,
          value: d,
          right: null,
          h: 1
        };
}

function updateValue(n, newValue) {
  if (n.value === newValue) {
    return n;
  } else {
    return {
            left: n.left,
            key: n.key,
            value: newValue,
            right: n.right,
            h: n.h
          };
  }
}

function bal(l, x, d, r) {
  var hl = l !== null ? l.h : 0;
  var hr = r !== null ? r.h : 0;
  if (hl > (hr + 2 | 0)) {
    var ll = l.left;
    var lv = l.key;
    var ld = l.value;
    var lr = l.right;
    if (height(ll) >= height(lr)) {
      return create$1(ll, lv, ld, create$1(lr, x, d, r));
    } else {
      var lrl = lr.left;
      var lrv = lr.key;
      var lrd = lr.value;
      var lrr = lr.right;
      return create$1(create$1(ll, lv, ld, lrl), lrv, lrd, create$1(lrr, x, d, r));
    }
  } else if (hr > (hl + 2 | 0)) {
    var rl = r.left;
    var rv = r.key;
    var rd = r.value;
    var rr = r.right;
    if (height(rr) >= height(rl)) {
      return create$1(create$1(l, x, d, rl), rv, rd, rr);
    } else {
      var rll = rl.left;
      var rlv = rl.key;
      var rld = rl.value;
      var rlr = rl.right;
      return create$1(create$1(l, x, d, rll), rlv, rld, create$1(rlr, rv, rd, rr));
    }
  } else {
    return {
            left: l,
            key: x,
            value: d,
            right: r,
            h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  }
}

var empty = null;


/* No side effect */

/* No side effect */

function set$1(t, newK, newD) {
  if (t !== null) {
    var k = t.key;
    if (newK === k) {
      return updateValue(t, newD);
    } else {
      var v = t.value;
      if (newK < k) {
        return bal(set$1(t.left, newK, newD), k, v, t.right);
      } else {
        return bal(t.left, k, v, set$1(t.right, newK, newD));
      }
    }
  } else {
    return singleton(newK, newD);
  }
}

var empty$1 = empty;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

function prep(_index, _list) {
  while(true) {
    var list = _list;
    var index = _index;
    if (index !== 15) {
      _list = concat$1(list, list);
      _index = index + 1 | 0;
      continue ;
      
    } else {
      return list;
    }
  }
}

var v = prep(0, videos);

var start = Date.now();

var result = reduceU$1(v, empty$1, (function (dict, video) {
        return set$1(dict, string_of_int(video[/* id */0]), video[/* title */1]);
      }));

console.log("reasonml Belt", Date.now() - start);


/* v Not a pure module */

exports.prep = prep;
exports.v = v;
exports.start = start;
exports.result = result;

return exports;

}({}));