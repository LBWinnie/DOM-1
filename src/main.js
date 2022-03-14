const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test,div);

const div3 = dom.create('<div id="parent"></div>');
dom.wrap(test,div3);

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test,'title','Hahihuheho')
const title = dom.attr(test,'title')
console.log(`title:${title}`)

dom.text(test,'你好，我是岁岁')

dom.style(test,{border:'2px solid yellow',color: 'lightblue'})
console.log(dom.style(test,'border'))
dom.style(test,'border','2px solid pink')

dom.class.add(test,'winnie')
dom.class.add(test,'LB')
dom.class.remove(test,'LB')
console.log(dom.class.has(test,'LB'))

const fn = ()=>{
    console.log('点击')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test2 = dom.find('#test2')[0]
console.log(dom.find('.p1',test2)[0])

console.log(dom.parent(test))

const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=> dom.style(n, 'color','red'))

console.log(dom.index(s2))