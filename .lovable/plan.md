

# Hero Section Touch-Up Plan

## Changes Required

### 1. Header Updates
- Add "Any Question" label above the phone number
- Wrap the phone section in a bordered box to match the reference
- Add a dark/light mode toggle (moon/sun icon) on the far right side of the page (fixed position)

### 2. Hero Image Layout (Major Change)
The current implementation uses 3 small overlapping images positioned absolutely. The reference shows these images much larger, filling the entire right half of the viewport and extending to the edge.
- Remove rounded corners from images
- Make images significantly larger to fill the right column completely
- Overlap them so they form one cohesive visual covering the right side
- Remove hover scale effect (the reference doesn't show this)
- Ensure images extend to the right edge of the viewport (break out of container)

### 3. Headline Text
- Add a period at the end: "Web Design and Marketing for Growing Businesses."

### 4. Disclaimer Text
- Make "DIGITAL AUDIT" bold and underlined (currently plain text)

### 5. Rotating Circle Repositioning
- Move the rotating "SCALE . STRATEGY . DESIGN" circle to the bottom-center of the hero, overlapping the boundary between the left content and right images
- Make circle slightly larger with white text on a semi-transparent or dark background

### 6. Overall Layout
- Use a full-width layout where the right image area breaks out of the container and extends to the viewport edge
- Ensure the left text content has proper padding/margins matching the reference

## Files to Modify
- `src/components/HeroSection.tsx` -- image layout, headline, disclaimer, circle position
- `src/components/Header.tsx` -- "Any Question" label and bordered phone box

