function c(u){let s=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas","dua belas","tiga belas","empat belas","lima belas","enam belas","tujuh belas","delapan belas","sembilan belas"],d=["","","dua puluh","tiga puluh","empat puluh","lima puluh","enam puluh","tujuh puluh","delapan puluh","sembilan puluh"],h=["","ribu","juta","miliar","triliun","kuadriliun","kuintiliun","sekstiliun","septiliun","oktiliun","noniliun","desiliun","undesiliun","duodesiliun","tredesiliun","kuatuordesiliun","kuintesiliun","sekstesiliun","septendesiliun","oktodesiliun","novemdesiliun","vigintiliun"];if(u===0)return"nol";let e="",t=[];for(;u;)t.push(u%1e3),u=Math.floor(u/1e3);for(let l=0;l<t.length;l++){let a=t[l];if(a){let i="",o=Math.floor(a/100),n=a%100;if(o&&(o===1?i+="seratus ":i+=s[o]+" ratus "),n)if(n<20)i+=s[n]+" ";else{let r=Math.floor(n/10),p=n%10;i+=d[r]+" "+s[p]+" "}i+=h[l]+" ",e=i+e}}return e.trim()}var m=c;export{m as default};
