
const id    = x      => x;
const konst = x => y => x;
const snd   = x => y => y;

const T =  konst;
const F =  snd;

const and = a => b => a (b) (a);
const or  = a => a (a) ;

const Pair      =  fn => ln => sel =>  sel(fn)(ln) ;
const firstname = konst;
const lastname  = snd;

const Left   = x => lch => rch => lch(x);
const Right  = x => lch => rch => rch(x);
const either = id;


// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




