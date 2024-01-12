#try: import UsrIntel.R1
#except Exception as err:pass
try: 
    import traceback
    import sys
    import argparse
    import os
    import csv
    import time
    from datetime import date, datetime
    #import dateutil.parser as pars
    from signal import signal, SIGINT
    from datetime import date, datetime, timezone
   # import dateutil.parser as pars
    #from dateutil.tz import *
    import string
except Exception as err:
    import sys
    print(traceback.format_exc())
    sys.exit(-1)

######## ASSIGNMENT OF PARSER ARGUIMENTS ##################
parser = argparse.ArgumentParser(prog='run_python.py')
parser.add_argument('-index',metavar='<indexname>', required=True,type=str,help = "Indexname needed for the information" )
parser.add_argument('-addon',metavar='<addon>', type=str,required=True, help='Addon key=value pairs, Example: user=docansey,site=ghana')
parser.add_argument('-tstamp', metavar='<tstamp>', type=str, required=False ,help="Field to be used as tstamp in elasticsearch")
parser.add_argument('-float_type',default=False,metavar='<float_type>', type=str, required=False, help='list of field into float, Example age,zipcode,etc')
parser.add_argument('-debug', action='store_true', default=False, help="displaying more information on runs")
args = parser.parse_args()
# +++++++++++++++++++++++ testing
indexname = args.index
print("-I- Index:" , indexname)
print("-I- Dataset:", args.addon.split(","))
if args.debug and args.float_type: print("-I- float type", args.float_type.split(","))
if args.debug and args.tstamp:  print("-I- timestamp", args.tstamp)
