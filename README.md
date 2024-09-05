# www-lasr

This is the repository that contains source code for the [website for LaSR](https://github.com/trishullab/lasr.jl).

This is the general workflow I follow to convert a slide deck into a scrollytelling website:

1. Open `static/lasr-slides.pptx` and edit the slide deck.
2. Export the slide deck as a PDF file `static/lasr-slides.pdf`.
3. `brew install pdf2svg` and then run `static/extract-slides.sh` which defines the logic to extract each slide into folders with relevant frames (`static/scientific-discovery-frames/`, `static/pysr-frames/`, `static/lasr-frames/`)
4. Open `index.html` and edit the content to match the slide deck. Here is how the directory of frames integrates into a scrollytelling section:
  ```html
<section class="section">
  <div class="container">
    <h2 class="title is-2">Heading</h2>
    <!-- ID helps scrollama identify which section to update -->
    <div class="columns is-centered" id="pysr">
      <div class="column is-max-mobile is-max-tablet is-max-desktop is-max-widescreen article">
        <h3 class="title is-size-6-mobile is-size-4-tablet">Sketch of PySR's search space</h3>
        <div class="content is-size-7-mobile is-size-6-tablet has-text-left step">
        ...
        </div>
        <!-- More sections like this for each image. -->
      </div>
      <!-- Image. -->
      <div class="column content">
        <!-- Change to point to the correct folder. -->
        <img src="static/pysr-frames/1.svg" id="updateableFigure" loading="eager">
      </div>
    </div>
  </div>
</section>

<!-- More sections like this for each slide. -->
<!-- At the end -->
<script>
  // Use mobile layout.
  mobileCorrections();
  // Init scrollable sections.
  init("#scientific-discovery");
  // This is the ID of the section we just defined.
  init("#pysr");
  init("#lasr-learning-loop");
  init("#lasr-results");
</script>
  ```