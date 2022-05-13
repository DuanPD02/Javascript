// su dung const de khai bao bien
//bad
var a = 1;
var b = 2;
//good
const a = 1;
const b = 2;
// let la pham vi khoi
// bad
var count = 1;
if(true) {
count += 1;
}
// good, use the let
let count = 1;
if(true) {
    count += 1;
}
// let va const la pham vi khoi , con var la pham vi chuc nang
//bad
{
    let a = 1;
    const b = 1;
    var c = 1;
}
console.log(a);// referenceError
console.log(b);//referenceError
console.log(c); //print 1;
// su dung cu phap chu de tao doi tuong
//bad
const item = new Object();
//good
const item1 = {};
function getKey(k){
    return `a key named ${k}`;
}
//bad
const obj = {
    id : 5,
    name: 'San Francisco',
};
obj[getKey9('enabled')] = true;
// good
const obj = {
    id: 5,
    name: 'San Francisco',
};
obj[getKey('enabled')] = true;
//good
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]:true,
};
// su dung phuong thuc rut gon
// bad
const atom = {
    value: 1,
    addValue: function (value){
        return atom.value + value;
    },
};
//good
const atomgood = {
    value: 1,
    addValue(value){
        return atom.value + value;
    },
};
// su dung toc ky gia tri mieu ta
const lukeSkyWalker = 'Luke Skywalker';
// bad
const obj = {
    lukeskyWalker: lukeSkyWalker,
};
// good
const obj = {
lukeSkywalker,
};
// nhom ca thuoc tinh viet tat cua ban o dau khai bao doi tuong cua ban
const anakinskywalker = 'Anakin Skywalker';
const lukeskywalker = 'Luke Skywalker';
//bad
const obj = {
    episodeOne : 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywaljer,
    episodethree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
};
// good
const obj = {
    lukeSkywaljer,
    anakinSkywalker,
    episodeOne : 1,
    twoJediwalkIntoACantina: 2,
    episodethree: 3,
    mayTheFourth: 4,
}
// chi trich dan cac thuoc tinh la gia tri nhan dang khong ho le
//bad
const bad  = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};
// good
const good = {
    foo: 3,
    bar: 4,
    'data-blah':5
};
// khong goi truc tiep cac phuong thuc
// bad
console.log(object.hasOwnProperty(key));
//good
console.log(Objec.prototype.hasOwnProperty.call(object,key));
//best
const hasbad = Object.prototype.hasOwnProperty;
console.log(has.call(object,key));
//or
import has from 'has';
import has from 'has';
console.log(has(object,key));

