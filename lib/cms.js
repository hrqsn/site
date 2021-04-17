// set client
const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function parseSlug({ fields }) {
  return {
    slug: fields.slug,
  }
}

/**
 * Writing
 */

// get all posts
export async function getWritings () {
  const entries = await client.getEntries({
    content_type: 'blog',
    order: '-fields.date'
  })
  if (entries.items) {
    return entries.items
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// get a post by slug
export async function getWritingBySlug (slug) {
  const entries = await client.getEntries({
    content_type: 'blog',
    limit: 1,
    'fields.slug': slug
  })
  if (entries.items) {
    return entries.items[0]
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// get more 8 latest posts
export async function getRecentWritings (slug) {
  const entries = await client.getEntries({
    content_type: 'blog',
    limit: 8,
    order: '-fields.date',
    'fields.slug[nin]': slug
  })

  if (entries.items) {
    return entries.items
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}

function parseWritingSlugEntries(entries, cb = parseSlug) {
  return entries?.items?.map(cb);
}

// get all slugs of posts
export async function getAllWritingsWithSlug() {
  const entries = await client.getEntries({
    content_type: "blog",
    select: "fields.slug",
  });
  return parseWritingSlugEntries(entries, (post) => post.fields);
}

/**
 * Projects
 */

// get all posts
export async function getProjects () {
  const entries = await client.getEntries({
    content_type: 'project',
    order: '-fields.date'
  })
  if (entries.items) {
    return entries.items
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// get a post by slug
export async function getProjectBySlug (slug) {
  const entries = await client.getEntries({
    content_type: 'project',
    limit: 1,
    'fields.slug[in]': slug
  })
  if (entries.items) {
    return entries.items[0]
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// get more 8 latest posts
export async function getRecentProjects (slug) {
  const entries = await client.getEntries({
    content_type: 'project',
    limit: 8,
    'fields.slug[nin]': slug,
    order: '-fields.date'
  })

  if (entries.items) {
    return entries.items
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}

function parseProjectSlugEntries(entries, cb = parseSlug) {
  return entries?.items?.map(cb);
}

// get all slugs of posts
export async function getAllProjectsWithSlug() {
  const entries = await client.getEntries({
    content_type: "project",
    select: "fields.slug",
  });
  return parseProjectSlugEntries(entries, (post) => post.fields);
}
