var SPIDERDOODLE = (function() {
    'use strict';
    var module = {}; 
    var canvas = null;
    var snap = null;
    var vertices = [];
    var lines = [];
        
    var randomPoint = function() {
        var h = canvas.clientHeight;
        var w = canvas.clientWidth;
        var x = Math.round(w * Math.random());
        var y = Math.round(h * Math.random());
        return [x,y];     
    };

    var randomAngle = function () {
        return 2 * Math.PI * Math.random() - Math.PI;
    };

    var initFrame = function () {
        var h = canvas.clientHeight;
        var w = canvas.clientWidth;
        vertices.push([0,0]);
        vertices.push([w,0]);
        vertices.push([0,h]);
        vertices.push([w,h]);
        lines.push([0,1]);
        lines.push([0,2]);
        lines.push([1,3]);
        lines.push([2,3]);
    };

    var setLineAttrbutes = function (line) {
        line.attr({stroke:'#000',
                   strokeWidth: 1});
    };

    var addLine = function (pt, ang) {
    };

    var drawLines = function (lines) {
        var group = snap.g();
        for (var i=0; i<lines.length; i+=1) {
            var v1 = vertices[lines[i][0]];
            var v2 = vertices[lines[i][1]];
            var l = snap.line(v1[0], v1[1], v2[0], v2[1]);
            group.add(l); 
        }
        setLineAttrbutes(group);
    };

    module.init = function (id) {
        canvas = document.getElementById(id);
        snap = Snap('#'+id); 
        initFrame();
        for (var i=0; i<1; i += 1) {
            var pt = randomPoint();
            var ang = randomAngle();
            addLine(pt, ang);
        }
        drawLines(lines);
    };

    return module;
}());
