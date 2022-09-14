## PreviewGallery

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## Description
Angular library for previewing photos before uploading.

# Usage
copy this code to your project

app.component.html:
```
  <button preview-btn>Add image</button>
  <ngx-preview-gallery (images)="showImgs($event)"></ngx-preview-gallery>
```

app.component.ts:
```
  showImgs(imgs: Array<PreviewImage>)) {
    imgs.forEach(img => {
      console.log(img.path)
    })
  }
```

## Steps

1. **npm i preview-gallery**
2. **Import module "PreviewGalleryModule" into the "app.module"**

```
@NgModule({
  ...
  imports: [
    PreviewGalleryModule,
  ]
})
```

3. **Add directive "preview-btn" to your button**

```
  <button preview-btn>Add image</button>
```

4. **Place tag "ngx-preview-gallery", where you want to see the preview panel**

```
  <button preview-btn>Add image</button>
  <ngx-preview-gallery></ngx-preview-gallery>
```

5. **click on button and choose an image**

6. **finally you can get your images by listening to the "images" event**

app.component.html:
```
  <button preview-btn>Add image</button>
  <ngx-preview-gallery (images)="showImgs($event)"></ngx-preview-gallery>
```

app.component.ts:
```
  showImgs(imgs: Array<PreviewImage>)) {
    imgs.forEach(img => {
      console.log(img.path)
    })
  }
```
