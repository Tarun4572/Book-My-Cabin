import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabin(newCabin) {
  // https://nvtxlhxlxqmrahvlazgs.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);
  if (error) {
    console.error("Cabins could not be deleted");
    throw new Error("Cabins could not be deleted");
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    const { data, error } = await supabase.from("cabins").delete("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete("id", id);

  if (error) {
    console.error("Cabins could not be deleted");
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
