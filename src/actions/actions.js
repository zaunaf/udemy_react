// File ini berisikan action beserta datanya (sementara dummy)
// Action adalah aksi perubahan data, yang
// kelak mentrigger fungsi2 reducers untuk mengubah state
export const BLOG_POST_LIST = 'BLOG_POST_LIST';
export const BLOG_POST_LIST_ADD = 'BLOG_POST_LIST_ADD';

export const blogPostList = () => ({
    type: BLOG_POST_LIST,
    data: [
        {
            id: 1,
            title: 'First post'
        },
        {
            id: 2,
            title: 'Second post'
        }
    ]
});

export const blogPostAdd = () => ({
    type: BLOG_POST_LIST_ADD,
    data: {
        id: Math.flooer(Math.random() * 100),
        title: "A newly created blogpost"
    }
});