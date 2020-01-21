import DummyPosts from "./posts";
import DummyTags from "./tags";
import DummyCategory from "./categories";
export default {
    init: () => {
        localStorage.clear();
        DummyPosts.init();
        DummyTags.init();
        DummyCategory.init();
    }
}