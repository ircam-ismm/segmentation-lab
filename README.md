The Max patch [segmentation-lab.maxpat](https://git.forum.ircam.fr/schwarz/segmentation-lab/-/raw/master/segmentation-lab.maxpat) allows to run 4 [pipo](https://ismm.ircam.fr/pipo/)-based segmenters (`onseg`, `yin`, spectral flux based on `fft:bands:delta` and `mfcc:delta`), and look at the data in various processing steps:
- raw input data
- processed/selected input data
- the onset detection function (odf) on which the detection threshold works
- the resulting segment markers

![screenshot](https://discussion.forum.ircam.fr/uploads/default/original/2X/6/6fd77aad4eb94cb710d85ac2830cface90b24be6.png)

This patch started out of a [topic in the mubu discussion forum](https://discussion.forum.ircam.fr/t/onset-detection-based-on-mel-flux/22772/22) by Notto Thielle (@sirnotto) and a patch by Christopher Trapani (@ctrapani).

### Requirements
You need [Mubu](https://ircam-ismm.github.io/max-msp/mubu.html) from the [Ircam Forum](https://forum.ircam.fr/projects/detail/mubu/) or the Max package manager.
