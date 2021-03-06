{$B-,J+,Q-,R-,T-,X+}
//*********************************************************************
// Main configuration file for (un)DelphiX
//*********************************************************************
{$IFDEF VER100}
  {$DEFINE VER3UP}
{$ENDIF}
{$IFDEF VER120}
  {$DEFINE VER4UP}
  {$DEFINE VER3UP}
{$ENDIF}
{$IFDEF VER130}
  {$DEFINE VER3UP}
  {$DEFINE VER4UP}
  {$DEFINE VER5UP}
{$ENDIF}
{$IFDEF VER140}
  {$DEFINE VER3UP}
  {$DEFINE VER4UP}
  {$DEFINE VER5UP}
  {$DEFINE VER6UP}
{$ENDIF}
{$IFDEF VER150}
  {$DEFINE VER3UP}
  {$DEFINE VER4UP}
  {$DEFINE VER5UP}
  {$DEFINE VER6UP}
  {$DEFINE VER7UP}
{$ENDIF}
{$IFDEF VER170}
  {$DEFINE VER3UP}
  {$DEFINE VER4UP}
  {$DEFINE VER5UP}
  {$DEFINE VER6UP}
  {$DEFINE VER7UP}
  {$DEFINE VER9UP}
{$ENDIF}
{$IFDEF VER180}
  {$DEFINE VER3UP}
  {$DEFINE VER4UP}
  {$DEFINE VER5UP}
  {$DEFINE VER6UP}
  {$DEFINE VER7UP}
  {$DEFINE VER9UP}
  {$DEFINE VER10UP}
  {$IFDEF VER185}
    {$DEFINE VER11UP}
  {$ENDIF}
{$ENDIF}
{$IFDEF VER200}
  {$DEFINE VER3UP}
  {$DEFINE VER4UP}
  {$DEFINE VER5UP}
  {$DEFINE VER6UP}
  {$DEFINE VER7UP}
  {$DEFINE VER9UP}
  {$DEFINE VER10UP}
  {$DEFINE VER11UP}
  {$DEFINE VER12UP}
{$ENDIF}
{$IFDEF VER210}
  {$DEFINE VER3UP}
  {$DEFINE VER4UP}
  {$DEFINE VER5UP}
  {$DEFINE VER6UP}
  {$DEFINE VER7UP}
  {$DEFINE VER9UP}
  {$DEFINE VER10UP}
  {$DEFINE VER11UP}
  {$DEFINE VER12UP}
  {$DEFINE VER14UP}
{$ENDIF}
{$IFDEF VER220}
  {$DEFINE VER3UP}
  {$DEFINE VER4UP}
  {$DEFINE VER5UP}
  {$DEFINE VER6UP}
  {$DEFINE VER7UP}
  {$DEFINE VER9UP}
  {$DEFINE VER10UP}
  {$DEFINE VER11UP}
  {$DEFINE VER12UP}
  {$DEFINE VER14UP}
  {$DEFINE VER15UP}  //Delphi XE
{$ENDIF}

{$IFDEF VER230}
  {$DEFINE VER3UP}
  {$DEFINE VER4UP}
  {$DEFINE VER5UP}
  {$DEFINE VER6UP}
  {$DEFINE VER7UP}
  {$DEFINE VER9UP}
  {$DEFINE VER10UP}
  {$DEFINE VER11UP}
  {$DEFINE VER12UP}
  {$DEFINE VER14UP}
  {$DEFINE VER15UP}
  {$DEFINE VER16UP} //Delphi XE2
{$ENDIF}

{$IFDEF VER100}
  // Delphi 3
  {$Define D3UP}
{$ENDIF}

{$IFDEF VER120}
  // Delphi 4
  {$Define D3UP}
  {$Define D4UP}
{$ENDIF}

{$IFDEF VER130}
  // Delphi 5
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
{$ENDIF}

{$IFDEF VER140}
  // Delphi 6
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
  {$Define D6UP}
{$ENDIF}

{$IFDEF VER150}
  // Delphi 7
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
  {$Define D6UP}
  {$Define D7UP}
{$ENDIF}

{$IFDEF VER170}
  // Delphi 9 - 2005
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
  {$Define D6UP}
  {$Define D7UP}
  {$Define D9UP}
{$ENDIF}

{$IFDEF VER180}
  // Delphi 10 - 2006 or Turbo
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
  {$Define D6UP}
  {$Define D7UP}
  {$Define D9UP}
  {$Define D10UP}
{$ENDIF}

{$IFDEF VER185}
  // Delphi 11 - 2007
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
  {$Define D6UP}
  {$Define D7UP}
  {$Define D9UP}
  {$Define D10UP}
  {$Define D11UP}
{$ENDIF}

{$IFDEF VER200}
  // Delphi 12 - 2009
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
  {$Define D6UP}
  {$Define D7UP}
  {$Define D9UP}
  {$Define D10UP}
  {$Define D11UP}
  {$Define D12UP}
{$ENDIF}

{$IFDEF VER210}
  // Delphi 14 - 2010
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
  {$Define D6UP}
  {$Define D7UP}
  {$Define D9UP}
  {$Define D10UP}
  {$Define D11UP}
  {$Define D12UP}
  {$Define D14UP}
  {$Define D_EE_UP}
{$ENDIF}

{$IFDEF VER220}
  // Delphi 15 - XE
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
  {$Define D6UP}
  {$Define D7UP}
  {$Define D9UP}
  {$Define D10UP}
  {$Define D11UP}
  {$Define D12UP}
  {$Define D14UP}
  {$Define D15UP}
  {$Define D_EE_UP}
{$ENDIF}

{$IFDEF VER230}
  // Delphi 16 - XE2
  {$Define D3UP}
  {$Define D4UP}
  {$Define D5UP}
  {$Define D6UP}
  {$Define D7UP}
  {$Define D9UP}
  {$Define D10UP}
  {$Define D11UP}
  {$Define D12UP}
  {$Define D14UP}
  {$Define D15UP}
  {$Define D16UP}
  {$Define D_EE_UP}
{$ENDIF}

{standard feature for drawing blend textures}
{this conditional is add-on as is for eliminate bad color key switching}
{$DEFINE DrawHWAcc}

{DirectX Double precision activation}
{$DEFINE DXDOUBLEPRECISION}

{when you can use this option, you must use separate headers unit }
{if this turn off, you use built-in standard DirectX.pas unit (in one file)}
{$IFDEF D_EE_UP} //Delphi 2010/XE
  {$DEFINE StandardDX}
{$ELSE}
  {.$DEFINE StandardDX}
{$ENDIF}

{Only one can be set!}
{Use standard of DirectX version 7}
{$IFNDEF D_EE_UP}
  {$DEFINE DX7}
{$ELSE}

{Use standard of DirectX version 9}
{in concert with StandardDX for separate units only}
  {$IFDEF StandardDX}
    {$DEFINE DX9}
  {$ENDIF}
{$ENDIF}

{for better texture compression can be use ZLIB here}
{in some Delphi versions it errors occurred because ZLib package is "lock-like" package}
{I recommend use it for final version application only}
{$IFDEF VER5UP} {Delphi 5 (and lower) has any problems with ZLIB, may be replace by 3rd party lib. manually}
  {$DEFINE DXTextureImage_UseZLIB}
{$ENDIF}
{when videotexture is used - like change images in texture}
{Note: it consume 2x more memory because texture is store twice unchanged and}
{changed - this conditional add/remove store shadow image in texture buffer}
{$IFDEF VER5UP} {Delphi 5 (and lower) has any problems with ZLIB, may be replace by 3rd party lib. manually}
  {$DEFINE VIDEOTEX}
{$ENDIF}

{software rendering based on Hori's DXR code}
{this option is only for remove all DXR code, is not recommended remove it}
{it can be remove only for special usage like use PURE DirectX for SW rendering too}
{$DEFINE DXR_deprecated}

{$IfDef DX7}
{Retained mode is turn off for Vista as implicit value}
{When you want use it, you have to add the D3DRM.DLL}
{is recommended put library into Windows/System32 system directory}
{in application directory does not works properly under Vista}
  {$Define D3D_deprecated} //both must be turn-on
  {.$Define D3DRM} //required D3DRM.DLL !!
  {for separete unit is DirectRM.pas required !! - it is not include in Delphi 2010/XE !!}
  {this class is deprecated; when you can it use, remove dot bellow}
  {this add additional component for D3D over DXDraw}
  {$IFDEF D3DRM}
    {$Define DX3D_deprecated}
  {$ENDIF}

{$ELSE}
   {$Define D3D_deprecated}
{$EndIf}

{$IFDEF VER12UP}
  {PNG support is added in Delphi 2009 and up as native feature}
  {there is turn on, it is for backward compatibility only}
  {$DEFINE PNG_GRAPHICS}
{$ELSE}
  {for Delphi 2007 and lower when you usen PNG support, you have write}
  {name of PNG package into required section of pavkage source .dpk}
  {and turn on this support here - remove the dot only bellow}
  {.$DEFINE PNG_GRAPHICS}
{$ENDIF}

{special feature for enumerate displayis like primary, secondary etc.}
{only for special purpose, multimonitors etc.}
{.$DEFINE _DMO_}