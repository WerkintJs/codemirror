define([
        'lib/codemirror',
        'css!lib/codemirror',
        'mode/twig/twig',
        'mode/multiplex'
    ],function(CodeMirror){

    CodeMirror.defineMode("twig_html", function (config) {
        return CodeMirror.multiplexingMode (
            CodeMirror.getMode(config, "text/html"), {
                open: /\{[%#]/, close: /[%#]\}/,
                mode: CodeMirror.getMode(config, "twig"),
                parseDelimiters: true
            });
    });

    return CodeMirror;
});