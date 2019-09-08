# Font Awesome 5 Pro toolkit

This toolkit requires that you have added the Font Awesome Pro package through yarn. This mixing allows for placing an icon either before or after using the variable names from the Font Awesome 5 Pro package.

The variable file is at: `node_modules/@fortawesome/fontawesome-pro/scss/_variables.scss`
But you can construct the var from the icons page as well the only difference is the addition of the __'var'__ to the variable name.

__Example:__ (from: https://fontawesome.com/icons/thumbs-up)
```html
<i class="far fa-thumbs-up"></i>
```
becomes
```scss
$fa-var-thumbs-up
```

The first parameter is the Font Awesome 5 Pro font style, in lower case (solid, regular, light, brand, duptone)
The second parameter is the variable.
The third option is weither to place the icon before or after. The default is after.


So the usage would go something like this:
```scss
@include fontawesome-icon('regular', $fa-var-thumbs-up, 'after');
```



The map has settings for all the available fonts in the library. It will only work if you have the fonts loaded into you main theme file.

- Solid
- Regular
- Light
- Duotone
- Brand
