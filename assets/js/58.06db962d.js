(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{622:function(t,s,a){"use strict";a.r(s);var e=a(55),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1231-divide-chocolate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1231-divide-chocolate"}},[t._v("#")]),t._v(" 1231. Divide Chocolate")]),t._v(" "),a("p",[t._v("Question link is "),a("a",{attrs:{href:"https://leetcode.com/problems/divide-chocolate/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"question"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#question"}},[t._v("#")]),t._v(" Question")]),t._v(" "),a("p",[t._v("You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array "),a("code",[t._v("sweetness")]),t._v(".")]),t._v(" "),a("p",[t._v("You want to share the chocolate with your "),a("code",[t._v("k")]),t._v(" friends so you start cutting the chocolate bar into "),a("code",[t._v("k + 1")]),t._v(" pieces using "),a("code",[t._v("k")]),t._v(" cuts, each piece consists of some "),a("strong",[t._v("consecutive")]),t._v(" chunks.")]),t._v(" "),a("p",[t._v("Being generous, you will eat the piece with the "),a("strong",[t._v("minimum total sweetness")]),t._v(" and give the other pieces to your friends.")]),t._v(" "),a("p",[t._v("Find the "),a("strong",[t._v("maximum total sweetness")]),t._v(" of the piece you can get by cutting the chocolate bar optimally.")]),t._v(" "),a("p",[a("strong",[t._v("Example 1:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: sweetness = [1,2,3,4,5,6,7,8,9], k = 5\nOutput: 6\nExplanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]\n")])])]),a("p",[a("strong",[t._v("Example 2:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: sweetness = [5,6,7,8,9,1,2,3,4], k = 8\nOutput: 1\nExplanation: There is only one way to cut the bar into 9 pieces.\n")])])]),a("p",[a("strong",[t._v("Example 3:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: sweetness = [1,2,2,1,2,2,1,2,2], k = 2\nOutput: 5\nExplanation: You can divide the chocolate to [1,2,2], [1,2,2], [1,2,2]\n")])])]),a("h3",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[t._v("#")]),t._v(" Solution")]),t._v(" "),a("p",[t._v("Binary Search.")]),t._v(" "),a("p",[t._v("Our goal is to find the maximum total sweetness. And this value is the maximum value of the minimum value of all possible cutting plans.  So we just need to find the maximum value of these minmum values.")]),t._v(" "),a("p",[t._v("For the minimum value v, if we can divide the chocolate into k parts where k >= n+1 and each parts has sweetness >= v. This v would be a possible value.")]),t._v(" "),a("p",[t._v("Though this v would be a valid value, i.e. there might not a part that has exactly v sweetness, but the result we are looking for must be a valid value. And it must be the greatest valid value. Because if there exists a valid value that is greater than the result value, than for the result value, there would be some left-over chocolet and we can add to this value. Which contradict with the assumption. Therefore, the max valid value would be our result.")]),t._v(" "),a("p",[t._v("There is one more step for this, since this valid value is in the range of [min(sweetness), sum(sweetness)//(K+1)], the fastest method to locate this value would be binary search.")]),t._v(" "),a("p",[t._v("So we have the following solution:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maximizeSweetness")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            curSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                curSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" each\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" curSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                    curSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" right\n")])])]),a("p",[t._v("Time Complexity: "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("g")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("S")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("K")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(nlog(S/(K+1)))")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("o")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),a("span",{staticClass:"mord"},[t._v("/")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")))")])])])]),t._v(" where n is the length of the chocolate, and S is the sweetness sum.")]),t._v(" "),a("h1",{attrs:{id:"_2064-minimized-maximum-of-products-distributed-to-any-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2064-minimized-maximum-of-products-distributed-to-any-store"}},[t._v("#")]),t._v(" 2064. Minimized Maximum of Products Distributed to Any Store")]),t._v(" "),a("p",[t._v("Question link is "),a("a",{attrs:{href:"https://leetcode.com/contest/weekly-contest-266/problems/minimized-maximum-of-products-distributed-to-any-store/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here")])]),t._v(" "),a("h3",{attrs:{id:"question-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#question-2"}},[t._v("#")]),t._v(" Question")]),t._v(" "),a("p",[t._v("You are given an integer "),a("code",[t._v("n")]),t._v(" indicating there are "),a("code",[t._v("n")]),t._v(" specialty retail stores. There are "),a("code",[t._v("m")]),t._v(" product types of varying amounts, which are given as a "),a("strong",[t._v("0-indexed")]),t._v(" integer array "),a("code",[t._v("quantities")]),t._v(", where "),a("code",[t._v("quantities[i]")]),t._v(" represents the number of products of the "),a("code",[t._v("ith")]),t._v(" product type.")]),t._v(" "),a("p",[t._v("You need to distribute "),a("strong",[t._v("all products")]),t._v(" to the retail stores following these rules:")]),t._v(" "),a("ul",[a("li",[t._v("A store can only be given "),a("strong",[t._v("at most one product type")]),t._v(" but can be given "),a("strong",[t._v("any")]),t._v(" amount of it.")]),t._v(" "),a("li",[t._v("After distribution, each store will be given some number of products (possibly "),a("code",[t._v("0")]),t._v("). Let "),a("code",[t._v("x")]),t._v(" represent the maximum number of products given to any store. You want "),a("code",[t._v("x")]),t._v(" to be as small as possible, i.e., you want to "),a("strong",[t._v("minimize")]),t._v(" the "),a("strong",[t._v("maximum")]),t._v(" number of products that are given to any store.")])]),t._v(" "),a("p",[t._v("Return "),a("em",[t._v("the minimum possible")]),t._v(" "),a("code",[t._v("x")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Example 1:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: n = 6, quantities = [11,6]\nOutput: 3\nExplanation: One optimal way is:\n- The 11 products of type 0 are distributed to the first four stores in these amounts: 2, 3, 3, 3\n- The 6 products of type 1 are distributed to the other two stores in these amounts: 3, 3\nThe maximum number of products given to any store is max(2, 3, 3, 3, 3, 3) = 3.\n")])])]),a("p",[a("strong",[t._v("Example 2:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: n = 7, quantities = [15,10,10]\nOutput: 5\nExplanation: One optimal way is:\n- The 15 products of type 0 are distributed to the first three stores in these amounts: 5, 5, 5\n- The 10 products of type 1 are distributed to the next two stores in these amounts: 5, 5\n- The 10 products of type 2 are distributed to the last two stores in these amounts: 5, 5\nThe maximum number of products given to any store is max(5, 5, 5, 5, 5, 5, 5) = 5.\n")])])]),a("p",[a("strong",[t._v("Example 3:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: n = 1, quantities = [100000]\nOutput: 100000\nExplanation: The only optimal way is:\n- The 100000 products of type 0 are distributed to the only store.\nThe maximum number of products given to any store is max(100000) = 100000.\n")])])]),a("h3",{attrs:{id:"solution-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-2"}},[t._v("#")]),t._v(" Solution")]),t._v(" "),a("p",[t._v("Binary Search")]),t._v(" "),a("p",[t._v("Similiar to the problem above, we are also trying the find some value in some range.")]),t._v(" "),a("p",[t._v("This time, the value we are looking for is the minimized of maximum value.")]),t._v(" "),a("p",[t._v("For each value v, we just need to find if all store stores at most v amount of product, how many stores we would need. And the result value is the minimum value we can find.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimizedMaximum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quantities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quantities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n            cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" quantities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" mid\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" left\n        \n")])])]),a("p",[t._v("Time Complexity: "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("g")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(nlog(s))")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("o")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mclose"},[t._v("))")])])])]),t._v(" where n is the length of quantities, and s is the max value in quantities.")])])}),[],!1,null,null,null);s.default=n.exports}}]);