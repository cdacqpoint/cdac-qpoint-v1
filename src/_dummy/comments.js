import { random } from "../_helpers/random";
export default {
    init: () => {
        localStorage.setItem('comments', JSON.stringify([
            {
                _id: random(25),
                status: "published",
                post: "eff3580a6d7c412e922177394851591e",
                upvotes:105,
                desc: "<p>If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app to ensure that npx always uses the latest version.</p><p>Use either one of the below commands:</p><ul><li>npx create-react-app my-app</li><li>npm init react-app my-app</li><li>yarn create react-app my-app</li></ul>",
                createdAt: "2020-01-18T20:14:10.743+00:00",
                modifiedAt: "2020-01-18T20:14:10.743+00:00"
            },
            {
                _id: random(25),
                status: "published",
                post: "eff3580a6d7c412e922177394851591e",
                upvotes:15,
                desc: `<p>From the <a href="https://mongoosejs.com/docs/validation.html" rel="noreferrer">docs</a></p>            <p>Mongoose has several inbuilt validators. Strings have <strong>enum</strong> as one of the validators.            So enum creates a validator and checks if the value is given in an array.            E.g:</p><code><span class="kwd">var</span><span class="pln"> userSchema </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> mongooseSchema</span><span class="pun">({</span><span class="pln">               userType</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">                    type</span><span class="pun">:</span><span class="pln"> </span><span class="typ">String</span><span class="pun">,</span><span class="pln">                    </span><span class="kwd">enum</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'user'</span><span class="pun">,</span><span class="str">'admin'</span><span class="pun">],</span><span class="pln">                    </span><span class="kwd">default</span><span class="pun">:</span><span class="pln"> </span><span class="str">'user'</span><span class="pln">                </span><span class="pun">},</span><span class="pln">            </span><span class="pun">})</span><span class="pln">            </span></code>`,
                createdAt: "2020-01-18T20:14:10.750+00:00",
                modifiedAt: "2020-01-18T20:14:10.750+00:00"
            },
        ]))
    }
}


