---
type: PageLayout
title: Our Values
sections:
  - type: CarouselSection
    subtitle: This is a subtitle
    items:
      - type: FeaturedItem
        title: Our Pillars blah blah
        tagline: Testimonial 1
        subtitle: 'Maria Walters, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          type: ImageBlock
          url: /images/person-placeholder-light.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
    variant: dots-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: Industry
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Connecting with industry beyond University.
    text: >+
      MECHA supports students in both their personal and professional
      development, creating opportunities for meaningful connections and growth
      that prepare them to enter the engineering industry with confidence.

    actions:
      - type: Button
        label: Get started
        url: /
        icon: arrowRight
        iconPosition: right
        style: secondary
      - type: Link
        label: See Tutorials
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    badge:
      type: Badge
      label: This is a badge
      color: text-primary
      styles:
        self:
          textAlign: center
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        justifyContent: center
        flexDirection: row
      subtitle:
        textAlign: center
  - type: ImageGallerySection
    subtitle: Our customers
    images:
      - type: ImageBlock
        url: /images/empathy-logo.svg
        altText: Empathy logo
        elementId: ''
      - type: ImageBlock
        url: /images/wellster-logo.svg
        altText: Wellster logo
        elementId: ''
      - type: ImageBlock
        url: /images/vise-logo.svg
        altText: Vise logo
        elementId: ''
      - type: ImageBlock
        url: /images/telus-logo.svg
        altText: Telus logo
        elementId: ''
      - type: ImageBlock
        url: /images/contenful-logo.svg
        altText: Contentful logo
        elementId: ''
      - type: ImageBlock
        url: /images/sanity-logo.svg
        altText: Sanity logo
        elementId: ''
      - type: ImageBlock
        url: /images/rangle-logo.svg
        altText: Rangle logo
        elementId: ''
    elementId: ''
    motion: static
    colors: bg-light-fg-dark
    styles:
      self:
        margin:
          - mt-0
          - ml-0
          - mb-0
          - mr-0
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
slug: ourvalues
isDraft: false
seo:
  type: Seo
  metaTitle: Landing Page
  metaDescription: Write here your new page's description including most relevant keywords.
  addTitleSuffix: true
  socialImage: /images/main-hero.jpg
  metaTags: []
---
