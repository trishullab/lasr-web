
mkdir -p scientific-discovery-frames
mkdir -p pysr-frames
mkdir -p lasr-frames
mkdir -p results-frames

PDF=lasr-slides-frames.pdf
# pdf2svg
# extract slides 2->7 in a folder scientific-discovery-frames/{0->5}.svg
for i in {1..8}; do
    pdf2svg ${PDF} scientific-discovery-frames/$((i)).svg $i
done

# pdf2svg
for i in {11..12}; do
    pdf2svg ${PDF} pysr-frames/$((i-10)).svg $i
done

# pdf2svg
# extract slides 15->30 in a folder called lasr-frames/{0->15}.svg
for i in {14..26}; do
    pdf2svg ${PDF} lasr-frames/$((i-13)).svg $i
done


# pdf2svg
# extract slides 30->36 in a folder called results-frames/{0->6}.svg
for i in {27..33}; do
    pdf2svg ${PDF} results-frames/$((i-26)).svg $i
done