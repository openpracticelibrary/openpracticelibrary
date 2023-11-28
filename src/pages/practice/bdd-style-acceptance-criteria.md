---
templateKey: practice-page
title: BDD Style Acceptance Criteria
subtitle: Ensure the development work meets the user's needs and expectations by
  writing clear acceptance criteria for user stories.
date: 2023-11-28T03:07:28.168Z
authors:
  - antonysallas
tags:
  - measure
mobiusTag: delivery
icon: https://github.com/openpracticelibrary/opl-media/blob/master/images/Needs%20an%20Image.png?raw=true
whatIs: >-
  B﻿DD Style Acceptance Criteria is an approach to write clear acceptance
  criteria for user stories in Agile using a Domain Specific Language (DSL) that
  is based on the Behaviour-Driven Development practices.


  I﻿n Agile, user stories are written in a way that focuses on the expected behaviour of a feature from the user's perspective.


  BDD-style acceptance criteria writing leads to a clearer understanding of what a feature should do, how it should behave, and under what conditions. This clarity helps to ensure that the development work meets the user's needs and expectations.
whyDo: >-
  **Benefits of BDD-Style Acceptance Criteria:**


  * The **Given-When-Then** format leaves little room for misunderstandings making the acceptance criteria **clear and unambiguous.**

  * The criteria can often be directly transformed into **automated tests**.

  * This approach keeps the focus on the end-user and the real-world scenarios they encounter, emphasising the **user experience and outcomes.**

  * BDD encourages **collaboration** among stakeholders, including developers, testers, and business representatives, to ensure a **shared understanding** of the requirements and expected behaviours.
howTo: >-
  **Structure of Acceptance Criteria**


  * **Given**\
    Describes the initial context of the system—the **state of the world before** the behaviour of the feature kicks in.
  * **When**\
    Specifies the key action or event that **triggers** the behaviour.
  * **Then**\
    Describes the **expected outcome or state after** the When step has been executed.

  Let's consider the user story about a user logging into a system. The acceptance criteria might look like this:


  **Given** the user is on the login page\

  **When** the user enters a valid username and password\

  **Then** the user is taken to their dashboard.


  **M﻿ore Examples:**


  #### User Updating Profile Information


  **U﻿ser Story**


  As a registered user\

  I want to update my profile information\

  so that I can keep my personal details current.


  **Acceptance Criteria**


  **Given** the user is logged in and on their profile page\

  **When** the user enters new details in the profile fields\

      **And** clicks the 'Save Changes' button\

  **Then** the user's profile is updated with the new details\

      **And** a confirmation message is displayed


  #### User Searching for Products


  **U﻿ser Story**\

  \

  As a customer\

  I want to search for products\

  so that I can easily find what I am looking for.


  **Acceptance Criteria**


  **Given** the user is on the homepage\

  **When** the user enters a search term in the search bar\

      **And** selects a specific category from the dropdown\

  **Then** the user is presented with products matching the search term in the selected category\

      **And** each product displays its price and a 'Add to Cart' button.


  #### User Completing a Multi-Step Checkout Process


  **U﻿ser Story**


  As an online shopper\

  I want to complete my purchase through a checkout process\

  so that I can receive the products I selected


  **Acceptance Criteria**


  **Given** the user has items in their shopping cart\

  **When** the user clicks on the 'Checkout' button\

      **And** enters payment details\

      **And** reviews and confirms the order\

  **Then** the order is processed\

      **And** a confirmation email is sent to the user's email address\

      **And** the user is redirected to a confirmation page with the order summary
participants: []
---
