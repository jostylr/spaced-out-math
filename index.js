var parse = function (text) {
    text = text || '';
    var tree;
    var root = "root";
    var op = "op";
    var num = "num";
    var v = "variable";
    
    tree = { t: root, 
        c: { t: op, v:"/", 
            l: { t:op, v:"+", 
                l: {t:num, v: 5},
                r: {t:op, v: "^",
                    l: {t:v, v:"x"},
                    r: {t:v, v:3}
               }},
            r: {t: num, v: 7 }
            }
            };
    var tex = ''; 
    tex += '\frac{5+x^{3}}{7}';
    return {
        original: text,
        tex: tex
    };
};
