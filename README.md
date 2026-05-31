# Wordle Card

## About

This is the first score card design for the game. The current version is intentionally simple and consists of four main elements:

### 1. Title

The title used across all cards is **"Game Score"**.

### 2. Profile Picture

Displays the user's profile picture.

### 3. Score SVG

An SVG component used to visually represent the game's rating using progress rings.

The SVG contains three main components:

#### 3.1 Background Ring

A grey-stroked ring that represents the unfilled portion of the score.

#### 3.2 Fill Ring

A dynamic ring whose perimeter fill and stroke are updated via JavaScript based on the game's rating.

#### 3.3 Rating

Displays the numerical rating for the game.

### 4. Quote

A quote generated using a simple algorithm based on the game's rating.
