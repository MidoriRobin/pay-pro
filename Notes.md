# Project outline

## Client Specification

    - Enter email
    - If its new take them to a payment screen
    - Accept payment
    - Then send them a link to view information
    - Link expires in an hour
    - If they have already paid generate a new link to view
    - Links have to be unique each
    - Tokens can be used to verify the session
    - Each link expires after an hour

## First steps - Outline pages and routes

### Routes/Pages

    - Splash
    - Payment
    - Old email
    - Information

## Second steps - Describe pages

    - Splash
        - Card View
        - Email Field
        - Submission Button
        - (Optional) Simple BG
    - Payment
        - Relevant fields accepting payment info
        - Submission Button
        - Load modal
        - Success modal (or go to new page?)
    - Payment Success
        - Card describing success
        - Continue button
        - Section describing next steps (link sent to email)
    - Old Email
        - Card describing next steps (link sent to email)
    - Information
        - Card describing service
        - Next steps

## Third Steps - Derive Components

    -[x] Splash
        - Card Comp
        - Form Comp
        - Button Comp
    -[x] Payment
        - Large Form
        - Button Comp
        - Modal Comp
    -[x] Success
        - Card Comp
        - Button Comp
    - Old
        - Card Comp
    - Information
        - Card Comp

## Fourth Steps - Outline Design

![Figma Screens](https://www.figma.com/file/IE4OOOnmaeJXu1u8bCxopi/Pay-Pro?node-id=0%3A1)
