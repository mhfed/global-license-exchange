import { type StructureResolver } from 'sanity/structure';

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts by Locale')
        .child(
          S.list()
            .title('Posts by Locale')
            .items([
              S.listItem()
                .title('🇻🇳 Vietnamese Posts')
                .child(
                  S.documentList()
                    .title('Vietnamese Posts')
                    .filter('_type == "post" && locale == "vi"')
                ),
              S.listItem()
                .title('🇺🇸 English Posts')
                .child(
                  S.documentList()
                    .title('English Posts')
                    .filter('_type == "post" && locale == "en"')
                ),
              S.listItem()
                .title('📝 All Posts')
                .child(
                  S.documentList()
                    .title('All Posts')
                    .filter('_type == "post"')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Authors')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .child(S.documentTypeList('category').title('Categories')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['post', 'author', 'category'].includes(listItem.getId() as string)
      ),
    ]);

export default deskStructure; 