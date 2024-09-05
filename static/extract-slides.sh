
mkdir -p scientific-discovery-frames
mkdir -p pysr-frames
mkdir -p lasr-frames
mkdir -p results-frames

# pdf2svg
# extract slides 2->7 in a folder scientific-discovery-frames/{0->5}.svg
for i in {2..8}; do
    pdf2svg lasr-slides.pdf scientific-discovery-frames/$((i-1)).svg $i
done

# pdf2svg
for i in {12..13}; do
    pdf2svg lasr-slides.pdf pysr-frames/$((i-11)).svg $i
done

# pdf2svg
# extract slides 15->30 in a folder called lasr-frames/{0->15}.svg
for i in {15..29}; do
    pdf2svg lasr-slides.pdf lasr-frames/$((i-14)).svg $i
done


# pdf2svg
# extract slides 30->36 in a folder called results-frames/{0->6}.svg
for i in {30..35}; do
    pdf2svg lasr-slides.pdf results-frames/$((i-29)).svg $i
done