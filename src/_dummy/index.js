import DummyPosts from "./posts";
import DummyTags from "./tags";

export default {
    init: () => {
        localStorage.clear();
        DummyPosts.init();
        DummyTags.init();
    }
}