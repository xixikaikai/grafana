SystemJS.config({
  warnings: true,
  defaultExtenion: 'js',
  baseURL: 'public',
  paths: {
    'ngreact': 'vendor/npm/ngreact/ngReact.js',
    'mousetrap': 'vendor/npm/mousetrap/mousetrap.js',
    'remarkable': 'vendor/npm/remarkable/dist/remarkable.js',
    'tether': 'vendor/npm/tether/dist/js/tether.js',
    'eventemitter3': 'vendor/npm/eventemitter3/index.js',
    'tether-drop': 'vendor/npm/tether-drop/dist/js/drop.js',
    'moment': 'vendor/moment.js',
    'jquery': 'vendor/npm/jquery/dist/jquery.js',
    'lodash-src': 'vendor/npm/lodash/lodash.js',
    'lodash': 'app/core/lodash_extended.js',
    'angular': 'vendor/npm/angular/angular.js',
    'bootstrap': 'vendor/bootstrap/bootstrap.js',
    'angular-route': 'vendor/npm/angular-route/angular-route.js',
    'angular-sanitize': 'vendor/npm/angular-sanitize/angular-sanitize.js',
    'angular-ui': 'vendor/angular-ui/ui-bootstrap-tpls.js',
    'angular-strap': 'vendor/angular-other/angular-strap.js',
    'angular-dragdrop': 'vendor/npm/angular-native-dragdrop/draganddrop.js',
    'angular-bindonce': 'vendor/npm/angular-bindonce/bindonce.js',
    'spectrum': 'vendor/spectrum.js',
    'bootstrap-tagsinput': 'vendor/tagsinput/bootstrap-tagsinput.js',
    'jquery.flot': 'vendor/flot/jquery.flot',
    'jquery.flot.pie': 'vendor/flot/jquery.flot.pie',
    'jquery.flot.selection': 'vendor/flot/jquery.flot.selection',
    'jquery.flot.stack': 'vendor/flot/jquery.flot.stack',
    'jquery.flot.stackpercent': 'vendor/flot/jquery.flot.stackpercent',
    'jquery.flot.time': 'vendor/flot/jquery.flot.time',
    'jquery.flot.crosshair': 'vendor/flot/jquery.flot.crosshair',
    'jquery.flot.fillbelow': 'vendor/flot/jquery.flot.fillbelow',
    'jquery.flot.gauge': 'vendor/flot/jquery.flot.gauge',
    'd3': 'vendor/d3/d3.js',
    'jquery.flot.dashes': 'vendor/flot/jquery.flot.dashes',
    'ace': 'vendor/npm/ace-builds/src-noconflict/ace',
    'clipboard': 'vendor/npm/clipboard/dist/clipboard.js',
    "npm:": "jspm_packages/npm/",
    "app/": "app/"
  },
  packages: {
    'app': {
      'defaultExtension': 'js',
      'main': 'boot.js',
      'format': 'system'
    },
    'vendor': {
      'defaultExtension': 'js'
    },
    'plugins': {
      'defaultExtension': 'js'
    },
    'test': {
      'defaultExtension': 'js'
    }
  },
  map: {
    'text': 'vendor/plugin-text/text.js',
    'css': 'app/core/utils/css_loader.js'
  },
  meta: {
    'vendor/angular-other/angular-strap.js': {
      'deps': [
        'angular'
      ]
    },
    'vendor/npm/virtual-scroll/src/indx.js': {
      'format': 'cjs',
      'exports': 'VirtualScroll'
    },
    'vendor/npm/angular/angular.js': {
      'format': 'global',
      'deps': [
        'jquery'
      ],
      'exports': 'angular'
    },
    'vendor/npm/eventemitter3/index.js': {
      'format': 'cjs',
      'exports': 'EventEmitter'
    },
    'vendor/npm/mousetrap/mousetrap.js': {
      'format': 'global',
      'exports': 'Mousetrap'
    },
    'vendor/npm/ace-builds/src-noconflict/ace.js': {
      'format': 'global',
      'exports': 'ace'
    }
  },
  nodeConfig: {
    'paths': {
      'npm:': 'jspm_packages/npm/',
      'app/': 'app/'
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json'
  ],
  map: {
    'lodash': 'npm:lodash@4.17.4',
    'assert': 'npm:jspm-nodelibs-assert@0.2.1',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.3',
    'child_process': 'npm:jspm-nodelibs-child_process@0.2.1',
    'constants': 'npm:jspm-nodelibs-constants@0.2.1',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.1',
    'domain': 'npm:jspm-nodelibs-domain@0.2.1',
    'events': 'npm:jspm-nodelibs-events@0.2.2',
    'fs': 'npm:jspm-nodelibs-fs@0.2.1',
    'http': 'npm:jspm-nodelibs-http@0.2.0',
    'https': 'npm:jspm-nodelibs-https@0.2.2',
    'os': 'npm:jspm-nodelibs-os@0.2.2',
    'path': 'npm:jspm-nodelibs-path@0.2.3',
    'process': 'npm:jspm-nodelibs-process@0.2.1',
    'react': 'npm:react@16.0.0',
    'react-dom': 'npm:react-dom@16.0.0',
    'stream': 'npm:jspm-nodelibs-stream@0.2.1',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.1',
    'url': 'npm:jspm-nodelibs-url@0.2.1',
    'util': 'npm:jspm-nodelibs-util@0.2.2',
    'vm': 'npm:jspm-nodelibs-vm@0.2.1',
    'zlib': 'npm:jspm-nodelibs-zlib@0.2.3'
  },
  packages: {
    'npm:react-dom@16.0.0': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'prop-types': 'npm:prop-types@15.6.0',
        'object-assign': 'npm:object-assign@4.1.1',
        'fbjs': 'npm:fbjs@0.8.16'
      }
    },
    'npm:react@16.0.0': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'prop-types': 'npm:prop-types@15.6.0',
        'object-assign': 'npm:object-assign@4.1.1',
        'fbjs': 'npm:fbjs@0.8.16'
      }
    },
    'npm:prop-types@15.6.0': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'object-assign': 'npm:object-assign@4.1.1',
        'fbjs': 'npm:fbjs@0.8.16'
      }
    },
    'npm:loose-envify@1.3.1': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.2'
      }
    },
    'npm:fbjs@0.8.16': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'object-assign': 'npm:object-assign@4.1.1',
        'setimmediate': 'npm:setimmediate@1.0.5',
        'promise': 'npm:promise@7.3.1',
        'isomorphic-fetch': 'npm:isomorphic-fetch@2.2.1',
        'ua-parser-js': 'npm:ua-parser-js@0.7.14',
        'core-js': 'npm:core-js@1.2.7'
      }
    },
    'npm:promise@7.3.1': {
      'map': {
        'asap': 'npm:asap@2.0.6'
      }
    },
    'npm:isomorphic-fetch@2.2.1': {
      'map': {
        'whatwg-fetch': 'npm:whatwg-fetch@2.0.3',
        'node-fetch': 'npm:node-fetch@1.7.3'
      }
    },
    'npm:node-fetch@1.7.3': {
      'map': {
        'is-stream': 'npm:is-stream@1.1.0',
        'encoding': 'npm:encoding@0.1.12'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.1': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:jspm-nodelibs-domain@0.2.1': {
      'map': {
        'domain-browser': 'npm:domain-browser@1.1.7'
      }
    },
    'npm:encoding@0.1.12': {
      'map': {
        'iconv-lite': 'npm:iconv-lite@0.4.19'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.3.3'
      }
    },
    'npm:readable-stream@2.3.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'isarray': 'npm:isarray@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@1.0.3',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:string_decoder@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.3': {
      'map': {
        'buffer': 'npm:buffer@5.0.7'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.1': {
      'map': {
        'string_decoder': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:buffer@5.0.7': {
      'map': {
        'base64-js': 'npm:base64-js@1.2.1',
        'ieee754': 'npm:ieee754@1.1.8'
      }
    },
    'npm:jspm-nodelibs-url@0.2.1': {
      'map': {
        'url': 'npm:url@0.11.0'
      }
    },
    'npm:jspm-nodelibs-http@0.2.0': {
      'map': {
        'http-browserify': 'npm:stream-http@2.7.2'
      }
    },
    'npm:stream-http@2.7.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.3.3',
        'builtin-status-codes': 'npm:builtin-status-codes@3.0.0',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:jspm-nodelibs-zlib@0.2.3': {
      'map': {
        'browserify-zlib': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.3.3',
        'pako': 'npm:pako@0.2.9'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'punycode': 'npm:punycode@1.3.2',
        'querystring': 'npm:querystring@0.2.0'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.1': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.1'
      }
    },
    'npm:jspm-nodelibs-os@0.2.2': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.3.0'
      }
    },
    'npm:crypto-browserify@3.11.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-hash': 'npm:create-hash@1.1.3',
        'randombytes': 'npm:randombytes@2.0.5',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'browserify-sign': 'npm:browserify-sign@4.0.4',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'pbkdf2': 'npm:pbkdf2@3.0.14'
      }
    },
    'npm:randombytes@2.0.5': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:create-hash@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'sha.js': 'npm:sha.js@2.4.9'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'randombytes': 'npm:randombytes@2.0.5',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:create-hmac@1.1.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'create-hash': 'npm:create-hash@1.1.3',
        'ripemd160': 'npm:ripemd160@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'sha.js': 'npm:sha.js@2.4.9'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.5',
        'miller-rabin': 'npm:miller-rabin@4.0.1',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:pbkdf2@3.0.14': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'create-hash': 'npm:create-hash@1.1.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'ripemd160': 'npm:ripemd160@2.0.1',
        'sha.js': 'npm:sha.js@2.4.9'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.8',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3'
      }
    },
    'npm:ripemd160@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@2.0.2'
      }
    },
    'npm:cipher-base@1.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:parse-asn1@5.1.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.8',
        'create-hash': 'npm:create-hash@1.1.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.14',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.5',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:browserify-aes@1.0.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'create-hash': 'npm:create-hash@1.1.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:evp_bytestokey@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'md5.js': 'npm:md5.js@1.3.4'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:miller-rabin@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:sha.js@2.4.9': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'brorand': 'npm:brorand@1.1.0',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1',
        'hash.js': 'npm:hash.js@1.1.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash-base@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:md5.js@1.3.4': {
      'map': {
        'hash-base': 'npm:hash-base@3.0.4',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash-base@3.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:hmac-drbg@1.0.1': {
      'map': {
        'hash.js': 'npm:hash.js@1.1.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:hash.js@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    }
  }
});
