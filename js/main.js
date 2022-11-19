'use strict';

const navWrite = document.getElementById('navWrite');
const navBlog = document.getElementById('navBlog');
const navPhoto = document.getElementById('navPhoto');

const blank = document.getElementById('blank');
const write = document.getElementById('write');
const blog = document.getElementById('blog');
const photo = document.getElementById('photo');

{
  navWrite.addEventListener('mouseover', () => {
    if (write.classList.contains('hidden') === true) {
      write.classList.remove('hidden');
    }
    if (blank.classList.contains('hidden') === false) {
      blank.classList.add('hidden');
    }
    if (blog.classList.contains('hidden') === false) {
      blog.classList.add('hidden');
    }
    if (photo.classList.contains('hidden') === false) {
      photo.classList.add('hidden');
    }
  });
}

{
  navBlog.addEventListener('mouseover', () => {
    if (blog.classList.contains('hidden') === true) {
      blog.classList.remove('hidden');
    }
    if (blank.classList.contains('hidden') === false) {
      blank.classList.add('hidden');
    }
    if (write.classList.contains('hidden') === false) {
      write.classList.add('hidden');
    }
    if (photo.classList.contains('hidden') === false) {
      photo.classList.add('hidden');
    }
  });
}

{
  navPhoto.addEventListener('mouseover', () => {
    if (photo.classList.contains('hidden') === true) {
      photo.classList.remove('hidden');
    }
    if (blank.classList.contains('hidden') === false) {
      blank.classList.add('hidden');
    }
    if (write.classList.contains('hidden') === false) {
      write.classList.add('hidden');
    }
    if (blog.classList.contains('hidden') === false) {
      blog.classList.add('hidden');
    }
  });
}