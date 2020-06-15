const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
  {
    'title': 'A First Blog Post',
    'author': 'Foo',
    'url': 'http://google.com/',
    'likes': 10
  },
  {
    'title': 'A Second Blog Post',
    'author': 'Bar',
    'url': 'http://yahoo.com/',
    'likes': 1
  }
]

beforeEach(async () => {
  Blog.deleteMany({})

  initialBlogs.map(blog => {
    const blogObject = new Blog(blog)
    blogObject.save()
  })
})

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('specific blog is in the response', async () => {
  const response = await api.get('/api/blogs')

  const contents = response.body.map(r => r.url)

  expect(contents).toContain(
    'http://google.com/'
  )
})

afterAll(() => {
  mongoose.connection.close()
})