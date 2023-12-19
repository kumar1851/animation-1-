var tl =gsap.timeline();

tl.from(pic1, 1,{opacity:0, ease:Expo.easeOut});
tl.from(text1, 1,{top:250, ease:Expo.easeOut});

tl.to(pic1, 1,{opacity:0, ease:Expo.easeOut});
tl.to(pic2, 1,{opacity:0.20, ease:Expo.easeOut});
tl.to(text1, 1,{opacity:0, ease:Expo.easeOut});
tl.from(text2, 1,{top:250, ease:Expo.easeOut});

tl.to(pic2, 1,{opacity:0.30, ease:Expo.easeOut});
tl.to(text2, 1,{opacity:0, ease:Expo.easeOut});
tl.from(text3, 1,{top:250, ease:Expo.easeOut});
tl.from(footer, 1,{top:250, ease:Expo.easeOut});




