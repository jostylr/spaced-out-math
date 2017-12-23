# [spaced-out-math](# "version: 0.1")

This is a simple-minded syntax for math that is based on groupings, either by
spaces or parentheses, brackets, or braces. 

It also contains a markdown extension syntax for using double backticks to
enable the spaced-out-parsing, using the default output method being latex in
markua syntax. 


## structure

There is a [live demo](http://jostylr.github.io/spaced-out-math). This is
generated from the docs folder which contains 

* [docs/index.html](#index-html "save: ")
* [docs/som.js](#main "save: | jshint")

The entry point into the npm package is 

Should add in litpro a wrap-exports and list of exports to create module
syntax. 

* [index.js](#main "save: ")


## Main

This is the main library code

    var parse = function (text) {
        text = text || '';
        var tree;
        _"tree"
        var tex = ''; 
        _"tex"
        return {
            original: text,
            tex: tex
        };
    };

### Tree 

This tokenizes the input stream and puts into a tree. 

    _":sample"


[sample]()

This is a sample tree. It corresponds to `5+x^3 /7`

t=type, c=child or center, l=left, r=right, v=value

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

### Tex

This creates a tex output. 

    _":sample"
   
[sample]()

This is what the tree sample should transform to for tex

    tex += '\frac{5+x^{3}}{7}';

## Index html

This is the live demo page. It contains a vue that takes in the text and
outputs the output. 

    _":pug | pug | compile"

[pug]()

    doctype html
    html
        head
            title Spaced Out Math Demo
            link(rel='stylesheet',href='katex.css') 
        body
            #app 
                h1 Spaced Out Math
                    input(v-model.lazy='spacedout')
                    p.
                        Tex Output #[span.katex {{math.tex}}]
            script(src='vue.js')
            script(src='som.js')
            script(src='katex.js')
            script \_`:vue code` 

[vue code]()

    var m = new Vue({
        el: '#app',
        data: {
            spacedout: ''
        },
        computed: {
            math: function () {
                var t =  parse(this.spacedout);
                console.log(t);
                return t;
            }
        }
    });



