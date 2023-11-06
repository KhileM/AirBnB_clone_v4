$(document).ready(function () {
  let selectedAmenities = {}; // Object to store selected amenities

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data("id");
    const amenityName = $(this).data("name");

    if (this.checked) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    // Update the h4 tag inside the div Amenities with the list of selected Amenities
    const amenitiesList = Object.values(selectedAmenities).join(", ");
    $(".popover h4").text(amenitiesList);
  });
});
