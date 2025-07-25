let nams = 'kane , wilsons\nundertaker , koshti\nMadhuri , Dixit\nTonny , Stark';

console.log(nams.replace(/(\p{L}+)\s,\s(\p{L}+)/gu,`$2 $1`));