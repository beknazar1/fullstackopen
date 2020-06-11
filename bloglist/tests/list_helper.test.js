const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []
  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('when list has one blog', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]

    expect(listHelper.totalLikes(listWithOneBlog)).toBe(listWithOneBlog[0].likes)
  })

  test('empty list is zero likes', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('bigger list', () => {
    const list = []

    for (let i = 0; i < 6; i++) {
      list.push( { 'likes': i } )
    }

    expect(listHelper.totalLikes(list)).toBe(15)
  })

})