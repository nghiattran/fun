"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_crypto=require("crypto");module.exports=function(){function e(){_classCallCheck(this,e);var t=this.getHashes(),r=this.getCiphers();this.encodingTypes=["hex","base64"],this.algorithms={hash:t,cipher:r,decipher:r,pbkdf2:t}}return _createClass(e,[{key:"encrypt",value:function(e){"hash"===e.type?this.hash(e):"cipher"===e.type?this.cipher(e):"decipher"===e.type?this.decipher(e):"pbkdf2"===e.type&&this.pbkdf2(e)}},{key:"hash",value:function(e){this.encoded=_crypto.crypto.createHash(e.algorithm).update(e.string).digest(e.digest)}},{key:"cipher",value:function t(e){var t=_crypto.crypto.createCipher(e.algorithm,e.key);this.encoded=t.update(e.string,"utf8",e.digest),this.encoded+=t["final"]("hex")}},{key:"decipher",value:function r(e){var r=_crypto.crypto.createDecipher(e.algorithm,e.key);this.encoded=r.update(e.string,e.digest,"utf8"),this.encoded+=r["final"]("utf8")}},{key:"pbkdf2",value:function(e){var t=this;this.loading=!0,_crypto.crypto.pbkdf2(e.key,e.salt,e.iter,e.keylen,e.algorithm,function(r,a){if(t.loading=!1,r)throw r;t.encoded=a.toString(e.digest)})}},{key:"getHashes",value:function(){for(var e=_crypto.crypto.getHashes(),t=[],r=0;r<e.length;r++)try{var a=_crypto.crypto.createHash(e[r]).update("data.string a string very long long long long","utf8").digest("base64");a&&t.push(e[r])}catch(i){}return t}},{key:"getCiphers",value:function(){for(var e=_crypto.crypto.getCiphers(),t=[],r=0;r<e.length;r++)try{var a=_crypto.crypto.createCipher(e[r],"a password").update("data.string a string","utf8","hex");a&&t.push(e[r])}catch(i){}return t}}]),e}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcGhlci9jaXBoZXIuY29udHJvbGVyLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2NyeXB0byIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29udHJvbGVyIiwidGhpcyIsImhhc2hBbGdvcml0aG1zIiwiZ2V0SGFzaGVzIiwiY2lwaGVyQWxnb3JpdGhtcyIsImdldENpcGhlcnMiLCJlbmNvZGluZ1R5cGVzIiwiYWxnb3JpdGhtcyIsImhhc2giLCJjaXBoZXIiLCJkZWNpcGhlciIsInBia2RmMiIsInZhbHVlIiwiZGF0YSIsInR5cGUiLCJlbmNvZGVkIiwiY3J5cHRvIiwiY3JlYXRlSGFzaCIsImFsZ29yaXRobSIsInVwZGF0ZSIsInN0cmluZyIsImRpZ2VzdCIsImNyZWF0ZUNpcGhlciIsImNyZWF0ZURlY2lwaGVyIiwiX3RoaXMiLCJsb2FkaW5nIiwic2FsdCIsIml0ZXIiLCJrZXlsZW4iLCJlcnIiLCJ0b1N0cmluZyIsInZhbGlkSGFzaGVzIiwiZW5jcnlwdGVkIiwicHVzaCIsInZhbGlkQ2lwaGVycyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFPQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FKaEgsR0FBSUMsY0FBZSxXQUFjLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUs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QUFpQnBCLElBRXJDLE1BQU02QyxJQUVWLE1BQU9LLE9BdEZZbEMiLCJmaWxlIjoiY2lwaGVyL2NpcGhlci5jb250cm9sZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG4vLyB2YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5pbXBvcnQgeyBjcnlwdG8gfSBmcm9tICdjcnlwdG8nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIGNvbnRyb2xlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBoYXNoQWxnb3JpdGhtcyA9IHRoaXMuZ2V0SGFzaGVzKCk7XG4gICAgdmFyIGNpcGhlckFsZ29yaXRobXMgPSB0aGlzLmdldENpcGhlcnMoKTtcblxuICAgIHRoaXMuZW5jb2RpbmdUeXBlcyA9IFtcbiAgICAgICdoZXgnLFxuICAgICAgJ2Jhc2U2NCddO1xuXG4gICAgdGhpcy5hbGdvcml0aG1zID0ge1xuICAgICAgaGFzaDogaGFzaEFsZ29yaXRobXMsXG4gICAgICBjaXBoZXI6IGNpcGhlckFsZ29yaXRobXMsXG4gICAgICBkZWNpcGhlcjogY2lwaGVyQWxnb3JpdGhtcyxcbiAgICAgIHBia2RmMjogaGFzaEFsZ29yaXRobXNcbiAgICB9XG4gIH1cblxuICBlbmNyeXB0IChkYXRhKSB7XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2hhc2gnKSB7XG4gICAgICB0aGlzLmhhc2goZGF0YSk7XG4gICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdjaXBoZXInKSB7XG4gICAgICB0aGlzLmNpcGhlcihkYXRhKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ2RlY2lwaGVyJykge1xuICAgICAgdGhpcy5kZWNpcGhlcihkYXRhKTtcbiAgICB9ICBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdwYmtkZjInKSB7XG4gICAgICB0aGlzLnBia2RmMihkYXRhKTtcbiAgICB9XG4gIH1cblxuICBoYXNoIChkYXRhKSB7XG4gICAgdGhpcy5lbmNvZGVkID0gY3J5cHRvLmNyZWF0ZUhhc2goZGF0YS5hbGdvcml0aG0pLnVwZGF0ZShkYXRhLnN0cmluZykuZGlnZXN0KGRhdGEuZGlnZXN0KTtcbiAgfVxuXG4gIGNpcGhlciAoZGF0YSkge1xuICAgIHZhciBjaXBoZXIgPSBjcnlwdG8uY3JlYXRlQ2lwaGVyKGRhdGEuYWxnb3JpdGhtLCBkYXRhLmtleSk7XG4gICAgdGhpcy5lbmNvZGVkID0gY2lwaGVyLnVwZGF0ZShkYXRhLnN0cmluZywgJ3V0ZjgnLCBkYXRhLmRpZ2VzdCk7XG4gICAgdGhpcy5lbmNvZGVkICs9IGNpcGhlci5maW5hbCgnaGV4Jyk7XG4gIH1cblxuICBkZWNpcGhlciAoZGF0YSkge1xuICAgIHZhciBkZWNpcGhlciA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcihkYXRhLmFsZ29yaXRobSwgZGF0YS5rZXkpO1xuICAgIHRoaXMuZW5jb2RlZCA9IGRlY2lwaGVyLnVwZGF0ZShkYXRhLnN0cmluZywgZGF0YS5kaWdlc3QsICd1dGY4Jyk7XG4gICAgdGhpcy5lbmNvZGVkICs9IGRlY2lwaGVyLmZpbmFsKCd1dGY4Jyk7XG4gIH1cblxuICBwYmtkZjIgKGRhdGEpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGNyeXB0by5wYmtkZjIoZGF0YS5rZXksIGRhdGEuc2FsdCwgZGF0YS5pdGVyLCBkYXRhLmtleWxlbiwgZGF0YS5hbGdvcml0aG0sIChlcnIsIGtleSkgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICB0aGlzLmVuY29kZWQgPSBrZXkudG9TdHJpbmcoZGF0YS5kaWdlc3QpO1xuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IGFsbCBoYXNoIGFsZ29yaXRobXMgc3VwcG9ydGVkIGJ5IGJyb3dzZXJcbiAgICovXG4gIGdldEhhc2hlcyAoKSB7XG4gICAgdmFyIGhhc2hBbGdvcml0aG1zID0gY3J5cHRvLmdldEhhc2hlcygpO1xuICAgIHZhciB2YWxpZEhhc2hlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFzaEFsZ29yaXRobXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBlbmNyeXB0ZWQgPSBjcnlwdG8uY3JlYXRlSGFzaChoYXNoQWxnb3JpdGhtc1tpXSkudXBkYXRlKFwiZGF0YS5zdHJpbmcgYSBzdHJpbmcgdmVyeSBsb25nIGxvbmcgbG9uZyBsb25nXCIsICd1dGY4JykuZGlnZXN0KCdiYXNlNjQnKTtcbiAgICAgICAgaWYgKGVuY3J5cHRlZCkge1xuICAgICAgICAgIHZhbGlkSGFzaGVzLnB1c2goaGFzaEFsZ29yaXRobXNbaV0pO1xuICAgICAgICB9O1xuICAgICAgfWNhdGNoKGVycikge31cbiAgICB9O1xuICAgIHJldHVybiB2YWxpZEhhc2hlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNpcGhlciBhbGdvcml0aG1zIHN1cHBvcnRlZCBieSBicm93c2VyXG4gICAqL1xuICBnZXRDaXBoZXJzICgpIHtcbiAgICB2YXIgY2lwaGVyQWxnb3JpdGhtcyA9IGNyeXB0by5nZXRDaXBoZXJzKCk7XG4gICAgdmFyIHZhbGlkQ2lwaGVycyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lwaGVyQWxnb3JpdGhtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGVuY3J5cHRlZCA9IGNyeXB0by5jcmVhdGVDaXBoZXIoY2lwaGVyQWxnb3JpdGhtc1tpXSwgJ2EgcGFzc3dvcmQnKS51cGRhdGUoXCJkYXRhLnN0cmluZyBhIHN0cmluZ1wiLCAndXRmOCcsICdoZXgnKTtcbiAgICAgICAgaWYgKGVuY3J5cHRlZCkge1xuICAgICAgICAgIHZhbGlkQ2lwaGVycy5wdXNoKGNpcGhlckFsZ29yaXRobXNbaV0pO1xuICAgICAgICB9O1xuICAgICAgfSBjYXRjaChlcnIpIHt9XG4gICAgfTtcbiAgICByZXR1cm4gdmFsaWRDaXBoZXJzO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9