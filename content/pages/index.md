---
title: Home
slug: /
sections:
  - type: CarouselSection
    subtitle: ''
    items:
      - type: FeaturedItem
        title: Who are we?
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
        title: Connecting with Industry
        subtitle: ''
        text: |
          Events like Speed Interview
        actions: []
        elementId: null
        colors: bg-dark-fg-light
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
          url: /images/network.png
          styles:
            self:
              borderRadius: x-large
              margin:
                - ml-2
                - mt-4
                - mr-6
      - title: Masterclasses & Workshops
        subtitle: ''
        text: >
          Learn new skills and put classroom theory to practical use in our
          workshop classes and build events!
        image:
          url: /images/book.png
          altText: Featured icon two
          elementId: ''
          type: ImageBlock
          styles:
            self:
              margin:
                - ml-2
                - mt-4
                - mr-6
        actions: []
        colors: bg-dark-fg-light
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
        subtitle: ''
        text: >
          A fun community always makes your studies a lot lighter! Through
          events like Cocktail Night, and Sports Tournaments we provide
          opportunities to meet new people, and make lots of lasting memories.
        image:
          url: /images/user.png
          altText: Featured icon three
          elementId: ''
          type: ImageBlock
          styles:
            self:
              margin:
                - ml-2
                - mt-4
                - mr-6
        actions: []
        colors: bg-dark-fg-light
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            margin:
              - mb-7
        type: FeaturedItem
      - type: FeaturedItem
        title: Student Support
        subtitle: ''
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          type: ImageBlock
          url: /images/clap.png
          altText: Placeholder text
          elementId: ''
          styles:
            self:
              borderRadius: x-large
              margin:
                - mr-6
                - mt-4
                - ml-2
        actions: []
        colors: bg-dark-fg-light
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
            margin:
              - mb-7
              - mr-0
    actions:
      - label: See our Values page for more on our mission!
        altText: ''
        url: /ourvalues
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
  - type: GenericSection
    title:
      type: TitleBlock
      text: ''
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: >-
      A membership with us allows to connect with so many like-minded engineers
      and professionals in the indsutry.
    text: >
      Sign up below, and collect a sticker from one of our friendly execs at the
      next event.
    actions:
      - type: Button
        label: Sign up to be a member here!
        url: /
        icon: arrowRight
        iconPosition: right
        style: secondary
      - type: Link
        label: What does uni with MECHA look like?
        url: /events
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    media:
      type: ImageBlock
      altText: Fun feature preview
    badge:
      type: Badge
      label: JOIN us today!
      color: text-primary
      styles:
        self:
          textAlign: center
    colors: bg-neutral-fg-dark
    styles:
      self:
        alignItems: flex-start
        justifyContent: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
  - subtitle: Our Sponsors for 2025
    images:
      - type: ImageBlock
        url: /images/beca-resized.png
        altText: Image alt text placeholder
        elementId: ''
        styles:
          self:
            borderRadius: medium
      - type: ImageBlock
        url: /images/fph-resized.jpg
        altText: Image alt text placeholder
        elementId: ''
        styles:
          self:
            borderRadius: medium
      - type: ImageBlock
        url: /images/crown-resized.jpg
        altText: Image alt text placeholder
        elementId: ''
        styles:
          self:
            borderRadius: medium
      - type: ImageBlock
        url: /images/jnst-resized.png
        altText: Image alt text placeholder
        elementId: ''
        styles:
          self:
            borderRadius: medium
      - type: ImageBlock
        url: /images/jacobs-resized.png
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
      - content/pages/blog/case-study-3.md
      - content/pages/blog/staff-vs-student-sem22025.md
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
