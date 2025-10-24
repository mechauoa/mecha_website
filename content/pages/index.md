---
title: Home
slug: /
sections:
  - type: CarouselSection
    subtitle: ''
    items:
      - type: FeaturedItem
        title: What is MECHA?
        tagline: Welcome
        subtitle: We are the Mechanical and Mechatronics Student Association at UoA.
        text: |+
          Blurb here about our club

        image:
          type: ImageBlock
          url: /images/MECHA LOGO SALMONELLA.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
        actions: []
        colors: bg-light-fg-dark
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
      - type: FeaturedItem
        title: yay
        tagline: A Message from our Presidents
        subtitle: Ella and Sasha
        text: |+
          Hihihi

        image:
          type: ImageBlock
          url: /images/img-placeholder-dark.png
          altText: Jane Doe
          styles:
            self:
              borderRadius: full
        actions: []
        colors: bg-dark-fg-light
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
            margin:
              - mt-20
              - mb-16
    variant: tabs-nav
    colors: bg-dark-fg-light
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 50
      url: /images/IMG_0859.JPG
  - type: FeaturedItemsSection
    title:
      text: Our Mission
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: >-
      As the Student Association for Mechanical and Mechatronics Students, we
      aim to support students to excel in their chosen specialisation, and equip
      them with valuable skills and lifelong connections.
    items:
      - type: FeaturedItem
        title: Industry Events
        subtitle: Numbers Done
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        actions: []
        elementId: null
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
        image:
          type: ImageBlock
          altText: Lightning bolt symbol on red background
          elementId: ''
          url: /images/icon1.svg
          styles:
            self:
              borderRadius: x-large
      - title: Masterclasses & Workshops
        subtitle: The Job Stuff
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/icon2.svg
          altText: Featured icon two
          elementId: ''
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
            justifyContent: center
        type: FeaturedItem
      - title: Social Events
        subtitle: Faster
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/icon3.svg
          altText: Featured icon three
          elementId: ''
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
      - type: FeaturedItem
        title: Student Support
        subtitle: Creating a safe and inclusive community
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          type: ImageBlock
          url: /images/icon1.svg
          altText: Placeholder text
          elementId: ''
          styles:
            self:
              borderRadius: x-large
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
    actions:
      - label: See our Prospectus for more on our mission!
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    badge:
      label: What is mecha about?
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    elementId: ''
    variant: two-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  - subtitle: Our Sponsors for 2025
    images:
      - url: /images/beca small.jpg
        altText: Beca logo
        type: ImageBlock
        styles:
          self:
            margin:
              - ml-0
              - mr-0
      - url: /images/Crown-Grey-Logo.jpg
        altText: Crown logo
        type: ImageBlock
        styles:
          self:
            margin:
              - ml-96
              - mr-96
      - url: /images/fph.jpg
        altText: FPH logo
        type: ImageBlock
        styles:
          self:
            margin:
              - ml-96
              - mr-96
      - url: /images/jane street.jpg
        altText: Sanity logo
        type: ImageBlock
        styles:
          self:
            margin:
              - ml-96
              - mr-96
      - type: ImageBlock
        url: /images/jacobs.png
        altText: Image alt text placeholder
        elementId: ''
        styles:
          self:
            borderRadius: medium
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: ImageGallerySection
  - posts:
      - content/pages/blog/case-study-1.md
    showThumbnail: true
    showDate: true
    showAuthor: true
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
    type: FeaturedPostsSection
    hoverEffect: move-up
    title:
      type: TitleBlock
      text: Recent Events
      color: text-primary
      styles:
        self:
          textAlign: center
          fontWeight: 400
seo:
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
