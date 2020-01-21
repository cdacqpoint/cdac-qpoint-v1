import DummyPosts from "./posts";
import DummyTags from "./tags";
import DummyCategory from "./categories";
import DummyComments from "./comments";

export default {
    init: () => {
        localStorage.clear();
        DummyPosts.init();
        DummyTags.init();
        DummyCategory.init();
        DummyComments.init();
    }
}