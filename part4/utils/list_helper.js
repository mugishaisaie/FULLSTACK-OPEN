// const _ = require("lodash")
const _ = require('lodash')
const dummy =(blogs)=>{
    return 1;
}

const totalLikes =(blogs)=>{
    return blogs.reduce((sum,blog)=>sum + blog.likes,0);
}

const favoriteBlog =(blogs)=>{
    let favorite = blogs[0]

    blogs.forEach(blog => {
        if(blog.likes > favorite.likes){
            favorite = blog
        }
    });
    return favorite;
}

// const mostBlogs =blogs=>{
//     if(blogs.length === 0)return null;
//     const counts ={};

//     blogs.forEach((blog)=>{
//         counts[blog.author] = (counts[blog.author] || 0) +1
//     })

//     let topAuthor = null;
//     let maxBlogs = 0;

//     for (const author in counts){
//         if(counts[author]> maxBlogs){
//             topAuthor= author;
//             maxBlogs=counts[author]
//         }

//     }

//     return {
//         topAuthor,
//         maxBlogs
//     }

// }

const mostBlogs = blogs =>{
    if(blogs.length === 0)return null;

    const grouped = _.groupBy(blogs,'author');
    const formatted = _.map(grouped,(items, author)=>({
        topAuthor:author,
        maxBlogs:items.length
    }));
return _.maxBy(formatted,'maxBlogs')
}

const mostLikes = blogs=>{
    if(blogs.length === 0) return null;
    const likesByAuthor = {};

    blogs.forEach((blog)=>{
        likesByAuthor[blog.author] = (likesByAuthor[blog.author]|| 0) + blog.likes
    })

    let topAuthor= null;
    let maxLikes = 0;

    for (const author in likesByAuthor){
        if(likesByAuthor[author]> maxLikes){
            maxLikes = likesByAuthor[author];
            topAuthor = author;
            console.log(author,":",maxLikes)
        }
    }
    return {author:topAuthor,likes:maxLikes}
}




module.exports = {
    dummy,totalLikes,favoriteBlog,mostBlogs,mostLikes
};


