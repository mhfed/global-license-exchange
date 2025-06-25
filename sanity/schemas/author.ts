import { defineType } from 'sanity';
import { User } from 'lucide-react';

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: User,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});

export default author; 